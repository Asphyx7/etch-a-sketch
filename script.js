let mainContainer = document.querySelector(".main-container")
let container = document.querySelector(".container")
let newGrid = document.querySelector(".grid-btn")
let buttonArea = document.querySelector(".button-area")
let resetButton = document.querySelector(".reset-btn")


newGrid.addEventListener("click", () => {
    let newGridNumber = parseInt(prompt("Insert new grid number between 16 and 100"))

    if (isNaN(newGridNumber) || newGridNumber < 16 || newGridNumber > 100) {
        alert("Please enter a valid number between 16 and 100")
        return
    }

    createNewGrid(newGridNumber);
    addHoverEffect();
    addResetFunctionality()
})

function createNewGrid(gridSize) {
    container.remove()
    container = document.createElement("div")
    container.classList.add("container")
    mainContainer.appendChild(container)

    for (i = 0; i < gridSize; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
        container.appendChild(row)
    

    for (j = 0; j < gridSize; j++) {
        const column = document.createElement("div")
        column.classList.add("column")
        column.style.width = `${900/gridSize}px`
        column.style.height = `${500/gridSize}px`
        row.appendChild(column)
        }
    }
}

function addHoverEffect() {
    container.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("column")) {
            event.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
        }
    })
}

function addResetFunctionality() {
    resetButton.addEventListener("click", () => {
        const columns = document.querySelectorAll(".column")
        columns.forEach(element => {
            element.style.backgroundColor = "white"
        })
    })
}

function randomColor() {
    return Math.floor(Math.random() * 256)
}

createNewGrid(16);
addHoverEffect()
addResetFunctionality()