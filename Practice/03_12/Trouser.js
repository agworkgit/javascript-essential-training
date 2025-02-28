/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

// Objects: trouser, shirt, shoe, book

const Trouser = class {
    constructor(
        // parameters
        width,
        length,
        material,
        colour,
        zipperStatus) {
        // properties
        this.width = width;
        this.length = length;
        this.material = material;
        this.colour = colour;
        this.zipperOpen = zipperStatus
    }

    // methods
    openZipper(zipperStatus) {
        this.zipperOpen = zipperStatus;
    }
}

console.log("The Trouser class:", Trouser);

export default Trouser;

// Class - properties and methods are not directly modifiable from DevTools