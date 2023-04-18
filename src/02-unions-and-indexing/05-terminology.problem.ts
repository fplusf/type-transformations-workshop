/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

// Discriminated union - union of objects with a common property
// Used to model a sum type (e.g. a type that can be one of several different types)
type A =
  | {
      type: "a";
      a: number;
    }
  | {
      type: "b";
      b: boolean;
    }
  | {
      type: "c";
      c: string;
    };

const result = (a: A) => {
  switch (a.type) {
    case "a":
      return a.a;
    case "b":
      return a.b;
    case "c":
      return a.c;
  }
}

// Union
type B = "a" | "b" | "c";

// Enum
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
