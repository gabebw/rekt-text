describe("Rekt", function(){
  var rekt;

  beforeEach(function(){
    rekt = new Rekt("hello");
  });

  it("returns each letter wrapped in a <span>", function(){
    var result = rekt.wreck();

    expect(result).to.have.length("hello".length);
    expect(result).to.be.an("array");
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

  it("changes the text rotation", function(){
    var result = rekt.wreck();

    var transform = $(result[0]).css("transform");
    var degrees = parseInt(transform.replace(/rotate\((-?\d+)deg\)/, "$1"), 10);

    expect(degrees).to.be.within(-20, 20);
  });
});
