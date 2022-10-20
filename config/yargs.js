const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        boolean: false,
        default: false,
        describe: 'lista la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type:'number',
        demandOption: true,
        default:10,
        describe: 'Tabla de multiplicar hasta x numero'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        } else {
            return true;
        }
    })
    .argv;


module.exports = argv;