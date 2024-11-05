const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const http = require("axios");
const getOneExternal = async (event) => {
  const { id } = event.pathParameters;
  const response = await http.get(`https://swapi.py4e.com/api/planets/${id}/`);
  const data = response.data;

  if (!data) {
    return {
      status: 200,
      body: {},
    };
  }

  const translatedData = {
    nombre: data?.name,
    periodo_rotacion: data?.rotation_period,
    periodo_orbital: data?.orbital_period,
    diametro: data?.diameter,
    clima: data?.climate,
    gravedad: data?.gravity,
    terreno: data?.terrain,
    agua_superficial: data?.surface_water,
    poblacion: data?.population,
    residentes: data?.residents,
    url: data?.url,
  };

  return {
    status: 200,
    body: translatedData,
  };
};

module.exports = {
  getOneExternal,
};
