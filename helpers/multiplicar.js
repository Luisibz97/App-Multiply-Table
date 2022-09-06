const fs = require('fs');
const colors = require('colors');
const argv = require('../config/yargs.js')

                    

const crearArchivo = async (base = 5, listar) => {

    try {
        
        salida = '';
        const limite = argv.h
        
        for (let i = 1; i <= limite; i++) {
            salida += (`${base} X ${i} = ${base * i}\n`);
        };
        
        
        if (listar) {
            console.log( '===================='.blue );
            console.log( colors.rainbow(`  Tabla del:`, ), colors.magenta(base) );
            console.log( '===================='.blue );
            console.log(colors.yellow(salida));
        } 
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
        
        return `tabla-${base}.txt`.red


    } catch (err) {
        throw err;
    }

    

    // return new Promise( (resolve, reject ) => {
    //     console.log( '====================' );
    //     console.log( `  Tabla del:`, base   );
    //     console.log( '====================' );

    //     salida = '';

    //     for (let i = 1; i <= 10; i++) {
    //         salida += (`${base} X ${i} = ${base * i}\n`);
    //     };

    //     console.log(salida);

    //     fs.writeFileSync(`tabla-${base}.txt`, salida );
    //     resolve(`tabla-${base}.txt`)
    //     reject('No se ha podido crear el archivo')
    // } )  
}

module.exports = {
    crearArchivo
}