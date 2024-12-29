interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface ID {
  name: string;
  value: string;
}

interface Picture {
  medium: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

export interface UserData {
  name: Name;
  location: Location;
  email: string;
  id: ID;
  picture: Picture;
}
