# prueba-BackEnd
Git de repositorio para pruebas de BackEnd
<br>
CREAR ALINEACION <br>
POST => http://localhost:4001/api/alineacion <br>
{
   "nombre":"433",
   "defensas":4,
   "volantes":3,
   "delanteros":3
}
<br>
ACTUALIZARE ALINEACION <br>
PUT => http://localhost:4001/api/alineacion/5<br>
{
   "nombre":"541",
   "defensas":5,
   "volantes":4,
   "delanteros":1
}
<br>
BORRAR ALINEACION <br>
DELETE => http://localhost:4001/api/alineacion/3
<br>
LISTAR ALINEACION <br>
GET => http://localhost:4001/api/alineacion/lista/1
<br>
<br>
<br>
CREAR JUGADOR <br>
POST => http://localhost:4001/api/jugador<br>
{
   "nombre":"Jugador 16",
   "numero":16,
   "posicion":"defensa"
}
<br>
ACTUALIZAR JUGADOR <br>
PUT => http://localhost:4001/api/jugador/2 <br>
{
   "nombre":"Fernando Leon",
   "numero":30,
   "posicion":"defensa"
}
<br>
ELIMINAR JUGADOR
<br>
DELETE http://localhost:4001/api/jugador/13
<br>
AGREGAR JUGADOR A UNA ALINEACION
<br>
POST => http://localhost:4001/api/jugador/agregarjugador
<br>
{
    "jugadorId":12,
    "alineacionId":1
}
<br>
BORRAR JUGADOR DE ALINEACION
<br>
DELETE => http://localhost:4001/api/jugador/eliminarjugador/7
<br>
LISTAR JUGADORES CON PAGINACION<br>
GET => http://localhost:4001/api/jugador/lista/defensa/1/5
<br>
<br>
<br>
CREAR ACCION<br>
POST => http://localhost:4001/api/accion
<br>
{
    "nombre":"asistencia",
    "minuto":6,
    "alineacionId":1
}
<br>
ELIMINAR ACCION<br>
DELETE => http://localhost:4001/api/accion/6
