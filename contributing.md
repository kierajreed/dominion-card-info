## Contributing

There is a JSON file called `cardtexts.json`.
To add a card you add a line to the file in the following format:
```js
"card-identifier": ["Card Name", "Card text", "card artist"]
```
- The card identifier is the card's name, fully lowercase, with all spaces replaced with hyphens.
- The card name if the name as appearing on the card.
- The card text is the card text formatted for a discord embed.
The card artist is the artist's name.

Example:
```js
"worker's-village": ["Worker's Village", "+2 Cards\n+2 Actions\n+1 Buy", "Claus Stephan"]
```
