const {MicraService} = require("micra");
const DiagnosisController = require('./controllers/DiagnosisController');
const PatientDiagnosisController = require('./controllers/PatientDiagnosisController');

class Diagnosis extends MicraService {

    constructor() {
        super()
    }

    registerActions() {
        //Diagnosis service
        this.registerAction("diagnosis/find", DiagnosisController.find);
        this.registerAction("diagnosis/create", DiagnosisController.create);
        this.registerAction("diagnosis/update", DiagnosisController.update);
        this.registerAction("diagnosis/destroy", DiagnosisController.destroy);
        this.registerAction("diagnosis/search", DiagnosisController.search);

        //Patient Diagnosis service
        this.registerAction("patientDiagnosis/find", PatientDiagnosisController.find);
        this.registerAction("patientDiagnosis/create", PatientDiagnosisController.create);
        this.registerAction("patientDiagnosis/update", PatientDiagnosisController.update);
        this.registerAction("patientDiagnosis/destroy", PatientDiagnosisController.destroy);
    }

    registerEvents() {}


    getName() {
        return "DiagnosisService";
    }


}
module.exports = Diagnosis;
