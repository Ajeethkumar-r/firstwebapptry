var btn = document.querySelector("#btnTranslate")
var engText = document.querySelector("#inputRead")
var outputDiv = document.querySelector("#output")
btn.addEventListener("click",clickFn)
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getUrl(text){
    return serverUrl +"?" + "text=" + text
}

function errorHandler(error){
    console.log("error-occured",error)
    alert("check you internet connection")
}

function clickFn(){
   var inputText = engText.value
   fetch(getUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var outputText = json.contents.translated
            outputDiv.innerText = outputText
   })
   .catch(errorHandler)
}