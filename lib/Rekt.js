function Rekt(text){
  this.text = text;
};

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

Rekt.prototype.wreck = function(){
  var tokens = this.text.split("");
  var changed = [];

  for(var i = 0; i < tokens.length; i++){
    var token = tokens[i];
    changed.push(this.changeSize(token));
  }

  return changed;
};

Rekt.prototype.changeSize = function(token){
  var randomNumber = getRandomArbitrary(0.1, 2);
  var fontSize = Math.round(randomNumber * 100) / 100;

  return $("<span>").
    css({ fontSize: fontSize + "em" }).
    text(token);
};
