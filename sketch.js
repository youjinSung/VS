
function setup() {
  noCanvas();
  let lang = navigator.langauge || 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start();

  function gotSpeech() {
    if(speechRec.resultValue){
      createP(speechRec.resultString);
    }
  }
}

  
