function calculateBmi() {
    height = document.getElementById("height").value
    weight = document.getElementById("weight").value

    if (height == 0 || weight == 0 || isNaN(height) || isNaN(weight)) {
        alert("Enter your weight and height")
    }
    else {
        bmi = weight / (height * height)
        bmiValue.innerHTML = bmi.toFixed(2)
        if (bmi < 18.5) {
            attribute.innerHTML = '<p style="color: red;">Underweight</p>';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            attribute.innerHTML = '<p style="color: green;">Normal Weight</p>';
        } else if (bmi >= 25 && bmi < 29.9) {
            attribute.innerHTML = '<p style="color: orange;">Overweight</p>';
        } else if (bmi >= 30 && bmi < 34.9) {
            attribute.innerHTML = '<p style="color: red;">Obese (Class I)</p>';
        } else if (bmi >= 35 && bmi < 39.9) {
            attribute.innerHTML = '<p style="color: red;">Obese (Class II)</p>';
        } else if (bmi >= 40) {
            attribute.innerHTML = '<p style="color: red;">Obese (Class III)</p>';
        } else {
            attribute.innerHTML = "Error in calculation";
        }
    }
}

function reset() {
    document.getElementById("height").value = ""
    document.getElementById("weight").value = ""
    bmiValue.innerHTML = "00"
    attribute.innerHTML = '<p>Calculate your BMI now</p>';
}