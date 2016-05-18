describe("Rekt", function(){
  var rekt;

  beforeEach(function(){
    rekt = new Rekt("hello");
  });

  it("returns 5 styled elements as HTML", function(){
    var result = rekt.wreck();

    expect(result).to.have.length(5);
    expect(result[0]).to.match(/^<span/);
  });

  it("changes the text size", function(){
    var result = rekt.wreck();

    expect(result).to.have.length(5);

    var fontSizes = _.map(result, function(item){
      return parseFloat($(item).css("font-size").replace("em", ""));
    });

    expect(_.find(fontSizes, function(fontSize){
      return fontSize != 1;
    })).to.be.ok();
  });

  it("changes the text color", function(){
    var result = rekt.wreck();

    var colors = _.map(result, function(item){
      return $(item).css("color");
    });

    expect(colors).not.to.contain("");
  });
});
