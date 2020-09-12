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

![Esta es una imagen de ejemplo](https://drive.google.com/uc?export=view&id=1913oZeBZPBNiUuk8gu3ZSbLBA2l_VQtG)



## Author

👤 **Jose Manuel Signoret Fernández**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
