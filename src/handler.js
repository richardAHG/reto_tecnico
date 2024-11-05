exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        "clima": "Árido",
        "diametro": "10465",
        "gravedad": "1 estándar",
        "nombre": "Tatooine",
        "periodo_orbital": "304",
        "poblacion": "200000",
        "residentes": [
            "https://swapi.py4e.com/api/people/1/",
            "https://swapi.py4e.com/api/people/2/",
        ],
        "periodo_rotación": "23",
        "agua_superficial": "1",
        "terreno": "Desierto",
        "url": "https://swapi.py4e.com/api/planets/1/"
    }
    ),
  };
};
