
(function (){

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {


  var firstLetter = names[i].charAt(0);
  var res = firstLetter.toLowerCase();



  if (res == "j") {
    byeSpeaker.speaks(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}


})();

