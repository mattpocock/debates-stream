const whatever: any = 124123;

const omitFromObject2 = (obj: any, omittedKeys: Array<string>) => {
  for (const omittedKey in omittedKeys) {
    /**
     * I COULD NOT FIND A DECENT WAY TO MAKE THIS WORK
     * BUT WHO CARES BECAUSE IT'S CAUGHT INSIDE A REAL
     * NICE FUNCTION
     */
    delete obj[omittedKey];
  }

  return obj as any;
};

const omitFromObject = <TObj extends object, TOmitted extends keyof TObj>(
  obj: TObj,
  omittedKeys: Array<TOmitted>
) => {
  for (const omittedKey in omittedKeys) {
    /**
     * I COULD NOT FIND A DECENT WAY TO MAKE THIS WORK
     * BUT WHO CARES BECAUSE IT'S CAUGHT INSIDE A REAL
     * NICE FUNCTION
     */
    delete obj[omittedKey];
  }

  return obj as Omit<TObj, TOmitted>;
};

const obj = omitFromObject(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  ["a", "b"]
);

obj.c;
