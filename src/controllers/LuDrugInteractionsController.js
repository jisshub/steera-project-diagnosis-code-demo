let { logger } = require("micra");
const { MicraMessage } = require("micra/src/models/micraMessage");
let luDrugInteractionService = require("../services/LuDrugInteractionService");

module.exports.create = 
async (micraMessage) => {
    const payload = micraMessage.payload;
    try {
        const data  = await luDrugInteractionService.create(payload);
        logger.info({
            "traceId": 1234,
            "message": "Drug Interaction service created successfully", data
        });
        return data;
    } catch (err) {
        logger.error({
            error: error.message,
            code: 500,
            "message": "Error creating drug interaction service"
        });
        throw error;
    }
}

module.exports.find = async (micraMessage) => {
    const payload = micraMessage.payload;
    try {
        const data = await luDrugInteractionService.find(payload);
        return data;
    } catch (error) {
        logger.error({
            error: error.message,
            code: 500,
            "message": "Failed to find drgu interactions"
          });
          throw error;
    }
}

module.exports.update = async (micraMessage) => {
    const payload = micraMessage.payload;
    try {
        const data = await luDrugInteractionService.update(payload);
        return data;
    } catch (error) {
        logger.error({
            error: error.message,
            code: 500,
            "message": "Failed to update drug interaction service"
        });
        throw error;
    }
}

module.exports.destroy = async(micraMessage) => {
    const id = micraMessage.payload.id;
    try {
        const data = await luDrugInteractionService.destroy(id);
        logger.info({
            "traceId": 1234,
            "message": "Drug interaction service deleted", data
        });
        return data;
    } catch (error) {
        logger.error({
            error: error.message,
            code: 500,
            "message": "Error deleting drug interaction service"
        });
    }
}

module.exports.search = async (micraMessage) => {
    const payload = micraMessage.payload;
    try {
        const data = await luDrugInteractionService.search(payload);
        return data;
    } catch (error) {
        logger.error({
            error: error.message,
            code: 500,
            "message": "search failed"
        });
        throw error;
    }
}