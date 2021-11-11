# Exercise notes

The code is divided into data types — the `customer` and `purchase` data types are the information per se, their internal structures are never leaked outside of the modules. The `customers` and `purchases` data types are much simpler, they just define how the collections are stored.

Notice the relationships:

- `customers` one-to-many `customer`s
- `customer` one-to-many `purchases`
- `purchases` one-to-many `purchase`s.

Most code is solved by functions at the information data types, collection data types just apply functions over the entire collection.