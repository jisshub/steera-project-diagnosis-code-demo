const {MicraService} = require('micra');
const LuDrugInteractionsController = require('./controllers/LuDrugInteractionsController');

class LuDrugInteractions extends MicraService {
    constructor() {
        super();
    }

    registerActions() {
        this.registerAction("drug_interactions/find", LuDrugInteractionsController.find);

        this.registerAction("drug_interactions/create", LuDrugInteractionsController.create);

        this.registerAction("drug_interactions/update", LuDrugInteractionsController.update);

        this.registerAction("drug_interactions/search", LuDrugInteractionsController.search);

        this.registerAction("drug_interactions/destroy", LuDrugInteractionsController.destroy);
    }

    registerEvents() {}

    getName() {
        return "LuDrugInteractionService";
    }
}

module.exports = LuDrugInteractions;