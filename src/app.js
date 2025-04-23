import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.us'];
  //pronombre + adj + nombre + extension
  //para cada pronombre iteraremos por cada adjetivo que iterara cada nombre que iterará cada extension.
  
  let insertText = document.getElementById("insert").innerText;

  for(let aPronoun of pronoun){
    for(let anAdj of adj){
      for(let aNoun of noun){
        for(let anExtension of extensions){
          let result = `${aPronoun}${anAdj}${aNoun}${anExtension}`;
          document.getElementById("insert").innerHTML += `${result}</br>`; 
          insertText 
          console.log(result);
        }
      }
    }
  }

};
