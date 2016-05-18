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
      _.bind(this.changeColor, this),
      this.changeRotation
    );
    changed.push(change(element));
  }

  return _.map(changed, function(change){
    return change.prop("outerHTML");
  });
};

Rekt.prototype.changeSize = function($element){
  var min = 0.8;
  var max = 1.2;
  var fontSize = (Math.random() * (max - min) + min).toFixed(3);

  return $element.css({ fontSize: fontSize + "em" });
};

Rekt.prototype.changeColor = function($element){
  return $element.css({ color: this.randomColor() });
};

Rekt.prototype.changeRotation = function($element){
  var degrees = _.random(-20, 20);
  var transform = "rotate(" + degrees + "deg)";

  return $element.css({
    "display": "inline-block",
    "-webkit-transform": transform,
    "-moz-transform": transform,
    "-ms-transform": transform,
    "-o-transform": transform,
    "transform": transform,
  });
};

// http://www.paulirish.com/2009/random-hex-color-code-snippets/
Rekt.prototype.randomColor = function(){
  var r = _.random(0, 255);
  var g = _.random(0, 255);
  var b = _.random(0, 255);
  return "rgb(" + r + "," + g + "," + b + ")";
};
