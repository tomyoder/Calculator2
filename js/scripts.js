var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number3, number4) {
  return number3 - number4;
};

var multiply = function(number5, number6) {
  return number5 * number6
};

var divide = function(number7, number8) {
  return number7 / number8;
};



$(function(){
   $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = add(number1,number2);
    $("#output").text(result);
  });

   $("form#subtract").submit(function(event){
    event.preventDefault();
    var number3 = parseInt($("#number3").val());
    var number4 = parseInt($("#number4").val());
    var result = subtract(number3,number4);
    $("#output").text(result);
  });

   $("form#multiply").submit(function(event){
    event.preventDefault();
    var number5 = parseInt($("#number5").val());
    var number6 = parseInt($("#number6").val());
    var result = multiply(number5,number6);
    $("#output").text(result);
  });

   $("form#divide").submit(function(event){
    event.preventDefault();
    var number7 = parseInt($("#number7").val());
    var number8 = parseInt($("#number8").val());
    var result = divide(number7,number8);
    $("#output").text(result);
  });
}); 
