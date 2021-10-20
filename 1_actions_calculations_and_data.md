# Distinguishing actions, calculations and data

> 🚀 &nbsp; Prefer data to calculations and calculations to actions.

<!-- ------------------------------------------------------------- -->


## Data

Data means values — in JavaScript, data is implemented using built-in data types.

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

### Mutability

Values are stored in memory — to access a value you need it's address in memory.

Mutability is the ability of a value to mutate without changing it's address in memory.

Primitive values are immutable — applying an operation on a primitive value will always create a new value (stored in a different address in memory).

Objects are mutable — applying an operation on an object will mutate the object (at the given address in memory).

### Variables and Scope

Variables are records that bind name identifiers to addresses in memory.

Only variables defined with `let` are allowed to change it's address value after declaration (a.k.a rebinding) — don't confuse rebinding with mutability, rebinding is a property of the variable, mutability is a property of the data.

> Immutable data bound to a `let` variable has the same effect as mutable data bound to a `const` variable.

Scopes determine accessibility to variables — a variable belongs to the scope where it was defined.

There are 3 types of scopes:
- *Global scope* — parent of all scopes.
- *Function scope* — delimited by the function body.
- *Block scope* — delimited by brackets.

Scopes nest — inner scopes have access to outer scopes but outer scopes do not have access to inner scopes.

<img src="./sources/png/scope.png" alt="Scope" style="width: 260px">

e.g. code inside scope `F` has access to all data bound to variables declared in scopes `D`, `B` and `Global Scope` but does not have access to data bound to variables declared in scopes `A`, `E` and `C`.

Variables defined with `const` and `let` have block scope, avoid `var` which has function scope and is *hoisted*.



### Equality

Primitive values are compared by value — variables do not need to point to the same address in memory.

Objects are compared by address — variables need to point to the same address in memory.

### Composition

Data can only be composed of more data.

Structure is what gives meaning to data — choosing the right data structure is critical for a straight forward implementation.

### Data and Functional Programming

Functional programming looks at data as ***facts about events*** — a record of something that happened.

Like accounting, functional programming relies on *record-keeping* — once data is created it should never change.

Immutable data structures:

- Avoid time dependability — functions that do not depend on time are much simpler and secure.
- Allow for efficient change detection — if the reference to an object didn't change, the object itself did not change.
- Make cloning relatively cheap — unchanged parts of a data tree don't need to be copied and are shared in memory with older versions of the same state.

Generally speaking, these benefits can be achieved by making sure you never change any property of an object, array or map, but by always creating an altered copy instead — see notes about Immer below.

### Why data over calculations?

- Data is *serializable* — no problem being transmitted over a wire or stored to disk and read back later.
- Data is *comparable* — easily compare two pieces of data to see if they are equal or not.
- Data is *open for interpretation*.


<br>


## Calculations

Calculations are functions with zero implicit inputs and zero side-effects.

> 🔥 &nbsp; Any code that injects time-dependability into a function is an implicit input. Any code that provokes a *side-effect* is an implicit output.

No matter when they are run, or how many times they are run, calculations will always give the same output for the same inputs — zero *side-effects*.

### Objects as explicit inputs

Function arguments — any other input is implicit.

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




<mark>***Shared mutable state is time dependent***</mark> 

***Keep actions small***, remove everything that isn’t necessary from the action. Restrict actions to interactions with the world.

Minimize implicit inputs and outputs — any that you can eliminate will improve the testability and reusability of your actions, even if you don’t cross into calculation land. Select and extract the calculation code, convert implicit inputs to arguments, and implicit outputs to return values.

Limit time dependency whenever possible — e.g. allow an action to run once.

Actions often depend on smaller actions, calculations, and data. Decompose an action into smaller actions repeatedly until no more actions are needed, then compose them back.


<!-- ------------------------------------------------------------- -->


