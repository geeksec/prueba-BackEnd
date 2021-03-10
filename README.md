# Pruebas-para-BackEnd
Git de repositorio para pruebas de BackEnd en GeeksEC

# Introducción

Este repositorio contiene una serie de requerimientos de un Caso Práctico, que busca evaluar las capacidades técnicas del candidato con respecto a las principales funciones y responsabilidades.

# Importante

Máximo de 3-4 días y enviar todo lo que puedas de esta prueba y verificar tus conocimientos.

Se requiere de una cuenta de GitHub para realizar este ejercicio.


## ¿Qué se busca evaluar?
Principalmente los siguientes aspectos:

Creatividad para resolver los requerimientos.

Calidad del código entregado (estructura y buenas prácticas).

Eficiencia de la solución entregada.

Familiaridad con librerías, frameworks y plataformas de desarrollo.



## ¿Qué hacer antes de empezar?

1. Realizar un Fork de este repositorio (https://github.com/geeksec/prueba-BackEnd).
2. Clonar el fork a su máquina local git clone git@github.com:USERNAME/FORKED-PROJECT.git
3. Crear un branch en su cuenta de GitHub utilizando su nombre completo.
4. Se recomienda añadir un archivo.md en la solución aportada para explicar mediante texto lo que se considere oportuno.
5. Al finalizar, existen 2 opciones para entregar su proyecto:
6. Realizar un Commit de su proyecto, enviar un Pull Request al branch con su nombre, y notificar a la siguiente dirección de correo electrónico luis.palacios@geeks.com.ec.
7. Crear un archivo comprimido (.zip o .rar) de su proyecto y enviar a la siguiente dirección de correo electrónico luis.palacios@geeks.com.ec.

## Descripción
Se solicita la creación de una API REST que gestione las alineaciones de los partidos de fútbol, los jugadores alineados en ellas y las acciones que generan estos jugadores durante un partido.

## Especificaciones
1. Las alineaciones adoptan una formación (e.g. 4-4-2) de entre varias (4-4-2, 4-3-3, 3-4-3). No es necesario incluir ninguna más.
2. Una alineación es del equipo local o visitante. No es necesario gestionar datos de equipos.
3. Los jugadores tienen un nickname (nombre de la camiseta), un dorsal y una posición (por defecto).
4. Se alinean un máximo de 11 jugadores en un partido.
5. Se asume que un jugador adopta su posición en cualquier alineación.
6. Omitimos restricciones de posiciones en una alineación según su formación. (Puede haber 11 porteros 😆)
7. Las acciones son de un tipo (tarjeta amarilla o roja, gol/gol en propia puerta, asistencia). No es necesario incluir ninguna más.
8. Las acciones ocurren en un minuto concreto del partido.
9. Las acciones van asociadas a un jugador alineado.
10. Omitimos la gestión de cambios de jugadores en la alineación.

## Funcionalidad
1. Poder crear, editar y eliminar una alineación.
2. Poder crear, editar y eliminar un jugador.
3. Añadir o eliminar un jugador a una alineación.
4. Poder crear o eliminar una acción.
5. Obtener una alineación, con la posibilidad de añadir los jugadores alineados y las acciones que se han producido.
6. Listar los jugadores. Incluir filtro por posición. Paginación requerida.
7. Listar el total de acciones por tipo. Incluir filtro por alineación o jugador.

## Requisitos
1. Requerido usar Docker y Docker Compose para crear los diferentes servicios.
2. Se puede usar el lenguaje que se desee, aunque valoramos preferiblemente NodeJS o Go.
3. Se puede usar cualquier motor base de datos, aunque valoramos preferiblemente cualquier SQL.
4. Se puede hacer uso de ORM o QueryBuilder.
5. Se puede hacer uso de frameworks y librerías de terceros.

# Requerido implementar tests.
Se valorará un correcto control de errores.



Este ejemplo es tomado de nuestro referente en desarrollo: https://footters.com/
