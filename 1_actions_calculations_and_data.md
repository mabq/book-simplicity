# Distinguishing actions, calculations and data.

> Prefer data to calculations and calculations to actions.

## Actions

In JavaScript, we use functions to implement actions.

Any function that depends on time is an action — the result of an action may be different depending on how many times we call it or when we call it (now or later).

<mark>***Time dependency is a big deal***</mark>, it makes code much harder to read[^1], maintain[^2], test[^3] and reuse[^4], this is why functional programmers isolate actions as much as possible moving all code they can to calculations and data.

Actions often depend on smaller actions, calculations, and data. Decompose an action into smaller actions until no more actions are needed, then compose them back.

Functional programmers have some tricks for how to best deal with actions:
- Keep actions small — remove everything that isn’t necessary from the action.
- Restrict actions to interactions with the world.
- Limit how dependent on time an action is (e.g. allow it to run once).


## Calculations

In JavaScript, we use functions to implement calculations.

Any function that does *not* depend on time is a calculation.

Calculations depend on their arguments and their arguments only, always return value and never affect anything outside the calculation scope. It doesn't matter when they are run, or how many times they are run, they will always give the same output for the same inputs.

Calculations are *referentially transparent* — meaning that the function execution can be replaced with the returned value and nothing is affected.

Calculations can be composed of smaller calculations and data. Decompose a calculation into smaller calculations until the implementation becomes obvious, then compose them back.

Beware, <mark>***dependence on time spread all over***</mark>, all code depending on an action becomes an action itself — no matter how nested the action is in the call-stack.

Compared to actions, calculations offer the following **advantages**:

- No need to worry about what else is running at the same time, what has run in the past and what will run in the future or how many times you have already run it already.
- More composable.
- Much easier to test.
- Ready for distributed systems.
- Easier to be analyzed by a machine — static analysis.


## Data

Look at data as ***facts about events*** — a record of something that happened. 

Every time an event occurs data is recorded and once recorded it should never change. If the event occurs again, new data is produced, previously produced data is never changed.

Data can only be composed of more data — data is not runnable.

Data encodes meaning in structure — much of the work is to think about how to represent data so that it can be interpreted now and reinterpreted in the future.

Generating and consuming data should always be separate processes.

Compared to calculations, data offers the following **advantages**:

- Serializable — no problem being transmitted over a wire or stored to disk and read back later, data is not runnable.
- Comparable — easily compare two pieces of data to see if they are equal or not.
- Interpretation — data can be interpreted in multiple ways.


### Immutable data in JavaScript

In JavaScript, data is implemented using the built-in data types.

| Type       | Mutability         | Passed and compared |
|------------|--------------------|---------------------|
| Primitives | Immutable          | By value            |
| Objects    | Mutable by default | By reference        |

This means that primitives have built in *copy-on-write* behavior, objects do not, so when you pass objects around they become *shared mutable state* by default.

Functions that read from or write to *shared mutable state* are actions because <mark>*shared mutable state* is time dependent</mark> (the value can be different at different times). **Calculations require immutable inputs and immutable outputs**.

*Copy-on-write* and *defensive-copying* are effective but expensive. Use a library like [Immer](https://github.com/immerjs/immer) which implements immutability without affecting too much on performance due to structural sharing (deep-freezing source objects before relying on them, instead of copying them).

Producing immutable objects is slower, but comparing references is much much faster than doing deep value comparisons. Reading and comparing happen more ofter than writing.

###### Footnotes

[^1]: An action on line 800 might depend on code on line 10.
[^2]: Moving an action up or down could break the code.
[^3]: Requires mockups and a lot more scenarios to test.
[^4]: Side effects will be triggered every time you call the action.
