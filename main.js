function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;

}


function clearCanvas(){
    background("white");
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){

// CODE FOR WEIGHT/WIDTH
strokeWeight(13);
//0 means black
stroke(0)

// THE P MEANS PREVIOUS AND ITS ALSO A PS FUNCTION SO FROM P TO THE CURRENT
if (mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
}
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function gotResult(error, results)
{ 
   if(error){
        console.error(error);
  }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;

    document.getElementById('confidence').innerHTML ='Confidence: ' + Math.round(results[0].confidence * 100) +'%';

    utterThis = new SpeechSynthesisUtterance(results[0].label);
   synth.speak(utterThis);
   
}
