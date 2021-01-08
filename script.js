let columns = 1;
let selectedColor = "";
let mouseOver = false;
let currentColor = "";

// Fills all cells with selected color
function selectColor(color) {
    selectedColor = color;
}

// Adds columns to table
function addColumn() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    for (let i = 0; i < tr.length; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        colorChange(cell);
        tr[i].appendChild(cell);
    }
    columns++;
}

// Removes columns to table
function removeColumn() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    if (tr.length == 0) {
        alert('Error: there is nothing to remove');
    return this;
    }
    for (let i = 0; i < tr.length; i++) {
        tr[i].removeChild(tr[i].lastChild);
    }
    columns--;
}

// Adds rows to table
function addRow() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    for(let i = 0; i < columns; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        colorChange(cell);
        row.appendChild(cell);
    }
}

// Removes rows from table
function removeRow() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    if (tr.length == 0) {
        alert('Error: there is nothing to remove');
    return this;
    }
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
}

// Fills in all uncolored cells with selected color
function fillAllUncoloredCells() {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].style.backgroundColor == "") {
            allCells[i].style.backgroundColor = selectedColor;
        }
    }
}

// Fills all cells with selected color
function fillAllCells() {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = selectedColor;
    }
}

// Clears all cells of color
function clearAllCells() {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "";
    }
}

// Allows colors to be changed based on dropdown selection
function colorChange(cell){
    cell.addEventListener("click", setColor);

    cell.addEventListener("mousedown", function() {
        mouseOver = true;
        currentColor = selectedColor;
    })

    cell.addEventListener("mousemove" , function() {
        if (mousOver == true)
        {
            cell.style.backgroundColor = currentColor;
        }
    })

    cell.addEventListener("mouseup" , function() {
        if (mouseOver == true)
        {
            mouseOver = false;
        }
    })
}

// Sets color based on dropdown selection
function setColor(){
    this.style.backgroundColor = selectedColor;
}

