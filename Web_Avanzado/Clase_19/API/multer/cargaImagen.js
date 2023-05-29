const multer=require('multer');
//const upload=multer({dest:'./imagenes'}); //se define la carpeta destino donde van a ser alojados los archivos recibidos. Con diskstorage se puede configurar el multer para estabñecer el destino, tipo de archivo, etc.

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{ //cb=callBack
        const pathDocument='./imagenes';
        cb(null,pathDocument);
    },

    filename:(req,file,cb)=>{
        const ext=file.originalname.split(".").pop(); //esto permite dividir el nombre original y obtener la extensión 
        const filename=`img-${Date.now()}.${ext}`; //con esto se reemplaza el nombre del archivo original con fecha y hora para evitar que el nombre se repita
        cb(null,filename);
    },
});

const upload=multer({storage});

module.exports=upload;
