//para crear una API debo crear el package.json -> npm init -y
//Además tengo que instalar la extención express -> npm i express
//instalar tambien nodemon y cors => npm i nodemon / npm i cors
//instalar multer => npm i multer 
//para usar DB mysql ejecutar => npm install mysql2 
//no olvidar crear el archivo .gitignore incluyendo node_modules
// en archivo app.js se crea la escucha a través del puerto al que se va a conectar la API
//Para conectarme a una base de datos MongoDB necesito el paquete mongoose -> npm i mongoose
//el archivo database.js dentro de la carpeta config se va a encontrar la conexión con la base de datos.
//La API se corre desde el archivo app.js por lo que se habre una terminal y se utiliza el comando node app.js o nodemon app.js para que actualice los cambios automáticamente (nodemon tiene que haber sido previamente instalado en la pc)
//En app.js requiero (importo) database.js por lo que al correr app.js tambien corro database.js
//La API tiene ahora una doble conexión: a tavés del puerto se conecta con el front y a través del servidor se conecta con la base de datos
//Si bien la base de datos que estamos utilizando no existe no va a tirar error ya que la va a crear apenas utomáticamente con el primer comando que demos
//Los comandos a la base de datos mongo se pueden hacer por consola. Para esto, ejecutar las consolas mongod.exe (abre la conexión con mongo) y mongosh.exe (abre los comandos) en C=>Archivos de Programa=>MongoDB
//puedo estructurar las colecciones de bases de datos creando modelos como se observa en modelPlato.js. Ese modelo se exporte y se vincula con una determinada colección para que asuma esa estructura. Luego importarlo desde app.js para poder utilizar el modelo.
//En app.js voy a definir los comandos para la base de datos
//Para ordenar el app.js y que no sea tan extenso, los comandos a la base de datos (CRUD) los voy a definir en una carpeta controllers y luego importarlos desde app.js. Las funciones de esos controller van a estar un la carpeta utils en el archivo funcionesDB.js por lo que es necesario exportar todas esas funciones desde funcionesDB.js e importarlas desde controllerPlatos.js. De esta manera el app.js va a contener el ruteo y los controllers
//El routes.js utliza express por lo que debe requerirse.
//para comprobar las peticiones del front a la API podemos usar Postman agregando los endpoints definidos en routes
//Cors es un paquete que evita que el front tire error al consumir una API desde otra fuente como react. Instalar cors con => npm install cors
//La DB Mongo es muy flexible y permite cargar cualquier tipo de dato por lo que conviene estructurarla creando modelos para lo cual es necesario utilizar mongoose.



