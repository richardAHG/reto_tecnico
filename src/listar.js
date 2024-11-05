const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const getAll = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const tableDb = "SwarsTable";

  const { id } = JSON.parse(event.pathParameters);

  const result = await dynamodb.scan({ TableName: tableDb }).promise();

  return {
    status: 200,
    body: JSON.stringify(result.Items),
  };
};

module.exports = {
  getAll,
};
