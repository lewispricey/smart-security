export interface User {
  name: string;
  accessCode: string;
}

const users: User[] = [
  {
    name: "lewis",
    accessCode: "5678",
  },
  {
    name: "james",
    accessCode: "4321",
  },
];

export default users;
