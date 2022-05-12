let controller = require("../controllers/PatientDiagnosisController");

const diagnosis = [
  {
    id: "2",
    code: "hiv",
    name: "Human Immunodeficiency Virus",
    description: "Human Immuno Deficiency Virus",
    details: "",
    created_by: "1",
    updated_by: "0",
    createdAt: "2022-04-21T03:51:48.060Z",
    updatedAt: "2022-04-21T03:51:48.060Z",
  },
  {
    id: "3",
    code: "sars",
    name: "Severe acute respiratory syndrome",
    description: "Severe acute respiratory syndrome",
    details: "",
    created_by: "1",
    updated_by: "0",
    createdAt: "2022-04-21T03:51:48.060Z",
    updatedAt: "2022-04-21T03:51:48.060Z",
  },
];

jest.mock("../services/PatientDiagnosisService", () => {
  return {
    find: jest.fn().mockResolvedValue(diagnosis),
    create: jest.fn().mockResolvedValue({
      identifiers: [{ id: "60" }],
      generatedMaps: [{ id: "60" }],
      raw: [{ id: "60" }],
    }),
    destroy: jest.fn().mockResolvedValue({ raw: [], affected: 1 }),
    update: jest
      .fn()
      .mockResolvedValue({ generatedMaps: [], raw: [], affected: 1 }),
  };
});

describe("PatientDiagnosisController Tests::", () => {
  test("should fetch All diagnosis", async () => {
    const reqBody = {
      id: "bb28507014d2db39a3e9a71666b46689",
      payload: { traceId: "ed5b10cb214cf2a2eb72fcf408950eb5" },
      messageType: "action",
      operation: "find",
      creatorService: "ExpressServer",
      traceId: "ed5b10cb214cf2a2eb72fcf408950eb5",
      extras: null,
    };
    let diagnosisController = new controller();
    let result = await diagnosisController.find(reqBody);
    expect(result).toEqual(diagnosis);
  });

  test("should create diagnosis", async () => {
    const reqBody = {
      id: "1490287f7f8d9f1a01cba90420c38671",
      payload: {
        code: "test",
        name: "Human Immunodeficiency Virus1",
        description: "Human Immuno Deficiency Virus1",
        details: "",
        created_by: "1",
        updated_by: "0",
        createdAt: "2022-04-21T03:51:48.060Z",
        traceId: "011bbec221cba0e39df2e9f4df604b98",
      },
      messageType: "action",
      operation: "create",
      creatorService: "ExpressServer",
      traceId: "011bbec221cba0e39df2e9f4df604b98",
      extras: null,
    };
    let diagnosisController = new controller();
    let result = await diagnosisController.create(reqBody);
    expect(result).toEqual({
      identifiers: [{ id: "60" }],
      generatedMaps: [{ id: "60" }],
      raw: [{ id: "60" }],
    });
  });

  test("should delete a diagnosis", async () => {
    const reqBody = {
      id: "c26eed56fe328e98587f1a51db6a2b6a",
      payload: { id: 60, traceId: "8bcc60c70d9308dedfe90170db2346ef" },
      messageType: "action",
      operation: "destroy",
      creatorService: "ExpressServer",
      traceId: "8bcc60c70d9308dedfe90170db2346ef",
      extras: null,
    };
    let diagnosisController = new controller();
    let result = await diagnosisController.destroy(reqBody);
    expect(result).toEqual({ raw: [], affected: 1 });
  });

  test("should update diagnosis", async () => {
    const reqBody = {
      id: "f0620883ba0eb0ef5c607bc6bccdded3",
      payload: {
        id: 58,
        description: "1234567",
        traceId: "d75c3f10605a050f317f999d887bd473",
      },
      messageType: "action",
      operation: "update",
      creatorService: "ExpressServer",
      traceId: "d75c3f10605a050f317f999d887bd473",
      extras: null,
    };
    let diagnosisController = new controller();
    let result = await diagnosisController.update(reqBody);
    expect(result).toEqual({ generatedMaps: [], raw: [], affected: 1 });
  });
});
