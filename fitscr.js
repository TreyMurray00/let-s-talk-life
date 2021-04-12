document.addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("calcbtn").click();
  }
});

function calcBMI(){
  event.preventDefault;
  var weight = document.getElementById('weight_inline').value;
  var height = document.getElementById('height_inline').value;
  var recommend;
  var info;

  weight = weight * 0.45359237;
  height = height/100;
  height = height * height;
  var bmi = weight/height;
  bmi = bmi.toFixed(2);
  if(bmi < 18.5){
    recommend = "underweight.";
    info = "Weighing too little can contribute to a weakened immune system, fragile bones and feeling tired.<br><br>Talk with your healthcare provider to determine possible causes and implications of your being underweight.";
  }
  else if(bmi >= 18.5 && bmi < 24.9){
    recommend = "at a healthy weight!";
    info = "Maintaining a healthy weight can reduce the risk of chronic diseases associated with being overweight or obese. It can also reduce weakening of the immune system and feelings of fatigue associated with being underweight";
  }
  else if(bmi > 24.9 && bmi < 29.9){
    recommend = "overweight.";
    info = "People who are overweight are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.<br><br>Anyone who is overweight should try to avoid gaining additional weight. Additionally, if you are overweight with other risk factors (such as high LDL cholesterol, low HDL cholesterol, or high blood pressure), you should try to lose weight. Even a small weight loss (just 10% of your current weight) may help lower the risk of disease. Talk with your healthcare provider to determine appropriate ways to lose weight.";
  }
  else if(bmi > 30){
    recommend = "obese.";
    info = "Obesity is a complex disease involving an excessive amount of body fat. Obesity isn't just a cosmetic concern. It is a medical problem that increases your risk of other diseases and health problems, such as heart disease, diabetes, high blood pressure and certain cancers.<br><br>People who are overweight or obese are at higher risk for chronic conditions such as high blood pressure, diabetes, and high cholesterol.<br><br>Anyone who is overweight should try to avoid gaining additional weight. Additionally, if you are overweight with other risk factors (such as high LDL cholesterol, low HDL cholesterol, or high blood pressure), you should try to lose weight. Even a small weight loss (just 10% of your current weight) may help lower the risk of disease. Talk with your healthcare provider to determine appropriate ways to lose weight.";
  }

  var output = ``;
  if(weight === 0 || height === 0){
    output = `<div class = "container">
                <div class="row">
                <div class="col s12 l6 m6 x14 l6 offset-m3 offset-l2 offset-xl3">
                <div class="card-panel green lighten-4">
                    <p>Please enter valid values for both weight and height.</p>
                </div>
                </div>
                </div>
                </div>`

  document.getElementById('bmiresult').innerHTML = output;
  $('body, html').animate({ scrollTop: $("#bmiresult").offset().top }, 1000);
  }
  else{
    output = `<div class = "container">
              <div class="row">
              <div class="col s12 l6 m6 x14 l6 offset-m3 offset-l2 offset-xl3">
              <div class="card-panel green lighten-4">
                  <p>Your BMI is: ${bmi}<br><b>You are ${recommend}</b>
                  <br><br>${info}<br><br></p>
              </div>
              <p style="color: black">Stay healthy with some recipes from our <a id="foodredir" href="/pages/food.html">Food</a> page!</p>
              </div>
              </div>
            </div>`;

  document.getElementById('bmiresult').innerHTML = output;
  $('body, html').animate({ scrollTop: $("#bmiresult").offset().top }, 1000);
  }
}
