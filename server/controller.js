const currentPatrons = [{id: 1, name: 'Szeth', type: 'Skybreaker', currentDrink: 'Red Wine'}, {id: 2, name: 'Lift', type: 'Edgedancer', currentDrink: 'Juice'}];
let id = 3;
let currentStory = 'The Dog and the Dragon';

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
        patron.currentDrink = newDrink || patron.currentDrink;

        res.status(200).send(currentPatrons);
    },
    removePatron: (req, res) => {
        const {id} = req.params;

        const patronIndex = currentPatrons.findIndex(el => el.id === +id);
        currentPatrons.splice(patronIndex, 1);
        
        res.status(200).send(currentPatrons);
    },
    getCurrentStory: (req, res) => {
        res.status(200).send(currentStory);
    },
    changeStory: (req, res) => {
        const {newStory} = req.body;

        currentStory = newStory || currentStory;

        res.status(200).send(currentStory);
    }
}