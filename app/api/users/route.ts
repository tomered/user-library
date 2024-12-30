import { NextResponse } from "next/server";
import axios from "axios";
import { MockDatabase, User } from "@/app/types";
import { v4 as uuidv4 } from "uuid";

// @ts-ignore
const mockDatabase: MockDatabase = {
  initialized: false,
  users: [],
};

const transformToRawUser = (user: any) => {
  return {
    name: {
      title: user.name?.title || "Mr",
      first: user.name?.first || "",
      last: user.name?.last || "",
    },
    email: user.email || "",
    picture: {
      medium:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250", // Set the picture field to a template image
    },
    location: {
      country: user.location?.country || "",
      city: user.location?.city || "",
      street: {
        number: user.location?.street?.number || "",
        name: user.location?.street?.name || "",
      },
    },
    login: {
      uuid: user.id || "",
    },
  };
};

const transformRawUser = (rawUser: any) => {
  return {
    name: {
      title: rawUser.name?.title,
      first: rawUser.name?.first,
      last: rawUser.name?.last,
    },
    email: rawUser.email,
    picture: rawUser.picture?.medium,
    location: {
      country: rawUser.location?.country,
      city: rawUser.location?.city,
      street: {
        number: rawUser.location?.street?.number,
        name: rawUser.location?.street?.name,
      },
    },
    id: rawUser.login.uuid,
  };
};

export async function GET() {
  console.log("get initialized", mockDatabase.initialized);
  if (!mockDatabase.initialized) {
    try {
      const response = await axios.get<{ results: User[] }>(
        "https://randomuser.me/api/?results=10"
      );

      const users = response.data.results.map(transformRawUser);

      // @ts-ignore
      mockDatabase.users = response.data.results;
      mockDatabase.initialized = true;

      return NextResponse.json(users);
    } catch (error) {
      console.error("Error fetching random user data:", error);
      return NextResponse.json(
        { error: "Error fetching random user data." },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(mockDatabase.users.map(transformRawUser));
  }
}

export async function POST(req: Request) {
  try {
    const newUser = await req.json();

    // Validate the new user
    if (!newUser.name || !newUser.email || !newUser.location) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newUser.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const isEmailDuplicate = mockDatabase.users.some(
      (user) => user.email === newUser.email
    );
    if (isEmailDuplicate) {
      return NextResponse.json(
        { error: "Email address must be unique." },
        { status: 400 }
      );
    }

    // Generate a UUID for the new user
    newUser.id = uuidv4();

    // Transform to raw user format and add to the mock database
    const rawUser = transformToRawUser(newUser);
    mockDatabase.users.push(rawUser);

    // Return the transformed structured user
    return NextResponse.json(transformRawUser(rawUser), { status: 201 });
  } catch (error) {
    console.error("Error adding new user:", error);
    return NextResponse.json(
      { error: "Error adding new user." },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, name, email, location } = await req.json();

    // Check if ID is provided
    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    // Find the user to update
    const userIndex = mockDatabase.users.findIndex(
      (user) => user.login.uuid === id
    );

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    const existingUser = mockDatabase.users[userIndex];

    // Partial updates: merge updated fields with existing fields
    const updatedUser = {
      ...existingUser,
      name: {
        ...existingUser.name,
        ...(name || {}),
      },
      email: email || existingUser.email,
      location: {
        ...existingUser.location,
        ...(location || {}),
        street: {
          ...existingUser.location.street,
          ...(location?.street || {}),
        },
      },
    };

    // Validate updated fields
    if (updatedUser.name.first && updatedUser.name.first.trim().length < 3) {
      return NextResponse.json(
        { error: "First name must have at least 3 characters." },
        { status: 400 }
      );
    }

    if (updatedUser.name.last && updatedUser.name.last.trim().length < 3) {
      return NextResponse.json(
        { error: "Last name must have at least 3 characters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (updatedUser.email && !emailRegex.test(updatedUser.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (updatedUser.location.street.number === "") {
      return NextResponse.json(
        { error: "Street number cannot be empty." },
        { status: 400 }
      );
    }

    if (updatedUser.location.street.name === "") {
      return NextResponse.json(
        { error: "Street name cannot be empty." },
        { status: 400 }
      );
    }

    if (updatedUser.location.city === "") {
      return NextResponse.json(
        { error: "City cannot be empty." },
        { status: 400 }
      );
    }

    if (updatedUser.location.country === "") {
      return NextResponse.json(
        { error: "Country cannot be empty." },
        { status: 400 }
      );
    }

    const isEmailDuplicate = mockDatabase.users.some(
      (user) => user.email === updatedUser.email && user.login.uuid !== id
    );
    if (isEmailDuplicate) {
      return NextResponse.json(
        { error: "Email address must be unique." },
        { status: 400 }
      );
    }

    // Save the updated user
    mockDatabase.users[userIndex] = updatedUser;

    return NextResponse.json(transformRawUser(updatedUser));
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Error updating user." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID not provided" }, { status: 400 });
    }

    mockDatabase.users = mockDatabase.users.filter(
      (user) => user.login.uuid !== id
    );

    return NextResponse.json(mockDatabase.users);
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Error deleting user." },
      { status: 500 }
    );
  }
}
