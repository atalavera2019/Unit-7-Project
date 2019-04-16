$("button").click(function(){

var donuts = $("#donuts").val();
var hotCold = $("#hotCold").val();

if (donuts > 5 && hotCold === "cold"){
    $("#answer").text("Amethyst");
}else if (donuts < 5 && hotCold === "cold"){
     $("#answer").text("Pearl");
}else if (donuts > 5 && hotCold === "hot"){
     $("#answer").text("Steven");
}else if (donuts < 5 && hotCold === "hot"){
     $("#answer").text("Garnet");
}else{
    
}
});