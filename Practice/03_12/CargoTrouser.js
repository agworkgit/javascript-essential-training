import Trouser from './Trouser.js';

class CargoTrouser extends Trouser {
    constructor(
        // original parameters
        width,
        length,
        material,
        colour,
        zipperStatus,
        numberOfPockets) {
        // new properties
        // initialise the parent class properties
        super( // super takes in all the properties common to both classes
            width,
            length,
            material,
            colour,
            zipperStatus
        );

        // adding a new property specific to CargoTrousers
        this.numberOfPockets = numberOfPockets;
    }
}

console.log(CargoTrouser);

export default CargoTrouser;