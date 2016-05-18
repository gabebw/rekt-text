# rekt-text

Rekt takes in some text and randomly changes the appearance of each character.
For example, it changes the size and color, among other things.

It returns an array of `<span>`s with `style` attributes set, one `<span>` per
character.

## Example usage

Assuming you're going to stick the output in a `<div id="output">`:

```javascript
var rekt = new Rekt("hey there");
var wackyText = rekt.wreck();
$("#output").html(wackyText.join());
```

## Options

You can specify options like this:

```javascript
var options = { tokenizer: function(text){ return text.split(""); } };
var rekt = new Rekt("hey there", options);
```

Available options:

* `tokenizer`: A function that takes in a string and returns chunks of the
  string. It's useful for using the same styling for chunks of the string, since
  each token (however you define "token") will have the same randomly-generated
  styling.

## Dependencies

rekt-text depends on Underscore (version 1.5.2+) and jQuery (any reasonably recent
version).

## Testing

To run the tests and see some sample output, open `test.html` in your browser.

No installation needed!
