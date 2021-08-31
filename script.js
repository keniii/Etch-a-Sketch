const container = document.querySelector('#divContainer');
const clearBtn = document.querySelector('#clearBtn'); 
const gridBtn = document.querySelector('#gridBtn');
const sizeBtn = document.querySelector('#sizeBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const colorBtn = document.querySelector('#colorBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const defaultBtn = document.querySelector('#defaultBtn');

let cells 
    
const cellMaker = (cols, rows ) => {
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr`;
    
    for (let i = 0; i <= (cols * rows); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cells');
        cell.addEventListener('mouseover', Hover);
        function Hover() {
          cell.style.backgroundColor = "black";
        }
        container.appendChild(cell);
      
    cells = document.querySelectorAll('.cells');
    }}

cellMaker(16, 16);


gridBtn.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.classList.toggle('cellBorder');    
        })
});

clearBtn.addEventListener('click', () => {
    cells.forEach(item => {
        item.style.backgroundColor = "";
        })
    });

sizeBtn.addEventListener('click', () => {
    clearBoard();

    userInput = prompt("Choose a number between 1 through 100.");
    if (userInput >= 1 && userInput <= 100 ) {
        cellMaker(userInput, userInput);
    }   else {
        alert("Please select a valid number!");
        }
});

rainbowBtn.addEventListener('click', () => {    
    cells.forEach(item => {
        item.addEventListener('mouseover', (e) => {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let randomColor = `rgb(${red}, ${green}, ${blue})`; 
            e.target.style.backgroundColor = randomColor;
        })
    });
});

colorBtn.addEventListener('change', (e) => {
    let penColor = e.target.value;

    cells.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = penColor;
        })
    });
});

eraserBtn.addEventListener('click', () => {
    cells.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "";
        })
    });
});

defaultBtn.addEventListener('click', () => {
    cells.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "black";
        })
    });
})

const clearBoard = () => {
    container.textContent = "";
};