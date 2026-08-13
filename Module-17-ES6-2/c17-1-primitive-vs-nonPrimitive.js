/* 

✅✅✅ JavaScript data types can broadly be divided into two categories:

Primitive Data Types
Non-Primitive (Reference) Data Types




Differences :

| Feature                     | Primitive               | Non-Primitive           |
| --------------------------- | ----------------------- | ----------------------- |
| Examples                    | String, Number, Boolean | Object, Array, Function |
| Stores                      | Value                   | Reference to object     |
| Can contain multiple values | Generally ❌            | ✅                     |
| Mutable                     | ❌                      | ✅                     |
| Assignment                  | Copies value            | Copies reference        |
| Compared by                 | Value                   | Reference               |
| `typeof`                    | Varies                  | Usually `"object"`      |
| Can have properties         | ❌                      | ✅                    |


➡️➡️See the image  (c17-1-image-of-pNp.png) to understand the storing system






✅✅ 1. Primitive Data Types

Primitive values are single, simple values. They are immutable, meaning the original primitive value itself cannot be changed.

JavaScript has 7 primitive data types:

| Type        | Example         | Description                  |
| ----------- | --------------- | ---------------------------- |
| `String`    | `"Hello"`       | Text                         |
| `Number`    | `25`, `3.14`    | Numbers                      |
| `BigInt`    | `123n`          | Very large integers          |
| `Boolean`   | `true`, `false` | Logical value                |
| `Undefined` | `undefined`     | Value not assigned           |
| `Null`      | `null`          | Intentional absence of value |
| `Symbol`    | `Symbol("id")`  | Unique identifier            |





✅✅ 2. Non-Primitive Data Types

Non-primitive data types are objects/reference types that can contain multiple values or more complex structures.

The main ones are:

Object
Array
Function

Technically, arrays and functions are objects in JavaScript.










*/