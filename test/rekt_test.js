describe("Rekt", function() {
  var rekt;

  beforeEach(function() {
    rekt = new Rekt("hello");
  });

  it("changes the text size", function (){
    var result = rekt.wreck();

    expect(result).to.have.length(5);

    var fontSizes = _.map(result, function(item) {
      return parseFloat($(item).css("font-size").replace("em", ""));
    });

    expect(_.find(fontSizes, function(fontSize){
      return fontSize > 1;
    })).to.be.ok();

    expect(_.find(fontSizes, function(fontSize){
      return fontSize < 1;
    })).to.be.ok();
  });
});
