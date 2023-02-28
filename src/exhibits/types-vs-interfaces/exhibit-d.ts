interface UserWithStringId {
  id: string;
  name: string;
  age: number;
}

interface UserWithNumericId {
  id: number;
  name: string;
  age: number;
}

interface User extends UserWithStringId, UserWithNumericId {}

const user: User = {} as any;

user.id;

export {};
