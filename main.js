x = 0;
y = 0;
draw_circle="";
draw_rect="";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening plz speak";
    recognition.start();
}

recognition.onresult = function(event) 
{
    console.log(event);

    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML = "The speach has been recognised as - "+content
    if(content=="circle")
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle="set";
    }
    if(content=="rectangle")
    {
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*300);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect="set";
    }
}

function setup()
{
  canvas=createCanvas(900,600);
}

function draw()
{
   if (draw_circle=="set")
   {
       circle(x,y,35);
       document.getElementById("status").innerHTML = "Circle is drawn! :D";
       draw_circle="";
   }
   if (draw_rect=="set")
   {
       rect(x,y,60,40);
       document.getElementById("status").innerHTML = "Rectangle is drawn! :D";
       draw_rect="";
   }
}

