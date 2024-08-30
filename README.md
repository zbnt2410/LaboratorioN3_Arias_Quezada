# Proyecto de Gestión de Productos con ReactJS y PrimeReact

## Descripción

Este proyecto es una aplicación de gestión de productos que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en productos. La aplicación está desarrollada con ReactJS y PrimeReact para la interfaz de usuario, y utiliza una API REST construida con Node.js y Express para interactuar con una base de datos MySQL.

## Requisitos

Antes de comenzar, asegúrate de tener los siguientes requisitos instalados en tu sistema:

- Node.js (v14 o superior)
- MySQL (v8.0 o superior)
- Git (para descargar el repositorio)

## Importante

**Se necesita instalar todo lo necesario para que funcione React** 

como template typescript

npm install primereact primeicons axios

Se Omitió dichos archivos tanto en githab y en la plataforma por cuestion de espacio.

## Configuración de la Base de Datos

1. **Descargar del Repositorio**

   ```bash
   git clone https://github.com/zbnt2410/LaboratorioN3_Arias_Quezada.git

2. **Ingresar en el directorio**   
   cd ...\Laboratorio3_Arias_Gribaldo_Quezada_Tania

3. **Visualizaremos dos carpetas, vamos a ingresar a la primera que es el API REST llamado (backend) y lo abrimos con nuestro editor de código (Visual Studio Code)**
    cd backend
    code .

    ## Importante
    Configura la conexión con la DB, coloca TU usuario, contraseña, etc.
4. **Cuando estemos en nuestro edito de código ejecutamos nuestra API, abriendo un terminal y ejecutando el siguiente código**
    node index.js

    ## Importante
    -Asegúrate de tener MySQL en funcionamiento. Luego, crea una nueva base de datos y ejecuta el script SQL proporcionado para configurar las tablas necesarias:

5. **Cuando nuestra API este corriendo, ingresamos a nuestro Frontend el cual se llama (gestion-productos) y lo ejecutamos con nuestro  editor de código**
    cd gestion-productos
    code .
6. **Cuando estemos en nuestro edito de código ejecutamos nuestro Frontend, abriendo un terminal y ejecutando el siguiente código**
    npm start

## Uso de la Aplicación

**Abre tu navegador y accede a http://localhost:3000. Podrás ver la interfaz de usuario para gestionar Categorias y Productos.**

## Gestión de Categorias y Productos

**Crear Producto:** Haz clic en el botón "Nuevo Producto" para agregar un nuevo producto.
**Editar Producto:** Selecciona un producto en la tabla para editarlo.
**Eliminar Producto:** Haz clic en el botón "Eliminar" para eliminar un producto.
Estructura del Proyecto
**backend/:** Contiene el código de la API REST desarrollada con Node.js y Express.
**frontend(gestion-productos)/:** Contiene el código de la aplicación frontend desarrollada con ReactJS y PrimeReact.
**gestion_productos.sql:** Contiene el script SQL para la base de datos.
**README.md:** Archivo de documentación del proyecto.


