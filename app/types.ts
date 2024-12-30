export interface MockDatabase {
  initialized: boolean;
  users: User[];
}

interface Location {
  country: string;
  city: string;
  street: {
    number: string;
    name: string;
  };

}


interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  medium: string;
}
interface Login {
  uuid: string;
}

export interface UserData {
  name: Name;
  location: Location;
  email: string;
  id: string;
  picture?: string;
}
export interface User{
  name: Name;
  location: Location;
  email: string;
  login: Login;
  picture: Picture;
}

