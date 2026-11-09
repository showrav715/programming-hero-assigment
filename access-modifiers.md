# Access Modifiers in TypeScript OOP

TypeScript supports object-oriented programming. One useful feature of classes in TypeScript is access modifiers. They control who can access or change data. This helps keep code clean and avoid unwanted changes.

TypeScript gives us four main modifiers: `public`, `private`, `protected`, and `readonly`. 

Public: Default behavior, accessible anywhere.
Private: Strictly locked inside the class where its defined.
Protected: Accessible within the class and its subclasses.
Readonly: Lets you read the value once during initialization, then locks it permanently.

Here is a quick example showing how they fit together :

```typescript

class Manager {
    public name: string;
    private baseSalary: number;
    protected deperment: string;
    readonly id: number;

    constructor(name: string, baseSalary: number, deperment: string, id: number) {
        this.name = name;
        this.baseSalary = baseSalary;
        this.deperment = deperment;
        this.id = id;
    }
}