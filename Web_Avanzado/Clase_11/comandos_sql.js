/*
mas comandos DDL
ALTER TABLE tabla MODIFY -> modificar solo el tipado del campo
ALTER TABLE tabl CHANGE -> modificar el nombre y tipado del campo
para modificar el nombre de la tabla 
RENAME  TABLE nombre_actual TO nuevo_nombre  -> modifica el nombre de la tobla
Eliminar una tabla 
DROP TABLE nombre_tabla 
DROP DATABASE nombre_db
CREATE TABLE tabla (campos) VALUES (valor de los campos),(valor de los campos)
*/

/* comando DML
SELECT * | campo | campo,campo FROM tabla WHERE condicion
UPDATE tabla SET campo=nuevo_valor ,campo=nuevo_valor WHERE condicion
INSERT INTO tabla (campos) VALUES (valores)
DELETE FROM tabla  WHERE campo= valor
*/

//*************RELACIONAR TABLAS*********************/

//crear tabla con un campo que sea FOREIGN KEY y que sea referenciado a la PRIMARY KEY de otra tabla

/*CREATE TABLE cursos (
    id_curso INT AUTO_INCREMENT,
	nombre VARCHAR (50) NOT NULL,
    cant_alumno INT (3) NOT NULL,
    legajo_doc INT,
    PRIMARY KEY (id_curso),
    FOREIGN KEY (legajo_doc) REFERENCES docentes(legajo)

);*/