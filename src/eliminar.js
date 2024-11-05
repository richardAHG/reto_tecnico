const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const remove = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const tableDb = "SwarsTable";


  // Recupera el dato insertado
  const result = await dynamodb
    .get({ TableName: tableDb, Key: { id: payload.id } })
    .promise();

  return {
    status: 200,
    body: JSON.stringify(result.Item),
  };
};

module.exports = {
  remove,
};
