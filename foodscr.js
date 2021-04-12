var exclude = [];
var include = [];
var healthFrag = "";
var dietFrag = "";
var incFrag = "";
var excFrag = "";
var maxTime = 0;
var maxCalories = 0;
var vege = false;
var pesc = false;
var vegan = false;
var porkfree = false;
var kosher = false;
var dairfree = false;
var nutfree = false;
var shellfree = false;
var keto = false;
var balan = false;
var hipro = false;
var locarb = false;
var lofat = false;

document.getElementById('searchbtn').addEventListener('click', getResult);
scrollupbutton = document.getElementById("scrollBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollupbutton.style.display = "block";
  } else {
    scrollupbutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

document.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("searchbtn").click();
  }
});

function setStatus(){
  if(document.getElementById('vegeStat').checked){
    vege = true;
  }
  else{
    vege = false;
  }
  console.log(vege);

  if(document.getElementById('pescStat').checked){
    pesc = true;
  }
  else{
    pesc = false;
  }
  console.log(pesc);

  if(document.getElementById('veganStat').checked){
    vegan = true;
  }
  else{
    vegan = false;
  }
  console.log(vegan);

  if(document.getElementById('porkStat').checked){
    porkfree = true;
  }
  else{
    porkfree = false;
  }
  console.log(porkfree);

  if(document.getElementById('kosherStat').checked){
    kosher = true;
  }
  else{
    kosher = false;
  }
  console.log(kosher);

  if(document.getElementById('dairyStat').checked){
    dairfree = true;
  }
  else{
    dairfree = false;
  }
  console.log(dairfree);

  if(document.getElementById('peanutStat').checked){
    nutfree = true;
  }
  else{
    nutfree = false;
  }
  console.log(nutfree);

  if(document.getElementById('shellStat').checked){
    shellfree = true;
  }
  else{
    shellfree = false;
  }
  console.log(shellfree);

  if(document.getElementById('ketoStat').checked){
    keto = true;
  }
  else{
    keto = false;
  }
  console.log(keto);

  if(document.getElementById('balancedStat').checked){
    balan = true;
  }
  else{
    balan = false;
  }
  console.log(balan);

  if(document.getElementById('protStat').checked){
    hipro = true;
  }
  else{
    hipro = false;
  }
  console.log(hipro);

  if(document.getElementById('carbStat').checked){
    locarb = true;
  }
  else{
    locarb = false;
  }
  console.log(locarb);

  if(document.getElementById('fatStat').checked){
    lofat = true;
  }
  else{
    lofat = false;
  }
  console.log(lofat);
}


function addExclusion(){
  var tell = true
  var newExclusion = document.getElementById('exclusion').value;
  for(var i = 0; i< exclude.length; i++){
      if(exclude[i] === newExclusion){
          tell = false;
      }
  }
  if(tell === true){
  exclude.push(newExclusion);
  }
  var output2 = ``;
  for(var i = 0; i < exclude.length; i++){
      if(exclude[i] !== null){
      output2 += `<div class="chip excchip" >`+exclude[i]+`</div>`;
      console.log(exclude[i]);
      }
  }

  document.getElementById('mngexc').innerHTML = output2;
  document.getElementById("exclusion").value = "";
}

function addInclusion(){
  var tell = true
  var newInclusion = document.getElementById('inclusion').value;
  for(var i = 0; i< include.length; i++){
      if(include[i] === newInclusion){
          tell = false;
      }
  }
  if(tell === true){
    include.push(newInclusion);
  }
  var output2 = ``;
  for(var i = 0; i < include.length; i++){
      if(include[i] !== null){
        output2 += `<div class="chip incchip" >`+include[i]+`</div>`;
        console.log(include[i]);
      }
  }

  document.getElementById('mnginc').innerHTML = output2;
  document.getElementById("inclusion").value = "";
}

function clearIngredients(){
  exclude = [];
  include = [];
  output2=``;
  document.getElementById('mnginc').innerHTML = output2;
  document.getElementById('mngexc').innerHTML = output2;
}

