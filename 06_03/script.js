/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

let color = "purple"; // in global scope

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = 'skyblue';

function headingColor() {
    let titleColor = "blue"; // only exists inside this function // in local scope
    document.querySelector(".title").style.color = titleColor;
    console.log("inside:", titleColor);
}

headingColor();
// console.log("inside:", titleColor); // not defined here : error

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;


