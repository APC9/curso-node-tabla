
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');





 crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo =>console.log(nombreArchivo, 'creado') )
    .catch(err=>console.log(err))
     
    
  




/* const [,,arg3='base=5'] =process.argv;
const [,base = 0]=arg3.split('=');
console.log(base); */



/* fs.writeFile('tabla-5.txt', salida, (err)=>{
    if(err) throw err;
    console.log('tabla-5.txt creada');
}) */