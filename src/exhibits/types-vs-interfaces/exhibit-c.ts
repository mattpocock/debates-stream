type UserWithStringId = {
  id: string;
  name: string;
  age: number;
};

type UserWithNumericId = {
  id: number;
  name: string;
  age: number;
};

type User = UserWithNumericId & UserWithStringId;

const user: User = {} as any;

user.id;

export {};
