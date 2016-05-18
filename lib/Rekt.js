function Rekt(text){
  this.text = text;
  this.colors = [
    "red",
    "green",
    "blue",
    "fuchsia",
    "purple",
    "pink"
  ];
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
  var randomNumber = _.random(0.1, 2);
  var fontSize = Math.round(randomNumber * 100) / 100;

  return $element.css({ fontSize: fontSize + "em" });
};

Rekt.prototype.changeColor = function($element){
  var color = _.sample(this.colors);

  return $element.css({ color: color });
};
