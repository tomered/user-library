export const transformToRawUser = (user: any) => {
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

export const transformRawUser = (rawUser: any) => {
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
