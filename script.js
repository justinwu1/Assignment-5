const tbody = document.getElementsByTagName("tbody");
const addColumn = document.querySelector("#add-column");
const addRows = document.querySelector("#add-row");
const removeColumn = document.querySelector("#remove-column");
const removeRow = document.querySelector("#remove-row");
addColumn.addEventListener("click", function () {
    const allColumns = document.querySelectorAll("tr");
    for (let i = 0; i < allColumns.length; i++) {
        let newCol = document.createElement("td");
        newCol.className = "cube";
        allColumns[i].appendChild(newCol);
    }
})

addRows.addEventListener("click", function () {
    const countCol = document.querySelector("tr"); // Count for how many coilumns
    const newRow = document.createElement("tr");
    newRow.className = "cube";
    tbody[0].appendChild(newRow);
    for (let i = 0; i < countCol.children.length; i++) {
        let newCell = document.createElement("td");
        newCell.className = "cube";
        newRow.append(newCell);
    }
})

removeColumn.addEventListener("click", function () {
    const allColumns = document.querySelectorAll("tr");
    console.log(allColumns);
    for (let i = 0; i < allColumns.length; i++) {
        allColumns[i].lastElementChild.remove();
    }
})

removeRow.addEventListener("click", function () {
    const firstRow = document.querySelector("tr");
    firstRow.remove();
})