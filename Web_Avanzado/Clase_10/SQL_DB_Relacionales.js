// Comandos DDL (modifican la tabla)
//Para crear una base de datos con SQL
// CREATE DATABASE nombre_base_de_datos;
//Para crear una tabla con SQL 
//CREATE TABLE nombre_de_la_tabla ( nombre_campo tipo_de_dato,nombre_campo tipo_de_dato);
//o alternativa

//CREATE TABLE base_de_datos .nombre_de_la_tabla ( nombre_campo tipo_de_dato,nombre_campo tipo_de_dato);

// primary key ( clave primaria ) -> valor unico para cada registro asi podemos diferenciar uno de otro 
// NOT NULL no permite que ese valor del campo sea nulo
//AUTO_INCREMENT -> de manera automatica le asigna un numero que escala de a una unidad por registro



//Comandos DML ( modifican los registros, los datos ingresados)

//INSERT INTO nombre_tabla (campos)VALUES(valores de los campos),(valores de los campos de otro registro);


//UPDATE nombre_tabla SET campo_a_modificar=nuevo-valor WHERE campo_identificacion=valor

//SELECT nombre_campo,nnombre_otro_campo FROM nombre_tabla WHERE campo=valor -> trae el valor de nombre_campo del registro que cumple con la condicion luego del WHERE

//SELECT * FROM nombre_tabla WHERE campo=valor -> todo el registro completo que cumpla con la condicion.


//DELETE FROM nombre_tabla WHERE campo=valor
//IMPORTANTEEEE no olvidarnos el  WHERE o nos borra todo

// ALTER TABLE nombre-tabla ADD COLUMN nombe-columna =>condiciones

//ALTER TABLE nombre-table MODIFY COLUMN nombre-column => condiciones

//ALTER TABLE nombre-table CHANGE nombre-column nuevo-nombre-column => condiciones 