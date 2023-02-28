type User = {
  id: string;
};

interface User2 {
  id: string;
}

const user: User2 = {};

window.foo;

declare global {
  interface Window {
    foo: string;
  }
}

export {};
