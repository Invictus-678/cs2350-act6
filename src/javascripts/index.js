// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO

function displayMessage() {
  let name = document.getElementById("name-f").value;
  let myText = "Hello " + name + ", Welcome!"
  alert (myText);
}

function showMessage(){
  alert("Display a message please im begging ");
}
function please(){
  alert('Hello ' + document.getElementById('name-f').value );
}

//nothign i do works and i give up