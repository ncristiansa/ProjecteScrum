# ProjecteScrum

## Participantes <a name="participantes"></a>

## Tabla de contenidos
1. [Participantes](#participantes)
    1. [Sprint 1](#sprint1)
    2. [Sprint 2](#sprint2)
    3. [Sprint 3](#sprint3)
2. [Archivo SQL](#sql-data)
    1. [Acceso a la base de datos](#acceso-bd)
    2. [Creación de eventos](#eventos-bd)
        1. [Acceso a la base de datos](#activacion-ev)
3. [Usuarios y contraseñas](#user-pass)
    1. [Developer](#dev)
    2. [Product Owner](#po)
    3. [Scrum Master](#sm)

## Participantes <a name="participantes"></a>

### Sprint 1 <a name="sprint1"></a>

El equipo está formado por:
- Almudena - https://github.com/rayaalmudena
- Cristian - https://github.com/ncristiansa
- Marcos - https://github.com/marcosarteaga

### Sprint 2 <a name="sprint2"></a>

El equipo está formado por:
- Almudena - https://github.com/rayaalmudena
- Cristian - https://github.com/ncristiansa
- Adrià - https://github.com/GODSKADI

### Sprint 3 <a name="sprint3"></a>

El equipo está formado por:
- Almudena - https://github.com/rayaalmudena
- Cristian - https://github.com/ncristiansa
- José Manuel - https://github.com/JoseLomero


## Archivo SQL <a name="sql-data"></a>

[Aqui](https://github.com/ncristiansa/ProjecteScrum/blob/master/ScrumDB4.sql) encontraras el archivo SQL para la base de datos.

### Acceso a la base de datos <a name="acceso-bd"></a>

Para poder acceder a la base de datos hay que crear un usuario llamado "*Administrador*" con la contraseña "*P@ssw0rd*", desde el mysql. O bien, también puede editar el archivo ```index.php``` y reemplazar a "*Administrador*" y "*P@ssw0rd*" por el usuario y contraseña que tengas tu creado:

``` php
$conn = new PDO($log,"Administrador","P@ssw0rd"); // cambiar a Administrador por el otro usuario y la P@ssw0rd por su contraseña correspondiente

```

### Creación de eventos <a name="eventos-bd"></a>

Crear evento para que los status de sprints se actualizen:

``` sql
CREATE EVENT checkSprintgreyStatus
   ON SCHEDULE EVERY 1 SECOND STARTS  '2013-02-02 00:00:00' 
    DO 
    UPDATE Sprints SET status = 0 WHERE CURRENT_DATE > endDate;

CREATE EVENT checkSprintgreenStatus
   ON SCHEDULE EVERY 1 SECOND STARTS '2013-02-02 00:00:00' 
    DO 
UPDATE Sprints SET status = 1 WHERE CURRENT_DATE BETWEEN startDate AND endDate;

CREATE EVENT checkSprintblackStatus
   ON SCHEDULE EVERY 1 SECOND STARTS '2013-02-02 00:00:00' 
    DO 
UPDATE Sprints SET status = 2 WHERE CURRENT_DATE < startDate;
```

#### Activación de eventos <a name="activacion-ev"></a>

Para poder activar eventos anteriormente creados tendremos que ejecutar la siguiente sentencia:

``` sql
SET GLOBAL event_scheduler := 1;
```

## Usuarios y contraseñas <a name="user-pass"></a>
Los usuarios se dividen en tres perfiles para diferenciar las funciones que podrán hacer en la aplicación. 
Estos son *Developer* (3), *Product Owner* (2) y *Scrum Master* (1).

### Developer <a name="dev"></a>

| Usuario | Contraseña |
|---|---|
| juanam | juana123 |
<<<<<<< HEAD
|  | 1234 |
=======
>>>>>>> origin/joseDevelopement
| master | master |

### Product Owner <a name="po"></a>

| Usuario | Contraseña |
|---|---|
| Enric | 1234 |

### Scrum Master <a name="sm"></a>

| Usuario | Contraseña |
|---|---|
| Leandro | 1234 |
