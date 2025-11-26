function createGrid(size = 16) {
    const container = document.querySelector("#container");
    container.innerHTML = ""

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.classList.add("gridTile");
            row.appendChild(box);
        }

        container.appendChild(row);
    }

    draw();
}

createGrid();



function getGridSize() {
    while (true) {
        const size = prompt("Input grid size.");

        if (size >= 1 && size <= 100) {
            return size;
        }

        alert("Size must be at least 1 and at most 100.");
    }    
}



const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = getGridSize();
    createGrid(size);
})



function draw() {
    const grid = document.querySelectorAll(".gridTile");
    grid.forEach(tile => {
    tile.addEventListener("mouseover", () => {
        tile.style.backgroundColor = "black";
    });
});
}

draw();




