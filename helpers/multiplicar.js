
const fs = require('fs');
const color = require('colors');


const crearArchivo = (base = 5, listar=false, hasta =10) => {

    console.clear();

    return new Promise((resolve, reject) => {

        if(!isNaN(base)){
            if(listar){
                
                console.log('=================='.blue);
                console.log(`Tabla de : ${base}`.blue);
                console.log('=================='.blue ,'\n')
                
            }
        
            let salida = ''; 
        
            for (let i = 0; i <= hasta; i++) {
                salida += `${base} x ${i} = ${base * i} \n`;
            };
        
            listar?console.log(salida.yellow):'';
        
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

            resolve(`tabla-${base}.txt creado exitosamente`)

        }else{
            reject(`error no se ha generado el documento`)
        }



    })
    

}



module.exports = {
    crearArchivo
}