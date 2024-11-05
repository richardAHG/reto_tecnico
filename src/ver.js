const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const getOne = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const tableDb = "SwarsTable";

  const { id } = event.pathParameters;

  const result = await dynamodb
    .get({ TableName: tableDb, Key: { id } })
    .promise();

  return {
    status: 200,
    body: result.Item,
  };
};

module.exports = {
  getOne,
};
