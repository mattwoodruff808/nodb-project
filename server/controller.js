const currentPatrons = [{id: 1, name: 'Szeth', type: 'Skybreaker', currentDrink: 'Tears of his Enemies'}, {id: 2, name: 'Lift', type: 'Edgedancer', currentDrink: 'Juice'}];
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
        const {id} = req.params;
        const {newDrink} = req.body;

        const patron = currentPatrons.find(el => el.id === +id);
        patron.currentDrink = newDrink;
        res.status(200).send(currentPatrons);
    },
    removePatron: (req, res) => {
        
    }
}