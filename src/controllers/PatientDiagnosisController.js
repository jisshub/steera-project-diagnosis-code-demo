let { logger } = require("micra");

let patientDiagnosisService = require("../services/PatientDiagnosisService");


module.exports.create = async (micraMessage) => {
  const payload = micraMessage.payload;
  try {
    const data = await patientDiagnosisService.create(payload);
    return data;
  } catch (error) {
    logger.error({error: error.message, code: 500, "message": "Failed to create patient diagnosis"})
    throw error
  }
}

module.exports.find = async (micraMessage) => {
  const payload = micraMessage.payload;
  try {
    const data = await patientDiagnosisService.find(payload);
    return data;
  } catch (error) {
    logger.error({error: error.message, code: 500, "message": "Failed to fetch patient diagnosis"})
    throw error
  }
}

module.exports.update =  async (micraMessage) => {
  const payload = micraMessage.payload;
  try {
    const data = await patientDiagnosisService.update(payload);
    return data;
  } catch (error) {
    logger.error({error: error.message, code: 500, "message": "Failed to update patient diagnosis"})
    throw error
  }
}

module.exports.destroy = async (micraMessage) => {
  const id = micraMessage.payload.id;
  try {
    const data = await patientDiagnosisService.destroy(id);
    return data;
  } catch (error) {
    logger.error({error: error.message, code: 500, "message": "Failed to delete patient diagnosis"})
    throw error
  }
}
