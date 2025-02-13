let qualityNameSwitch = true
document.getElementById("switch-quality-names")!!.addEventListener("click", () => {
    let singleNameInput = document.getElementById("single-name-input")!!
    let multipleNameInput = document.getElementById("multiple-name-input")!!
    if (qualityNameSwitch) {
        singleNameInput.style.display = "none"
        multipleNameInput.style.display = "flex"
    } else {
        multipleNameInput.style.display = "none"
        singleNameInput.style.display = "grid"
    }
    qualityNameSwitch = !qualityNameSwitch
})