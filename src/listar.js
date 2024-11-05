const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const getAll = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const tableDb = "SwarsTable";

  const result = await dynamodb.scan({ TableName: tableDb }).promise();

  return {
    status: 200,
    body: result.Items,
  };
};

module.exports = {
  getAll,
};
