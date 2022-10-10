# CRUD-FacturaTech
Crud Básico de una apliación web para el control del inventario de objetos en casa. 

Necesario para el uso y modificación de este proyecto. 

Instalar los siguientes programas
1.-Hyper Terminal
2.-Git
3.-Node.js
4.-MongoDB

5.-Utilizar la aplicación web


1.-Instalar Hyper Terminal
1.1.-Ir a la siguiente liga "https://hyper.is/"
1.2.-Seleccionar instalación para windows
1.3.-Abrir el instalador y terminar el proceso

2.-Instalar Git 
2.1.-Ir a la siguiente liga "https://git-scm.com/downloads"
2.3.-Detectara automaticamente la versión para tu equipo
2.4.-Correr el intalador ASEGURARSE de tener la opción "Git Bash" seleccionada
2.5.-Terminar la instalación.

2.6.-Configuración Hyper Terminal 
2.7.-Ir a la siguiente liga "https://gist.github.com/coco-napky/404220405435b3d0373e37ec43e54a23"
2.8.-Copiar la configuración completa
2.9.-Ir a Hyper Terminal presionar CTRL + , 
2.9.1.-Reemplazar la configuración por la que copiamos de github
2.9.3.-Reiniciar Hyper cerrandolo y volviendo a abrir
2.9.4.-Confirmar la correcta instalación utilizando "echo $SHELL deberiamos de ver "bin/bash en nuestra consola

3.-Instalar Node.JS
3.1.-Ir a la siguiente liga "https://nodejs.org/en/"
3.2.-Elegir la opción LTS 
3.3.-Seguir el instalador
3.4.-Reiniciar Equipo (no podras utilizar node hasta reiniciar el equipo)
3.5.-Confirmar la correcta instalación utilizando el comando "node --version"
3.6.-Deberias poder confirmar la versión de Node que acabas de descargar


4.-Instalar MongoDB
4.1.1.-Ir a la siguiente liga https://www.mongodb.com/try/download/community
4.1.2.-Elegir MongoDB Community Server
4.1.3.-Descargar la versión más reciente, elegir paquete MSI
4.1.4.-Abrir el instalador
4.1.5.-Elegir la versión completa
4.1.6.-Elegir la opción "Run service as Network Service user"
4.1.7.-Anotar la dirección dentro de "Data Directory" (NO CAMBIAR) 
4.1.8.-Desactivar la opción "instalar MongoDB Compass"
4.1.9.-Completar la instalación 
4.2.1.-Terminar la instalación
4.2.2.-Ir al disco local C: 
4.2.3.-Crear un folder llamado "data"
4.2.4.-Dentro del folder "data" crear un folder llamado "db"
4.2.5.-Dirigirse a la liga anterior "Data Directory" o si no cambiamos la liga ir a Program Files > MongoDB > Server (anotar versión ejemplo: "4.0")
4.2.6.-En Hyper Terminal usar el comando "cd ~" para localizarnos en el directorio de inicio
4.2.7.-Utilizar comando touch para crear un archivo de nombre ".bash_profile" ("touch .bash_profile")
4.2.8.-Editaremos el archivo .bash_profile utilizando VIM
4.2.9.-Dentro de VIM pulsar la tecla "I"
4.3.1.-Pegar las siguientes lineas sin el parentesis y cambiar la versión a la que nosotros tenemos (alias mongod="/c/Program\ files/MongoDB/Server/4.0/bin/mongod.exe"
4.3.2.-alias mongo="/c/Program\ Files/MongoDB/Server/4.0/bin/mongo.exe")
4.3.4.-Pulsamos la tecla "ESC"
4.3.5.-Escribimos el siguiente comando ":wq!"
4.3.6.-Reiniciar Hyper Terminal (cerrando y volviendolo a abrir)
4.3.7.-Confirmaremos la correcta instalación 
4.3.8.-Escribimos el siguiento comando "mongo --version"
4.3.9.-Deberiamos poder ver en la terminal "MongoDB shell version (versión actual) git version: ......
4.4.1.-Si obtemenos este mensaje podemos confirmar que la instalación fue correcta

5.-Usar la aplicación Web
5.1-Descargar todos los archivos al escritorio en un folder de nombre a su elección
5.2-Abrir Hyper Terminal
  5.2.1 Navegar al escritorio usando el comando "cd /Desktop/(nombre de folder de su elección)"
  5.2.2 Una vez en el folder donde se encuentra los archivos utilizar el comando "npm install"
5.3-Utilizar el comando "npm start"
  5.3.1 Si obtenemos "Server up and running on port 5000" la aplicación esta lista para usarse
5.4 Abrir buscador (chrome)
  5.4.1 Introducir la siguiente liga "http://localhost:5000/"
  5.4.2 Si obtenemos la vista de aplicación web podemos empezar a usarla
5.5 Tenemos la vista de la pagina principal donde se nos menciona brevemente cual es el uso (Un sistema de invenatio para articulos de casa)
  5.5.1 En la parte inferior derecha hay un boton que dice "Start Using Home Inventory" si lo presionamos nos llevara la siguiente liga "http://localhost:5000/myHome"
5.6 Si nos encontramos en "http://localhost:5000/myHome" y no tenemos articulos nos saludara un mensaje de bienvenida junto a uno que nos menciona que no tenemos articulos
        y un boton que nos invita a dar de alta nuestros primeros articulos en la liga "http://localhost:5000/myHome/itemsManagment".
5.7 Si nos encontramos en "http://localhost:5000/myHome/itemsManagment" nos saldra una forma para llenar nuestro primer articulo y un boton para agregar
        rellenamos el titulo, una descripción del articulo, una url de una imagen alojada en algun sitio web (para esto podemos ir a google buscar una imagen 
        dar click derecho, seleccionar abrir imagen en otra pestaña y copiar la url) y la cantidad de articulos iguales que tenemos,  
        una vez terminado de agregar pulsamos el boton "add" y nos redigira a la ruta "http://localhost:5000/myHome" donde nos mostrara una tarjeta con el articulo.
5.8 Si nos encontramos en "http://localhost:5000/myHome" y ya tenemos articulos creados nos saldran en forma de tarjeta con un boton que dice editar, si lo pulsamos
    nos llevara a la ruta "http://localhost:5000/edit-item/id=(id del articulo que generamos cuando lo damos de alta)" y nos mostrara solo el articulo que decidimos editar
    los campos obtienen el valor previo, de no modificarse se volveran a mandar y se actualizara la información en la base de datos, al confirmar la edición con el boton
    "confirm edit" se guardara la nueva información y nos redigira a la liga "http://localhost:5000/myHome"
    5.8.1 Por el contrario si decidimos pulsar el boton "Delete" esto eliminara definitivamente el item de la base de datos y nos redirigira a la liga 
          "http://localhost:5000/myHome" donde podremos confirmar que el articulo se ha eliminado
  
