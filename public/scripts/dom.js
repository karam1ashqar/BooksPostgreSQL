var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");

if( !cookieValue || cookieValue == null || cookieValue == undefined || cookieValue == "" ) {
  div_show();
  document.getElementById('WelcomeMsg').style.display = "none";
}
else {
  document.getElementById('WelcomeMsg').innerText = "Hello " + cookieValue+"!";
  document.getElementById('WelcomeMsg').style.display = "block";


}

document.getElementById("arrow-down").addEventListener("click", function(e) {

  e.preventDefault();

  var x = document.getElementsByClassName("add-book--container")[0];
  var y = document.getElementById('arrow-down');
  if (x.style.opacity == 1) {
    x.style.position = "absolute";
    x.style.opacity = 0;
    x.style.visibility = "hidden";
    y.style.color = "#141414";
  } else {
    x.style.position = "relative";
    x.style.visibility = "visible";
    x.style.opacity = 1;
    y.style.color = "#666";
  }
});

getcurrency(updateDom);




// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value.trim() == "" ) {
alert("Please enter your full name");
} else {
// document.getElementById('formy').submit();
div_hide();

createAccountFetch(document.getElementById('name').value );
create( document.getElementById('name').value );
//alert("Form Submitted Successfully...");
}
}


function create(value) {
  document.cookie = "name="+value;

  document.getElementById('WelcomeMsg').innerText = "Hello " + value+"!";
  document.getElementById('WelcomeMsg').style.display = "block";
}

function div_show() {
document.getElementById('abc').style.display = "block";
}

function div_hide(){
document.getElementById('abc').style.display = "none";
}

function updateDom( data ) {


  var container = document.getElementById('container');

  data.map(function (item) {

    var newElement = document.createElement('DIV');
    newElement.setAttribute('class', "book-item");
    newElement.setAttribute('id', `${item.id}`);
    newElement.setAttribute("onclick", 'return itemClicked(\'' + item.id + '\');')
    var newH3 = document.createElement('h3');
    var p0 = document.createElement('p');
    var p1 = document.createElement('p');
    newH3.innerText = item.name;
    p0.innerText = item.shortdesc;
    p1.innerText = item.year + " By " + item.author;
    newElement.append(newH3);
    newElement.append(p0);
    newElement.append(p1);
    container.append(newElement);
  })
}

const itemClicked = (id) => {
  let deleted = "deleted=" + id;
  window.location.href = deleted;
}