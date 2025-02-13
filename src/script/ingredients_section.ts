
let ingredientsSection = document.getElementById("ingredients-section")!!
let addIngredientButton = document.getElementById("add-ingredient")!!
addIngredientButton.addEventListener("click", () => {
    let ingredient = generateIngredient();
    ingredientsSection.appendChild(ingredient);
    ingredientsSection.appendChild(addIngredientButton)
})

function generateIngredient(): HTMLElement {
    let output = document.createElement("div");
    let textinput = document.createElement("input")
    textinput.type = "text"
    textinput.classList.add("bg-gray-200")
    let numberInput = document.createElement("input")
    numberInput.type = "number"
    numberInput.classList.add("bg-gray-200")
    output.appendChild(textinput)
    output.appendChild(numberInput)
    output.classList.add("flex", "justify-between", "w-full");
    return output
}