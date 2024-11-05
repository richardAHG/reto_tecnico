const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const update = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const tableDb = "SwarsTable";

  const {
    clima,
    diametro,
    gravedad,
    nombre,
    periodo_orbital,
    poblacion,
    residentes,
    periodo_rotación,
    agua_superficial,
    terreno,
    url,
  } = JSON.parse(event.body);

  const payload = {
    id: v4(),
    clima,
    diametro,
    gravedad,
    nombre,
    periodo_orbital,
    poblacion,
    residentes,
    periodo_rotación,
    agua_superficial,
    terreno,
    url,
  };
  await dynamodb.put({ TableName: tableDb, Item: payload }).promise();


  return {
    status: 200,
    body: JSON.stringify(result.Item),
  };
};

module.exports = {
  update,
};
