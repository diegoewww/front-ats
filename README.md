# ats-rclt-cn-front-next-ui: Proyecto Frontend

## Requisitos para probar el frontend

Asegúrate de tener los siguientes requisitos instalados antes de ejecutar el proyecto:

- [pnpm](https://pnpm.io/): Puedes instalarlo globalmente con el siguiente comando:
```bash
npm install -g pnpm
```
- TypeScript: Instala TypeScript globalmente usando el siguiente comando:
```bash
npm install -g typescript
```

## Iniciar Proyecto
Sigue estos pasos para iniciar el proyecto en tu entorno local:

1. Clona el proyecto:
```bash
git clone https://github.com/joyitoficial/Front-ATS.git
```

2. Navega a la carpeta del proyecto:
```bash
cd Front-ATS
```

3. Instala las dependencias:
```bash
pnpm install
```

4. Inicia el proyecto:
```bash
pnpm dev
```

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- [Next.js v14](https://nextjs.org/): Framework de React para construir aplicaciones web modernas.
  - [Blog de nuevas características](https://nextjs.org/blog/next-14)

- [Tailwind CSS](https://tailwindcss.com/): Un framework de utilidades de CSS de bajo nivel para construir diseños rápidos y personalizables.

- [NextUI](https://nextui.org/): Biblioteca de componentes de interfaz de usuario para Next.js.

- [React Hook Form](https://www.react-hook-form.com/): Biblioteca para gestionar formularios en React.
  - [Yup](https://github.com/jquense/yup): Un validador de esquemas para JavaScript.

- [Redux Toolkit](https://redux-toolkit.js.org/): Conjunto de herramientas oficial de Redux para facilitar el desarrollo de aplicaciones con Redux.
  - También se puede cambiar a [Zustand](https://zustand.surge.sh/) para el manejo de estado global si es necesario.

# Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```plaintext
src/
|   instrumentation.ts

+---app/                        # Dentro de app las carpetas son las paginas siempre y cuando tenga un fichero page.tsx
|   |  
|   +---@dashboard/              
|   |   +---dash/
|   |   +---candidatos/         # Página: localhost:3000/candidatos (fichero page.tsx)
|   |   |   \---[id]/           # Rutas Dinámicas: localhost:3000/candidatos/1 (fichero page.tsx)
|   |   |             
|   |   +---crearOferta/
|   |   |           
|   |   +---editOferta/
|   |   |   \---[id]/
|   |   |   ...
|   |                   
|   +---@loginuser/
|   |       FormEmail.tsx
|   |       page.tsx
|   |       
|   |---auth/
|               
+---components/                 # Utilizando Atomic Design
|   +---atoms/
|   |   |-- Button/
|   |       |-- Button.tsx
|   |       |-- Button.css
|   |    
|   +---molecules/
|   |   |-- Header/
|   |       |-- Header.tsx
|   |       |-- Header.css
|   |        
|   \---organisms/
|       +---layouts/
|       +---Navbar/
|               
+---fonts/                      # Fuentes
|
+---hooks/                      # Hooks Personalizados
|
+---lib/                        # Librerías
|
+---schemas/                    # Schemas de Yup
|
+---service/                    # Servicios que llaman a la API
|           
+---store/                      # Redux
|
\---utils/                      # Utilidades

```
