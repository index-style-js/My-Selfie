var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){


console.log(event);

var Content = event.results[0][0].transcript;

document.getElementById("textbox").innerHTML = Content;
console.log(Content);

if(Content=="take my selfie"){

console.log("Taking Selfie");

speak();


}


}

function speak(){

var synth = window.speechSynthesis;
speechdata = "taking selfie in 5 seconds";
var utterthis = new SpeechSynthesisUtterance (speechdata); 
synth.speak(utterthis); 
Webcam.attach(camera);
setTimeout(function() {
    takeSnapshot();
    save();
}, 5000);

}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");

function takeSnapshot(){

Webcam.snap(function(data_url){

document.getElementById("result").innerHTML='<img id="selfieImg" src="'+data_url+'">';
});
}

function save(){

    link=document.getElementById("link");
    img=document.getElementById("selfieImg").src;
    link.href=img;
    link.click();


}
