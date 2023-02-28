// Gives you all enums, reaming keys and such. and the predictably of a normal object ( none of the weird enum behaviors )

enum Shape {
  circle = "circle",
  square = "square",
}

export const shapes = {
  [Shape.circle]: {
    shape: ["x", "y", "rx"],
  },
  [Shape.square]: ["x", "y", "height", "width"],
} as const;

// export type Shape = keyof typeof shapes;

// const resolveShape = <T extends Shape>(shape: T): typeof shapes[T] => {
//   return {} as any;
// };

const something = resolveShape("square");
