import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc? 
 */
type MyFuncReturn = typeof myFunc extends (...args: any) => infer R ? R : never;

type tests = [Expect<Equal<MyFuncReturn, string>>];
