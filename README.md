# Steera Project Code Latest

## Diagnosis Controller - CRUD operations

### Create diagnosis async function

- Call **create** method on diagnosis service.
- Pas payload to create method.

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

### Find diagnosis async function 

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

### Update diagnosis async funntion

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



### Delete/Destroy diagnosis async function.

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

### Search for diagnosis async function

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

- Call update function on patient diagnosis service.
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

