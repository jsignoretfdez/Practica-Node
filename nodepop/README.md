<h1 align="center">Bienvenido a Nodepop 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Nodepop es una Api que nos sirve un listado de anuncios de segunda manos para la compra o la venta de artículos. Esta montado sobre una Base de datos de MongoDB. La app nos permite crear anuncios, borrarlos y filtrarlos por varios criterios introducidos en la url.

## Instalación

```sh
npm install
```

## Configuración Archivo .env

```sh
cp .env.example .env
```
> Una vez se ha copiado el contenido y creado el fichero .env le ponemos el nombre de la Base de datos que vamos a crear.

## Inicializar Base de datos de prueba

```sh
npm run initDB
```

> Este comando nos va a permitir crear una base de datos de prueba con las colecciones creadas a modo de ejemplo.

**⚠️ Atención este script borra la base de datos solo debe utilizarse en el primer despligue de la aplicación**

## Iniciar la APP

```sh
npm run start
```

### Metodos API

## Lista Agentes

GET /api/anuncios


![Imagen Lista Anuncios](https://drive.google.com/uc?export=view&id=1uqzZ6uHTaza10QdyJZwFYzZ_DGL7lkGs)

## Crear Anuncio

POST /api/anuncios/crear-anuncio

![Crear Anuncio](https://drive.google.com/uc?export=view&id=1nWDaSSF_hxmF7BJV9D28y_RWiqOpIaEE)

> En la url http://localhost:3000, pulsa en botón crear anuncio y nos lleva al formulario para crear el anuncio

![Formulario Anuncio](https://drive.google.com/uc?export=view&id=1tuCGnJBi7P9r537rZrMC2XYw8_HqMEoI)

POST /api/anuncios/upload

> Si todo ha salido correctamente nos mandara un json.

{
  "tags": [
    "funny",
    "gaming",
    "sports",
    "house"
  ],
  "_id": "5f5e7a306e95a5e45d97c8e4",
  "nombre": "TV LG",
  "precio": 50,
  "venta": false,
  "foto": "1600027184060_lampara_noche.jpg",
  "__v": 0
}

## Borrar Anuncio

DELETE /:_id

{
    "status": "Ok",
    "resultado": "Anuncio Borrado Correctamente",
    "id": "5f5cea35079e4ddbab3eeefd"
}

## Lista de Tags

GET /api/anuncios/tags

{
  "tagsPermitidos": "work / funny / sport / house / lifestyle / gaming"
}

## Ejemplos de Filtros

[comment]: # (Filtro Tags)
* http://localhost:3000/api/anuncios?tags=work%20funny

[comment]: # (Filtro Precio)
* http://localhost:3000/api/anuncios?precio=80-190

[comment]: # (Filtro Nombre)

* http://localhost:3000/api/anuncios?nombre=n

[comment]: # (Filtro Orden Descendente)

* http://localhost:3000/api/anuncios?sort=-precio

[comment]: # (Filtro Paginación)

* http://localhost:3000/api/anuncios?limit=2&skip=1

[comment]: # (Filtro Varios)

* http://localhost:3000/api/anuncios?limit=2&venta=true&precio=60-&tags=sports&nombre=G


## Author

👤 **Jose Manuel Signoret Fernández**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