function incURL(){
  incFrag = "";
  if(include.length != 0){
    for(var ingredient in include){
      incFrag = incFrag.concat(include[ingredient]);
      incFrag = incFrag.concat("+");
    }
  }
}

function excURL(){
  excFrag = "";
  if(exclude.length != 0){
    for(var ingredient in exclude){
      excFrag = excFrag.concat("&excluded=");
      excFrag = excFrag.concat(exclude[ingredient]);
    }
  }
}

function healthURL(){
  healthFrag = "";

  if(vege === true){
    healthFrag = healthFrag.concat("&health=vegetarian");
  }
  if(pesc === true){
    healthFrag = healthFrag.concat("&health=pescatarian");
  }
  if(vegan === true){
    healthFrag = healthFrag.concat("&health=vegan");
  }
  if(porkfree === true){
    healthFrag = healthFrag.concat("&health=pork-free");
  }
  if(kosher === true){
    healthFrag = healthFrag.concat("&health=kosher");
  }
  if(dairfree === true){
    healthFrag = healthFrag.concat("&health=dairy-free");
  }
  if(nutfree === true){
    healthFrag = healthFrag.concat("&health=peanut-free");
  }
  if(shellfree === true){
    healthFrag = healthFrag.concat("&health=shellfish-free");
  }
  if(keto === true){
    healthFrag = healthFrag.concat("&health=keto-friendly");
  }
}

function dietURL(){
  dietFrag = "";

  if(balan === true){
    dietFrag = dietFrag.concat("&diet=balanced");
  }
  if(hipro === true){
    dietFrag = dietFrag.concat("&diet=high-protein");
  }
  if(locarb === true){
    dietFrag = dietFrag.concat("&diet=low-carb");
  }
  if(lofat === true){
    dietFrag = dietFrag.concat("&diet=low-fat");
  }
}

function getResult(){
  incURL();
  excURL();
  healthURL();
  dietURL();

  var xhr = new XMLHttpRequest;

  xhr.open('GET', `https://api.edamam.com/search?q=${incFrag}${excFrag}${healthFrag}${dietFrag}&to=20&app_id=1da0480f&app_key=652971d6e04d92478e12c87ef963502f`, true);
  xhr.onload = function(){
    if(this.status == 200){
      console.log(this.responseText);
      var data = JSON.parse(this.responseText);
      var output = `<div class = "container">`;
      if(data.hits.length === 0){
        output += `<div class="row">
          <div class="col s12 l6 m6 x14 l6 offset-m3 offset-l2 offset-xl3">
          <div class="card-panel green darken-3" style="text-align: center">
          <span class="white-text">No recipes found. Please include at least one (1) ingredient.<br><br>Don't forget to + your ingredients!</span>
          </div>
          </div>
          </div>`;
          document.getElementById('searchResults').innerHTML = output;
      }
      else{
        for(var i in data.hits){
          var guide = ``;
          for(j in data.hits[i].recipe.ingredients){
            guide += "<br> " + `${data.hits[i].recipe.ingredients[j].text}`;
          }
          output += `<div class="row">
            <div class="col s12 l6 m6 x14 l6 offset-m3 offset-l2 offset-xl3">
            <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${data.hits[i].recipe.image}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${data.hits[i].recipe.label}<i class="material-icons right">more_vert</i></span>
              <p>Source: ${data.hits[i].recipe.source}</p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">${data.hits[i].recipe.label}<i class="material-icons right">close</i></span>
              <p>${guide}</p>
            </div>
            <div class="card-action">
              <a id="details" href="${data.hits[i].recipe.url}" target="_blank">Detailed Instructions<i class="material-icons">call_made</i></a>
            </div>
            </div>
            </div>
            </div>`;
        }
        output+=`</div>`;
        document.getElementById('searchResults').innerHTML = output;
      }
    }
  }
  xhr.send();
  $('body, html').animate({ scrollTop: $("#searchResults").offset().top }, 1000);
}