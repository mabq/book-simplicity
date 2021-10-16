# Stratified design

Build abstraction layers organized by rate of change to make code easier to maintain — stuff at the top is easy to change because very little other code relies on it.

Each piece of code is built on a more stable foundation.

<!-- ------------------------------------------------------------- -->



<!-- ------------------------------------------------------------- -->

## Patterns

#### Straightforward implementation
Choosing the right data structure helps a lot.

The importance of function signatures — because the signature changed, we need to modify the functions that were using the old one.

Do one thing and one thing well — small functions are easier to understand and get right.

#### Abstraction barriers
Hide implementation details — work with different levels of abstraction.

#### Minimal interface
Interface is king — go with a small set of powerful features.

Changes are expensive!

#### Comfortable layers
Don't over do it — stop abstracting when code feels good to work with.


## "Illities":

#### Testability
Computations are much easier to test.

Bottom code should be rock-solid.

#### Reusability
Straight forward functions are easy understand and compose.

Do one thing well!

#### Maintainability
Code suspect to change should always be on top.

Abstraction layers hide details — focus on the problem at hand.       
        