let databaseConnection = require("./DatabaseService");
let Diagnosis = require("../entity/Diagnosis");

const create = async (data) => {
  let connection = await databaseConnection.createConnection();
  /**
   * return an Object with save data Id
   * Use savedData.raw[0]['id'] for saved data id
   */
  return await connection
    .createQueryBuilder()
    .insert()
    .into(Diagnosis)
    .values(data)
    .execute();
};

const find = async (data) => {
  let connection = await databaseConnection.createConnection();
  let diagnosisRepository = connection.getRepository("Diagnosis"); 
  return await diagnosisRepository.find({ where: { id: data.id } });
};

const update = async (data) => {
  delete data["traceId"];
  let connection = await databaseConnection.createConnection();
  return await connection
    .createQueryBuilder()
    .update(Diagnosis)
    .set(data)
    .where("id = :id", { id: data.id })
    .execute();
};

const destroy = async (enityId) => {
  let connection = await databaseConnection.createConnection();
  return await connection
    .createQueryBuilder()
    .delete()
    .from(Diagnosis)
    .where("id = :id", { id: enityId })
    .execute();
};

const search = async (data) => { 
  let criteria =data.criteria
  let connection = await databaseConnection.createConnection();
  let diagnosisRepository = connection.getRepository("Diagnosis");
  return await diagnosisRepository.createQueryBuilder()
  .select()
  .where('name ILIKE :criteria', {criteria: `%${criteria}%`})
  .getMany(); 
};

module.exports = {
  create,
  find,
  update,
  destroy,
  search,
};
