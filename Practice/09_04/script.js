/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


/**
 * Function to generate random hex color
 */
const randColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
};

let grid = document.querySelector('.grid');
let cell = document.querySelectorAll('.cell');

grid.addEventListener('mouseover', (event) => {
    grid.classList.add('grid-hover');
});

grid.addEventListener('mouseleave', (event) => {
    grid.classList.remove('grid-hover');
});

cell.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.style.backgroundColor) {
            item.style.backgroundColor = "";
        } else {
            item.style.backgroundColor = `#${randColor()}`;
        }
    })
});

const body = document.body;
body.addEventListener("keydown", (event) => {
    // event.code holds the current key pressed:
    console.log(event.code);

    // Test for KeyD (the "d" key)
    if (event.code === "Space") {
        body.style.backgroundColor === ""
            ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
            : (body.style.backgroundColor = "");
    }
});