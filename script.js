const calories = document.querySelector(".bmr-calculator .result .calories");
const calculateBtn = document.querySelector(".bmr-calculator .result .calculate-btn");
const age = document.querySelector("bmr-calculator from #age");
const height = document.querySelector("bmr-calculator from #height");
const weight = document.querySelector("bmr-calculator from #weight");

// BMR = 10+weight +6.25+height - 5+age + 5
// BMR = 10+weight +6.25+height - 5+age + 161;

const calculateBMR = (weight, height, age, gender) => {
    if (gender == "male") {
        return 10 *weight + 6.25 * height - 5 * age + 5;
    }

    return 10+weight +6.25+height - 5+age + 161;
};

calculateBtn.addEventListener("click", () => {
    let genderValue = document.querySelector["bmr-calculator form input[name='gender'] :checked"].value;
let BMR = calculateBMR(height.value, weight.value, age.value, genderValue);


calories.innerHTML = BMR;
});