const argv = require('./config/yargs.js')
const { crearArchivo } = require('./helpers/multiplicar.js')



// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');


console.log('yargs', argv);
// const base = 4;

crearArchivo( argv.b, argv.l )
    .then(nombreArhivo => console.log(nombreArhivo, 'creado'.red))
    .catch(err => console.log(err))