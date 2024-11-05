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
    periodo_rotacion,
    agua_superficial,
    terreno,
    url,
  } = JSON.parse(event.body);
  const { id } = event.pathParameters;

  const params = {
    TableName: tableDb,
    Key: { id },
    UpdateExpression: `set 
      clima = :clima,
      diametro = :diametro,
      gravedad = :gravedad,
      nombre = :nombre,
      periodo_orbital = :periodo_orbital,
      poblacion = :poblacion,
      residentes = :residentes,
      periodo_rotacion = :periodo_rotacion,
      agua_superficial = :agua_superficial,
      terreno = :terreno,
      url = :url`,
    ExpressionAttributeValues: {
      ":clima": clima,
      ":diametro": diametro,
      ":gravedad": gravedad,
      ":nombre": nombre,
      ":periodo_orbital": periodo_orbital,
      ":poblacion": poblacion,
      ":residentes": residentes,
      ":periodo_rotacion": periodo_rotacion,
      ":agua_superficial": agua_superficial,
      ":terreno": terreno,
      ":url": url,
    },
    ReturnValues: "ALL_NEW",
  };

  const result = await dynamodb.update(params).promise();

  return {
    status: 200,
    body: result.Attributes,
  };
};

module.exports = {
  update,
};
