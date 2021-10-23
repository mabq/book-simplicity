### How data works?

Data are records composed by:

- A data address — the location of the value in memory
- A data value — the actual value of the data

Addresses are always immutable, values can be mutable or immutable depending on the data type:

- Primitive values are always immutable — operations always create new addresses with new values, original addresses and values remain unchanged
- Object values are mutable by default — operations effectively change the data value (different value, same address). You can always freeze an object to make it immutable, just keep in mind that freezing is a shallow operation


### How variables work?

Variables are records composed by:

- A variable identifier — the name that helps us identify the data bound to the variable
- A variable pointer — the address of the data value we want to identify

Identifiers are always immutable. Pointers can be mutable or immutable depending on how the variable is declared:

- `const` — immutable pointer, block scope, never hoisted.
- `let` — mutable pointer, block scope, never hoisted.
- `var` — mutable pointer, function scope, hoisted.

Never use `var`, prefer `const` over `let`.

A variable belongs to the scope where it was declared.

The key thing to understand is that variables contain addresses, not values.


### How Scopes work?

Scopes determine accessibility to variables, there are 3 types:

- *Global scope* — there is only one, its defined by the environment and acts as the parent of all other scopes
- *Function scope* — a functions serves as closure and thus creates a scope, so that a variable defined within the function cannot be accessed from outside the function or within other functions
- *Block scope* — similar to function scope but delimited by brackets

Scopes can nest, so you can have a block scope inside a function scope inside another function scope and so on — inner scopes always have access to variables declared in outer scopes, outer scopes never have access to variables declared in inner scopes.

<img src="../images/1.1_scope.png" alt="Scope" style="width: 260px">

e.g. code inside scope `F` has access to all data values bound to variables declared in scopes `D`, `B` and `Global Scope` but does not have access to data values bound to variables declared in scopes `A`, `E` and `C`.