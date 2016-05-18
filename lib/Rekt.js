function Rekt(text){
  this.text = text;
};

Rekt.prototype.wreck = function(){
  var elements = _.map(this.text.split(""), function(token){
    return $("<span>").text(token);
  });
  var changed = [];

  for(var i = 0; i < elements.length; i++){
    var element = elements[i];
    var change = _.compose(
      this.changeSize,
      _.bind(this.changeColor, this)
    );
    changed.push(change(element));
  }

  return _.map(changed, function(change){
    return change.prop("outerHTML");
  });
};

Rekt.prototype.changeSize = function($element){
  var randomNumber = _.random(0.8, 1.2);
  var fontSize = Math.round(randomNumber * 100) / 100;

  return $element.css({ fontSize: fontSize + "em" });
};

Rekt.prototype.changeColor = function($element){
  return $element.css({ color: this.randomColor() });
};

// http://www.paulirish.com/2009/random-hex-color-code-snippets/
Rekt.prototype.randomColor = function(){
  var r = _.random(0, 255);
  var g = _.random(0, 255);
  var b = _.random(0, 255);
  return "rgb(" + r + "," + g + "," + b + ")";
};
