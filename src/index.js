var msg = document.querySelector("#message");
var btn = document.querySelector("#interact");
var result = document.querySelector("#answer");

btn.addEventListener("click", function() {
  let c = msg.value.toLowerCase();
  let reply = "";

  if (c.match("hello")) {
    reply = "hello there";
  } else if (c.match("kemon aso")) {
    reply = "ami valo asi";
  } else if (c.match("nam ki")) {
    reply = "amar name shahin";
  } else {
    reply = "janina";
  }

  result.innerHTML = reply;

  // this code for spech
  // var kotha = new SpeechSynthesisUtterance(reply);
  // window.speechSynthesis.speak(kotha);
});
