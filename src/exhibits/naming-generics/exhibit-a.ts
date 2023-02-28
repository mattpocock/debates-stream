type ReturnValue<TFunc> = TFunc extends (...args: any[]) => infer TReturnValue
  ? TReturnValue
  : never;
