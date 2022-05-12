
# Diagnosis Microservice

# Steera Project Code Latest

## Diagnosis Controller - CRUD operations

### Create diagnosis async function

- Call **create** method on diagnosis service.
- Pas payload to create method.

**src/controllers/DiagnosisController.js**

```js
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
```

### async function to find diagnosis 

- Call find method on diagnosis service.
- Pass payload to find.

```js
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
```

### async funntion to update diagnosis

- Call **udpate** method on diagnosis service.
- Pass payload to udpate function.

```js
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
```



### async function for Delete/Destroy diagnosis .

- Call **destroy** method on the diagnosis service.
- Pass payload id to the destroy function.

```js
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
```

### async function to Search diagnosis.

- Call **search** method on the diagnosis method.
- Pass payload to search function.

```js
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
```

## Patient diagnosis controller

### async function for create 

- Call **create** method on Patient Diagnosis service.
- Pass payload to create method.

**src/controllers/PatientDiagnosisController.js**

```js
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
```

### async function for find.

- Call **find** method on patient diagnoses service.
- Pass payload to **find** method.

```js
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
```

### async function for update.

- Call **update** function on patient diagnosis service.
- Pass payload data to update function.

```js
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
```

### async function to destroy patient diagnosis.

- Call **destroy** method on patient diagnosis service.
- Pass payload id to destroy method.

```js
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
```

## Database Configuration

**src/config/db.js**

```js
var EntitySchema = require("../entity/Diagnosis")

module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "shenron",
    database: "gessit",
    synchronize: false,
    logging: false,
   entities: [ EntitySchema ]
}
```

## Entity

Install *typeorm* using npm first.

```bash
npm i typeorm
```

**src/entity/Diagnosis.js**

```js
var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Diagnosis",
  tableName: "diagnosis",
  columns: {
    id: {
      primary: true,
      type: "bigint",
      generated: true,
    },
    code: {
      type: "varchar",
      nullable: false,
    },
    name: {
      type: "varchar",
      nullable: false,
    },
    description: {
      type: "varchar",
      nullable: false,
    },
    details: {
      type: "varchar",
      nullable: true,
    },
    created_by: {
      type: "varchar",
      nullable: false,
    },
    updated_by: {
      type: "varchar",
      nullable: true,
    },
    createdAt: {
      type: "timestamp with time zone",
      nullable: false,
    },
    updatedAt: {
      type: "timestamp with time zone",
      nullable: true,
    },
  },
});
```

## Services

## Database Services

- Call **createConnection** function on **typeorm**.
- Export the connection function.

**src/services/DatabaseService.js**

```javascript
let typeorm = require("typeorm");
let dbConfig = require("../config/db");
let connection;
const createConnection = async () => {
  if (!connection) {
    connection = await typeorm.createConnection(dbConfig);
  }
  return connection;
};

module.exports = {
  createConnection,
};
```

## Diagnosis Service

**src/services/DiagnosisService.js**

### Create Service.

```js
const create = async (data) => {
  let connection = await databaseConnection.createConnection();
  return await connection
    .createQueryBuilder()
    .insert()
    .into(Diagnosis)
    .values(data)
    .execute();
};
```

### Find Service.

```js
const find = async (data) => {
  let connection = await databaseConnection.createConnection();
  let diagnosisRepository = connection.getRepository("Diagnosis"); 
  return await diagnosisRepository.find({ where: { id: data.id } });
};
```

### Update Service

```js
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
```

### Delete/Destroy Service

```javascript
const destroy = async (enityId) => {
  let connection = await databaseConnection.createConnection();
  return await connection
    .createQueryBuilder()
    .delete()
    .from(Diagnosis)
    .where("id = :id", { id: enityId })
    .execute();
};
```


### Search Service

```js
const search = async (data) => { 
  let criteria =data.criteria
  let connection = await databaseConnection.createConnection();
  let diagnosisRepository = connection.getRepository("Diagnosis");
  return await diagnosisRepository.createQueryBuilder()
  .select()
  .where('name ILIKE :criteria', {criteria: `%${criteria}%`})
  .getMany(); 
};
```

## PatientDiagnosisServices

**src/services/PatientDiagnosisService.js**

### async function to create

```javascript
const create = async (data) => {
  let connection = await databaseConnection.createConnection();
  return await connection
    .createQueryBuilder()
    .insert()
    .into(Diagnosis)
    .values(data)
    .execute();
};
```

### async function for find

```javascript
const find = async (data) => {
  let connection = await databaseConnection.createConnection();
  let diagnosisRepository = connection.getRepository("Diagnosis");
  return await diagnosisRepository.find({ where: { id: data.id } });
};
```

### async function for update

```js
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
```

### async function to delete a diagnosis

```javascript
const destroy = async (enityId) => {
  let connection = await databaseConnection.createConnection();
  return await connection
    .createQueryBuilder()
    .delete()
    .from(Diagnosis)
    .where("id = :id", { id: enityId })
    .execute();
}; 
```

## Diagnosis

**src/Diagnosis.js**

```js
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
```

## Micra Yaml File

**micra.yml**

```yml
```javascript
name: DiagnosisMicroservices
enableTracing: true
services:
  - name: DiagnosisService
    classFile: src/Diagnosis.js
    local:
      port: 3000
```

## Steps to run this project:

1. Run `npm i` command.
2. Install `postgresql` locally.
3. run the script `postgres_dev_copy.sql` in scripts folder using the command `psql -u postgres --set ON_ERROR_STOP=on -f <scriptfile>`.
4. Setup database settings inside config/db.js file. use database `gessit`.
5. Run `micra local` command.



