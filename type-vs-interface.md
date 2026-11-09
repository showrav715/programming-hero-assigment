# Type Alias vs Interface in TypeScript: What's the Real Difference

When you start working with TypeScript, one of the first confusion you hit is choosing between `type` and `interface`. Both let us define the shape of objects, so its super easy to use them Both ways. But under the hood, they behave different.

The main difference is declaration merging. If you define an interface more than once with the same name, TypeScript automatically combines them into one. But if you define a type with the same name twice, TypeScript shows a duplicate identifier error.

```typescript
interface User {
    name: string;
}
interface User {
    age: number;
}

type ID = string | number;