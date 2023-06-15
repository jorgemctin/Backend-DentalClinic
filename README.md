## Backend Clínica Dental

## Objetivo
Este proyecto requería una base de datos relacional de una clínica dental utilizando Express y Sequelize.

### Sobre el proyecto
Basandonos en el Backend para una Clínica Dental, disponemos de usuarios pacientes y admin/dentistas. Por cuestiones de seguridad, todos los usuarios que se registren tendrán el rol de pacientes. Un vez registrados se tendrá la posibilidad de crear, modificar y borrar citas propias, también se podrá ver, modificar o borrar el perfil.

Como admin/dentistas, se tendrá la posibilidad de ver todos los pacientes registrados y tambien todas las citas, mientras que los pacientes podrán ver su historial de citas.

## Stack
Tecnologías utilizadas:
<div align="center">
        <a href="https://www.sequelize.org/">
        <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
    </a>
        <a href="https://www.mysql.com/">
        <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
    </a>
        <a href="https://expressjs.com/">
        <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
    </a>
    <a href="https://nextjs.org/">
        <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
    </a>
    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
        <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
    </a>
    <a href="https://jwt.io/">
        <img src= "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
    </a>
    <a href="https://www.postman.com/">
        <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
    </a>
    <a href="https://www.docker.com/">
        <img src= "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
    </a>
 </div>


### Diagrama BD
!['readme'](./img/readme.png)

## Instalación en local
1. Clonamos el repositorio `$git clone 'url-repository'`
2. Instalamos las dependencias ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos ` $ npx sequelize db:create `
4. Ejecutamos las migraciones ` $ npx sequelize db:migrate `
5. Ejecutamos los seeders ` $ npx sequelize db:seed:all ` 
6. Conectamos el servidor` $ npm run dev ` 


### Uso de la API

Ingresa y podrás hacer uso de la API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/jorgemctin/workspace/dental-clinic/request/27847989-cede5d46-5868-4252-a484-e325b2328a93)

### Agradecimientos:

Agradezco a mis compañeros el tiempo dedicado a este proyecto.

### Autor:
Jorge Luis Martin Lorenzo.
