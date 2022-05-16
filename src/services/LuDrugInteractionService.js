let databaseConnection = require('./DatabaseService');
let LuDrugInteractions = require('../entity/LuDrugInteractions');
const { database } = require('../config/db');

const create = async (data) => {
    let connection = await databaseConnection.createConnection();
    return await connection.createQueryBuilder()
    .insert()
    .into(LuDrugInteractions)
    .execute();
};

const find = async (data) => {
    let connection = await databaseConnection.createConnection();
    let drugInteractionsRepository = connection.getRepository("LuDrugInteractions");
    return await drugInteractionsRepository.find({
        where: {id: data.id}
    })
}

const update = async (data) => {
    delete data["traceId"];
    let connection = await databaseConnection.createConnection();
    return await connection
        .createQueryBuilder()
        .update(LuDrugInteractions)
        .set(data)
        .where("id = :id", {
            id: data.id
        })
        .execute();
};

const destroy = async (enityId) => {
    let connection =await databaseConnection.createConnection();
    return await connection
        .createQueryBuilder()
        .delete()
        .from(LuDrugInteractions)
        .where("id = :id", {
            id: enityId
        })
        .execute();
};

const search = async (data) => {
    let criteria = data.criteria;
    let connection = await databaseConnection.createConnection();
    let drugInteractionsRepository = connection.getRepository("LuDrugInteractions");
    return await drugInteractionsRepository.createQueryBuilder()
    .select()
    .where('name ILIKE :criteria', 
    {criteria: `%${criteria}%`})
    .getMany();
}

module.exports = {
    create,
    find,
    update,
    destroy,
    search
}
