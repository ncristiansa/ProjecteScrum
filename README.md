# ProjecteScrum

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

## Archivo SQL <a name="sql-data"></a>

[Aqui](https://github.com/ncristiansa/ProjecteScrum/blob/master/ScrumDBfinal.sql) encontraras el archivo SQL para la base de datos.

### Acceso a la base de datos <a name="acceso-bd"></a>

Para poder acceder a la base de datos hay que crear un usuario llamado "*Administrador*" con la contraseña "*P@ssw0rd*", desde el mysql. O bien, también puede editar el archivo ```login.php``` y reemplazar a "*Administrador*" y "*P@ssw0rd*" por el usuario y contraseña que tengas tu creado:

``` php
$conn = new PDO($log,"Administrador","P@ssw0rd"); // cambiar a Administrador por el otro usuario y la P@ssw0rd por su contraseña correspondiente
```


## Usuarios y contraseñas <a name="user-pass"></a>
Los usuarios se dividen en tres perfiles para diferenciar las funciones que podrán hacer en la aplicación. 
Estos son *Developer* (3), *Product Owner* (2) y *Scrum Master* (1).

### Developer <a name="dev"></a>

| Usuario | Contraseña |
|---|---|
| juanam | juana123 |
| master | master |

### Product Owner <a name="po"></a>

| Usuario | Contraseña |
|---|---|
| Enric | 1234 |

### Scrum Master <a name="sm"></a>

| Usuario | Contraseña |
|---|---|
| Leandro | 1234 |
