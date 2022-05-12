let { logger } = require("micra");
let diagnosisService = require("../services/DiagnosisService");


module.exports.create = async (micraMessage) => {
  const payload = micraMessage.payload;
  try {
    const data = await diagnosisService.create(payload);
    logger.info({"traceId": 1234, "message": "Diagnosis created successfully", data});
    return data;
  } catch (error) {
    logger.error({error: error.message, code: 500, "message": "Failed to create diagnosis"});
    throw error
  }
}

module.exports.find = async (micraMessage) => {
  console.log(micraMessage)
  const payload = micraMessage.payload;
  try {
    const data = await diagnosisService.find(payload);
    return data;
  } catch (error) {
    logger.error({error: error.message, code: 500, "message": "Failed to fetch diagnosis"})
    throw error
  }
}

module.exports.update = async (micraMessage) => {
  console.log(micraMessage)
  const payload = micraMessage.payload;
  try {
    const data = await diagnosisService.update(payload);
    console.log(data)
    return data;
  } catch (error) {
    logger.error({error: error.message, code: 500, "message": "Failed to update diagnosis"})
    throw error
  }
}

module.exports.destroy = async (micraMessage) => {
  console.log(micraMessage)
  const id = micraMessage.payload.id;
  try {
    const data = await diagnosisService.destroy(id);
    logger.info({"traceId": 1234, "message": "Diagnosis deleted", data});
    return data;
  } catch (error) {
    logger.error({error: error.message, code: 500, "message": "Failed to delete diagnosis"})
    throw error
  }
}

module.exports.search = async (micraMessage) => {
  const payload = micraMessage.payload;
  try {
    const data = await diagnosisService.search(payload);
    return data;
  } catch (error) {
    logger.error({error: error.message, code: 500, "message": "Search api failed"})
    throw error
  }
}

