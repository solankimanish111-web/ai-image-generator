async function generateImage(){

let prompt = document.getElementById("prompt").value;

let response = await fetch(
"https://api.openai.com/v1/images/generations",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({
model:"gpt-image-1",
prompt:prompt,
size:"1024x1024"
})

});

let data = await response.json();

document.getElementById("output").src =
data.data[0].url;

}
