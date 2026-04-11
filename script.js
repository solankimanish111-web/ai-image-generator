function generateImage(){

let prompt = document.getElementById("prompt").value;

if(prompt===""){
alert("Please type something");
return;
}

let url = "https://source.unsplash.com/600x600/?" + prompt;

document.getElementById("output").src = url;

}
