const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const remove = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const tableDb = "SwarsTable";

  const { id } = event.pathParameters;

  const result = await dynamodb
    .delete({ TableName: tableDb, Key: { id } })
    .promise();

  return {
    status: 200,
    body: { message: "Recurso eliminado" },
  };
};

module.exports = {
  remove,
};
