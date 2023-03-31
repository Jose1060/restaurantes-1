# ComelOso Service

Este proyecto es una aplicación web creada con Express, JavaScript, GraphQL y MongoDB. El objetivo de la aplicación es proporcionar un servicio de reserva de mesas para un restaurante llamado ComelOso.

## Autor

Este proyecto fue creado por Jose1060.

## Requisitos previos

Para ejecutar la aplicación, se deben tener instalados Node.js y MongoDB.

## Instalación

Para instalar las dependencias del proyecto, ejecute el siguiente comando:

npm install

## Configuración

Antes de ejecutar la aplicación, es necesario configurar las variables de entorno necesarias. Para ello, cree un archivo `.env` en la raíz del proyecto y agregue las siguientes variables:

Aquí tienes el código para copiar y pegar en un archivo README.md con formato:

markdown
Copy code

# ComelOso Service

Este proyecto es una aplicación web creada con Express, JavaScript, GraphQL y MongoDB. El objetivo de la aplicación es proporcionar un servicio de reserva de mesas para un restaurante llamado ComelOso.

## Autor

Este proyecto fue creado por Jose1060.

## Requisitos previos

Para ejecutar la aplicación, se deben tener instalados Node.js y MongoDB.

## Instalación

Para instalar las dependencias del proyecto, ejecute el siguiente comando:

npm install

bash
Copy code

## Configuración

Antes de ejecutar la aplicación, es necesario configurar las variables de entorno necesarias. Para ello, cree un archivo `.env` en la raíz del proyecto y agregue las siguientes variables:

PORT=3000
MONGO_URI=mongodb://localhost:27017/comeloso

La variable `PORT` indica en qué puerto se ejecutará la aplicación, y `MONGO_URI` indica la URL de conexión a la base de datos MongoDB.

## Ejecución

Para ejecutar la aplicación, ejecute el siguiente comando:

npm start

La aplicación estará disponible en `http://localhost:3000`.

## Uso

La aplicación ofrece un API GraphQL para gestionar las reservas de mesas. Puede usar herramientas como [GraphiQL](https://github.com/graphql/graphiql) o [Apollo Client](https://www.apollographql.com/docs/react/) para interactuar con el API.
