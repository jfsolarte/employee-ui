Employee Management App

📌 Descripción

Esta es una aplicación de gestión de empleados desarrollada en Angular 19. Permite la búsqueda y visualización de empleados mediante una interfaz amigable con Bootstrap.

🚀 Tecnologías utilizadas

Angular 19

TypeScript

Bootstrap

REST API (Backend en localhost:8080)

📂 Estructura del Proyecto

src/
├── app/
│   ├── components/
│   │   ├── employee-profile/
│   │   ├── employee-search/
│   │   ├── employee-table/
│   │   ├── menu/
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   ├── models/
│   │   ├── employee.ts
│   ├── pages/home/
│   │   ├── home.component.ts
│   │   ├── home.component.html
│   │   ├── home.component.css
│   ├── services/
│   │   ├── employee.service.ts
│   ├── app.routes.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.config.server.ts
│   ├── app.routes.server.ts
│   ├── main.ts
│   ├── main.server.ts
│   ├── styles.css
│   ├── index.html
├── angular.json
├── package.json
├── .gitignore

🛠 Instalación

Clonar el repositorio:

git clone <repo-url>
cd employee-management-app

Instalar dependencias:

npm install

Ejecutar la aplicación:

ng serve

Abrir en el navegador: http://localhost:4200

🌟 Funcionalidades

✅ Búsqueda de empleados por ID o listado completo.✅ Visualización de perfil con foto y detalles.✅ Interfaz responsiva con Bootstrap.✅ Configuración de entorno para API.

⚙️ Configuración de API

La URL de la API se encuentra en:

src/environments/environment.ts

Modificar la variable:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/employees'
};

📌 Contacto

Si tienes alguna duda o sugerencia, ¡contáctanos! 🚀

