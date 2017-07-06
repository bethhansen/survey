$(function(){
  $("form#survey").submit(function(event){
    var name = $("input#name").val();
    var food = $("input#food").val();
    var music = $("input#music").val();
    var color = $("input#color").val();
    var shoe = $("input#shoe").val();

    event.preventDefault();
  });
});
