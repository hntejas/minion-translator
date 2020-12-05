var btnTranslate = document.querySelector("#button-translate");
var textInput = document.querySelector("#textarea-input");
var outputArea = document.querySelector("#area-output");
var ENDPOINT_URL = "https://api.funtranslations.com/translate/minion.json";
//TestURL: "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

btnTranslate.addEventListener("click", translateText);

function translateText() {
  if (textInput.value) {
    toggleTranslateButton();
    var requestUrl = getRequestUrl();
    console.log(requestUrl);
    fetch(requestUrl)
      .then(convertToJson)
      .then(displayTranslation)
      .catch(displayError);
  }
}

function toggleTranslateButton() {
  btnTranslate.disabled = !btnTranslate.disabled;
}

function getRequestUrl() {
  return ENDPOINT_URL + "?text=" + encodeURI(textInput.value);
}

function convertToJson(serverReturnData) {
  return serverReturnData.json();
}

function displayTranslation(jsonData) {
  var translatedText = jsonData.contents.translated;
  outputArea.innerHTML = translatedText;
  toggleTranslateButton();
}

function displayError(error) {
  toggleTranslateButton();
  alert(
    "Sorry! Unable to process your request currently. \nPlease try again later."
  );
}
