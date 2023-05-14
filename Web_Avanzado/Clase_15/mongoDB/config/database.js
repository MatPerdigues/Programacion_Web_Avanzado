let mongoose=require('mongoose');
const server = '127.0.0.1:27017';
const database = 'comidas';

const main = async()=>{
    await mongoose.connect('mongodb://'+server+'/'+database);

}

main()
.then(()=>{ console.log('Conexón con mongoDB exitosa')})
.catch((err)=>{console.log(err)});