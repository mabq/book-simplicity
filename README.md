# Simplicity — Eric Normand

This book aims to guide you through two powerful ideas that are very important in functional programming: 1) [distinguishing actions, calculations, and data](ch01.md) and 2) using first-class abstractions.

## General principles

### Design is about pulling things apart

Functions give us a very natural way to separate concerns. Functions separate what value is provided as an argument from how the value is used. Very often, we are tempted to put things together. Bigger, more complex things feel more substantial. But things that are pulled apart can always be composed back together. The hard part is figuring out useful ways to pull them apart.

> 🚀 &nbsp; Keep functions small and simple — do one thing

- Easier to reuse — smaller, simpler functions are easier to reuse. They do less. They make fewer assumptions.
- Easier to maintain — smaller functions are easier to understand and maintain. They have less code. They are often obviously right (or wrong).
- Easier to test — smaller functions are easier to test. They do one thing, so you just test that one thing. Even if there is no identifiable problem in a function, if you see something you can pull out, it’s worth at least trying to extract it. It might lead to a better design.

As we pull things apart, and as functions have single responsibilities, we will find that they are easy to organize around concepts.

### Improve cohesion, reduce coupling

Good programming at the micro level depends on good coding conventions that help increase the visual distance between good code and bad so that the errors are easier to spot.

Good programming at the macro level depends on good module design.

***Good modules have strong cohesion*** — that means that all of the elements are related and working together to *accomplish a specific thing*. Bad modules have weak cohesion, often from poor organization and *trying to do too much*. JavaScript’s functions can be powerful here because we can pass in a function to take care of specific details that the module should not be concerned with.

***Good modules are loosely coupled*** — you should only need limited knowledge of a module’s interface in order to make good use of it. You should not need details of its implementation. *A good module hides its implementation.* A leaky module invites tight coupling. JavaScript offers many invitations for tight coupling. Mutually dependent modules are very tightly coupled indeed. That is nearly as bad and as grandiose as global variables.

Make your module interfaces simple and clean. Minimize dependencies. Good architecture is necessary to give programs enough structure to be able to grow la


## Vocabulary

### Side effects

Are any behavior of a function besides the return value.

Side effects are necessary yet problematic, functional programming has lots of tools for working with them.

### Pure functions

Functions that depend only on their arguments and don’t have any side effects.

### Referentially transparent

Means that a call to a calculation can be replaced by its result without affecting the program.

### DOM

The document object model (DOM) is the in-memory representation of an HTML page in a browser.

### Refactoring

Restructuring code without changing the programs behavior.

### Copy-on-write

Copying a mutable value before you modify it is a way to implement immutability.

