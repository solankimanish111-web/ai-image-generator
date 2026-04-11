function generateImage(){

let prompt = document.getElementById("prompt").value;

let imageURL = "https://source.unsplash.com/600x600/?" + prompt;

document.getElementById("output").src = imageURL;

}
