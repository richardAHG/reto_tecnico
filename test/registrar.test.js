const { create } = require("../src/registrar");

const AWS = require("aws-sdk");


jest.mock("aws-sdk", () => {
  const putMock = jest.fn();
  const getMock = jest.fn();
  const updateMock = jest.fn();
  const deleteMock = jest.fn();
  const scanMock = jest.fn();

  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => ({
        put: putMock,
        get: getMock,
        update: updateMock,
        delete: deleteMock,
        scan: scanMock,
      })),
    },
  };
});

describe("Endpoints conectadas a DynamoDb", () => {
  it("Registrar", async () => {
    const putMock = new AWS.DynamoDB.DocumentClient().put;
    putMock.mockImplementationOnce(() => ({
      promise: jest.fn().mockResolvedValue({}),
    }));

    const event = {
      body: JSON.stringify({
        nombre: "Tatooine",
        clima: "arid",
        gravedad: "1 standard",
      }),
    };
    const response = await create(event);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Recurso insertado",
    });
  });
});
