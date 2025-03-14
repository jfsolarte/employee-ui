# Employee Management Application

## Advertencia ⚠️
El backend de esta aplicación consume el servicio `http://dummy.restapiexample.com/api/v1/employees`, el cual ha estado presentando problemas de acceso y, en ocasiones, retorna el código `429 - Too Many Requests`. Esto puede afectar la funcionalidad de la aplicación y generar errores intermitentes en las solicitudes.

## Descripción
Esta es una aplicación desarrollada en **Angular 19** con **Bootstrap**, que permite buscar y visualizar la información de empleados mediante una interfaz amigable. La aplicación incluye una vista para la búsqueda de empleados, un perfil detallado con imagen y un menú de navegación.

## Estructura del Proyecto

```
public/
src/
├── app/
│   ├── components/
│   │   ├── employee-profile/
│   │   │   ├── employee-profile.component.ts
│   │   │   ├── employee-profile.component.html
│   │   │   ├── employee-profile.component.css
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
│   │   ├── employee.service.spec.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.routes.ts
│   ├── app.config.ts
│   ├── app.config.server.ts
│   ├── app.routes.server.ts
├── index.html
├── main.ts
├── main.server.ts
├── server.ts
├── styles.css
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
```

## Instalación y Configuración

### 1. Clonar el repositorio
```sh
 git clone <repo-url>
 cd employee-management-app
```

### 2. Instalar dependencias
```sh
 npm install
```

### 3. Configuración del entorno
Modificar `src/environments/environment.ts` para establecer la API base:
```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/employees'
};
```

### 4. Ejecutar el servidor de desarrollo
```sh
 ng serve
```
La aplicación estará disponible en `http://localhost:4200/`.

## Funcionalidades
- **Buscar empleados**: Introducir un ID y buscar un empleado específico.
- **Mostrar todos los empleados**: Si el campo de búsqueda está vacío, se listan todos los empleados.
- **Perfil del empleado**: Visualizar detalles como foto, salario anual y más información relevante.
- **Menú de navegación**: Permite moverse entre las diferentes vistas.

## Tecnologías utilizadas
- **Angular 19**
- **Bootstrap**
- **TypeScript**
- **Node.js**

## Autor
Desarrollado por **Jairo**. 🚀