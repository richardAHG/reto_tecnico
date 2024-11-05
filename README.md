

# Listado de Apis lambda
- dominio: https://860mq5uzj1.execute-api.us-east-1.amazonaws.com

## endpoints conectadas a DynamoDB
  - Ver : GET - /api/sw
  - Listar: GET - /api/sw/{id}
  - Crear: POST - /api/sw
  - Editar: PUT - /api/sw/{id}
  - Eliminar: DELETE - /api/sw/{id}

## API externa
  - Ver: GET - /api/external/sw/{id}

## Despliegue
- Config credenciales aws
- sls deploy --verbose
