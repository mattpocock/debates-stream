type FuncReturn =
  | {
      //
      a: number;
    }
  | {
      b: number;
    };

const func2 = () => {
  return "abc";
};

export const func = (input: string): FuncReturn => {
  switch (input) {
    case "a":
      return {
        b: 2,
      };
  }

  return {
    a: 1,
  };
};

const output = func("awdawd");
