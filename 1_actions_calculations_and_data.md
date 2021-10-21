# Distinguishing actions, calculations and data

> 🚀 &nbsp; Prefer data to calculations and calculations to actions.


<!-- ------------------------------------------------------------- -->


## 1) Data

In JavaScript, data is implemented using built-in data types.

The set of types consists of:

- *Primitive values* — immutable values represented directly at the lowest level of the language.
  - Boolean type
  - Null type
  - Undefined type
  - Number type
  - BigInt type
  - String type
  - Symbol type

- *Objects* — collections of properties (key-value pairs).

### Data mutability

Data are records composed by:

- A data address — where the value is located memory
- A data value — the actual value of the data

Addresses are always immutable. Values can be mutable or immutable depending on the data type:

- Primitive values are always immutable — operations always create new addresses with new values, original addresses and values remain unchanged
- Objects values are mutable by default — operations mutate the value in-place (same address, different value). You can always freeze an object value to make it immutable, just keep in mind that freezing is a shallow operation

### Variables

Variables are records composed by:

- A variable identifier — the name that helps us identify the data value
- A variable pointer — the address of the data value we need to identify

Identifiers are always immutable. Pointers can be mutable or immutable depending on how the variable is declared:

- `const` — immutable pointer, block scope, never hoisted.
- `let` — mutable pointer, block scope, never hoisted.
- `var` — mutable pointer, function scope, hoisted.

Prefer `const` over `let`, avoid `var`.

#### Scopes

Scopes determine accessibility to variables, there are 3 types:

- *Global scope* — the one and greatest, parent of all scopes
- *Function scope* — delimited by the function body
- *Block scope* — delimited by brackets

Scopes can nest, you can define a block inside a function inside another function and so on — inner scopes always have access to data in outer scopes, outer scopes never have access to data in inner scopes.

A variable belongs to the scope where it was declared.

<img src="./sources/png/scope.png" alt="Scope" style="width: 260px">

e.g. code inside scope `F` has access to all data values bound to variables declared in scopes `D`, `B` and `Global Scope` but does not have access to data values bound to variables declared in scopes `A`, `E` and `C`.
 
### Data and Functional Programming

 <!-- Pasar esto a calculations -->

Functional programming principles are based on immutable data.
### Data and Functional Programming

Functional programming looks at data as ***facts about events*** — a record of something that happened.

As you will see shared mutable data is the root of all evil.

Protect your code by:

- 

Some of the benefits of immutable data structures are:

- Avoid time dependability — code that does not depend on time is much more reliable.
- Allow for efficient change detection — if an object address didn't change, the object itself did not change.
- Make cloning relatively cheap — unchanged parts of a data tree don't need to be copied and are shared in memory with older versions of the same state.

Generally speaking, these benefits can be achieved by making sure you never change any property of an object, array or map, but by always creating an altered copy instead — see notes about Immer below.


Some of the benefits of immutable data structures are:

- Avoid time dependability — shared mutable data injects time dependability
- Improve security — external libraries won't be able to mutate data accessible by out code
- Allow for efficient change detection — if an object address didn't change, the object itself did not change
- Make cloning relatively cheap — unchanged parts of a data tree don't need to be copied and are shared in memory with older versions of the same state.

Generally speaking, these benefits can be achieved by making sure you never change any property of an object, array or map, but by always creating an altered copy instead — see notes about Immer below.

### Composition

Data can only be composed of more data.

Structure is what gives meaning to data — choosing the right data structure is critical for a straight forward implementation.

### Why data over calculations?

- Data is *serializable* — no problem being transmitted over a wire or stored to disk and read back later.
- Data is *comparable* — easily compare two pieces of data to see if they are equal or not.
- Data is *open for interpretation*.


<br>


## Calculations

Calculations are functions with zero implicit inputs and zero implicit outputs.

No matter when they are run, or how many times they are run, calculations will always return the same output for the same inputs without causing any *side-effects*.

### Zero implicit inputs

> It is impossible to write calculations on mutable data

Mutable data equals time dependability — relying on a data value that might change over time will 



Any code that injects time-dependability into a function is an implicit input.

Calculations only accept data values passed as arguments — any other method is implicit.

A function is called with a list of expressions as arguments, before running the function those expressions are turned into values, those values are stored in memory and it's addresses are bound to the variables initialized by function parameters — local variables act like `let` variables.

> Local variables and external variables point to the same addresses in memory.

Applying operations on local variables bound to immutable values will simply create new values, having no effect on any outer scope. On the other hand, **applying operations on local variables bound to objects will mutate the same objects that are accessible from outer scopes** — turning our function into an action.

> 🚀 &nbsp; Always use Immer to apply changes to objects.

*Copy-on-write* dictates that we should always make a copy of the object and modify it instead of modifying the original — only useful for implementing immutability within code that we control.

*Defensive-copying* is a complementary discipline that can be used when working with untrusted code, it dictates that we should always make ***deep-copies*** as data leaves or enters our code.

While effective, the correct implementation of both disciplines throughout the  codebase is expensive and cumbersome.

[Immer](https://github.com/immerjs/immer) is a tiny library that simplifies handling immutable data structures, its key benefits are:

1. Boilerplate reduction — less noise, more concise code
2. No new APIs or data structures
3. Structural sharing out of the box — better performance
4. Object freezing out of the box
5. Easy deep updates
6. No accidental mutations

*Defensive-copying* works by never sharing memory addresses of mutable data with untrusted code — making expensive deep-copies every time data enters or leaves our safe-zone.

Immer works by deep-freezing objects before relying on them — new copies are fast shallow copies that use structural sharing.

### Implicit inputs

Rebinding and mutability have the same effect when dealing with implicit inputs.

### Zero implicit outputs

> Any code that provokes a *side-effect* is an implicit output.

### Composition

Calculations can be composed of smaller calculations and data. ***Decompose a calculation into smaller calculations until the implementation becomes obvious***, then compose them back.

### Why calculations over data?

- No time dependability — no need to worry about what else is running at the same time, what has run in the past, what will run in the future or how many times you have already run it already
- More composable — simple functions with no side-effects are much more reusable
- Much easier to test — no need to simulate state, far less scenarios to test
- Ready for distributed systems — a consequence of no time dependability
- Easier to be analyzed by a machine — static analysis


<br>


## Actions

Actions are functions with implicit inputs or implicit outputs.

Depending on anything or affecting anything outside of function scope means *time dependability* — the result could be different depending on *when* we call the function (any time range is valid) or *how many times* we call the function.

> 🚀 &nbsp; Time dependability is a big deal, it makes code much harder to reuse, test and maintain.

Because actions are the hardest to get right, we separate them so we can devote more focus to them.

<!-- ------------------------------------------------------------- -->
Actions spread — one little action somewhere and it spreads all over.

Don't allow any code to mutate data values accessible from your code.


<mark>***Shared mutable state is time dependent***</mark> 

***Keep actions small***, remove everything that isn’t necessary from the action. Restrict actions to interactions with the world.

Minimize implicit inputs and outputs — any that you can eliminate will improve the testability and reusability of your actions, even if you don’t cross into calculation land. Select and extract the calculation code, convert implicit inputs to arguments, and implicit outputs to return values.

Limit time dependency whenever possible — e.g. allow an action to run once.

Actions often depend on smaller actions, calculations, and data. Decompose an action into smaller actions repeatedly until no more actions are needed, then compose them back.


<!-- ------------------------------------------------------------- -->


