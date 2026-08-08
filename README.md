# Pollo Asado API

API REST desarrollada con Node.js y Express para gestionar productos, clientes y pedidos de un negocio de pollo asado.

El proyecto implementa operaciones CRUD (Create, Read, Update, Delete) y cuenta con documentación de la API mediante OpenAPI 3.0 y Swagger UI.

## Descripción del proyecto

Pollo Asado API es una aplicación backend desarrollada como parte de una actividad académica de Ingeniería de Software / Ingeniería Web.

La API permite gestionar tres recursos principales:

* Productos
* Clientes
* Pedidos

El proyecto utiliza una estructura basada en rutas, middleware y una aplicación principal desarrollada con Express.

## Tecnologías utilizadas

* Node.js
* Express.js
* JavaScript
* OpenAPI 3.0
* Swagger UI
* swagger-ui-express
* yamljs
* Git
* GitHub
* GitHub Copilot

## Estructura del proyecto

```text
pollo-asado-api/
│
├── src/
│   ├── middleware/
│   │   └── logger.js
│   │
│   ├── routes/
│   │   ├── products.routes.js
│   │   ├── customers.routes.js
│   │   └── orders.routes.js
│   │
│   └── app.js
│
├── openapi.yaml
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Instalación

Para ejecutar el proyecto localmente se requiere tener instalado Node.js.

### 1. Clonar el repositorio

```bash
git clone https://github.com/motilosvan/pollo-asado-api.git
```

### 2. Ingresar al directorio del proyecto

```bash
cd pollo-asado-api
```

### 3. Instalar las dependencias

```bash
npm install
```

## Ejecución

Para iniciar el servidor:

```bash
node server.js
```

La API estará disponible en:

```text
http://localhost:3000
```

## Endpoint de prueba

La API incluye un endpoint para comprobar que el servidor está funcionando correctamente:

```http
GET /api/hello
```

Respuesta:

```json
{
  "message": "Hello API"
}
```

# Endpoints de la API

## Products

Ruta base:

```text
/api/products
```

Operaciones disponibles:

| Método | Endpoint            | Descripción                 |
| ------ | ------------------- | --------------------------- |
| GET    | `/api/products`     | Obtener todos los productos |
| GET    | `/api/products/:id` | Obtener un producto por ID  |
| POST   | `/api/products`     | Crear un producto           |
| PUT    | `/api/products/:id` | Actualizar un producto      |
| DELETE | `/api/products/:id` | Eliminar un producto        |

## Customers

Ruta base:

```text
/api/customers
```

Operaciones disponibles:

| Método | Endpoint             | Descripción                |
| ------ | -------------------- | -------------------------- |
| GET    | `/api/customers`     | Obtener todos los clientes |
| GET    | `/api/customers/:id` | Obtener un cliente por ID  |
| POST   | `/api/customers`     | Crear un cliente           |
| PUT    | `/api/customers/:id` | Actualizar un cliente      |
| DELETE | `/api/customers/:id` | Eliminar un cliente        |

## Orders

Ruta base:

```text
/api/orders
```

Operaciones disponibles:

| Método | Endpoint          | Descripción               |
| ------ | ----------------- | ------------------------- |
| GET    | `/api/orders`     | Obtener todos los pedidos |
| GET    | `/api/orders/:id` | Obtener un pedido por ID  |
| POST   | `/api/orders`     | Crear un pedido           |
| PUT    | `/api/orders/:id` | Actualizar un pedido      |
| DELETE | `/api/orders/:id` | Eliminar un pedido        |

# Documentación con Swagger

La API está documentada utilizando OpenAPI 3.0.

El archivo de especificación se encuentra en:

```text
openapi.yaml
```

Después de iniciar el servidor, la documentación interactiva puede consultarse en:

```text
http://localhost:3000/api-docs
```

Swagger UI permite consultar los endpoints disponibles y realizar pruebas de las diferentes operaciones de la API.

# Middleware de registro

El proyecto incorpora un middleware de registro denominado `logger`, utilizado para visualizar información relacionada con las solicitudes recibidas por el servidor.

Este middleware facilita el seguimiento y la depuración de las peticiones realizadas a la API.

# Uso de GitHub Copilot

Durante el desarrollo del proyecto se utilizó GitHub Copilot como herramienta de asistencia para la programación.

Copilot fue utilizado como apoyo en actividades como:

* Generación y sugerencia de estructuras de código.
* Creación y modificación de rutas.
* Implementación de operaciones CRUD.
* Configuración de Express.
* Apoyo en la documentación de la API.
* Identificación de posibles errores y alternativas de implementación.

Las sugerencias proporcionadas por GitHub Copilot fueron revisadas, adaptadas y probadas manualmente antes de incorporarse al proyecto.

El uso de Copilot no sustituyó la revisión del desarrollador. Fue necesario verificar el código generado, realizar modificaciones y comprobar el funcionamiento de los diferentes endpoints.

# Pruebas

La API fue ejecutada localmente mediante Node.js y verificada utilizando el navegador y Swagger UI.

Durante las pruebas se comprobó el funcionamiento de:

* Endpoint de prueba.
* Operaciones CRUD de productos.
* Operaciones CRUD de clientes.
* Operaciones CRUD de pedidos.
* Documentación mediante OpenAPI.
* Interfaz interactiva de Swagger UI.

# Dependencias principales

Las principales dependencias utilizadas en el proyecto son:

```text
express
swagger-ui-express
yamljs
```

Para instalar todas las dependencias definidas en el proyecto:

```bash
npm install
```

# Repositorio

El código fuente del proyecto se encuentra disponible en GitHub:

```text
https://github.com/motilosvan/pollo-asado-api
```
# Licencia

Este proyecto fue desarrollado con fines académicos.
