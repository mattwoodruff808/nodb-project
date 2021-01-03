const currentPatrons = [{id: 1, name: 'Szeth', type: 'Skybreaker', currentDrink: 'Water'}, {id: 2, name: 'Lift', type: 'Edgedancer', currentDrink: 'Juice'}];
let id = 3;

module.exports = {
    getCurrentPatrons: (req, res) => {
        res.status(200).send(currentPatrons);
    },
    addPatron: (req, res) => {
        const {name, type, currentDrink} = req.body;

        const patron = {
            id: id,
            name: name,
            type: type,
            currentDrink: currentDrink
        }
        id++;
        currentPatrons.push(patron);
        
        res.status(200).send(currentPatrons);
    },
    switchDrink: (req, res) => {
        
    },
    removePatron: (req, res) => {
        
    }
}