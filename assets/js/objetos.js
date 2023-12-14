

console.log('objetos en JS');


const username = 'dojo';

const usuario = {
    edad: 23,
    name: 'henry',
    isAlumno: true,
    hobies: [
        'piano', 'ajedrez'
    ],
    correr: function (){
        console.log('usuario corre', this.name);
        // console.log('usuario corre', usuario.edad);
    },
    cantar: function (){
        console.log('usuario canta opera', this.isAlumno);
    },
    programar: () => {
        console.log(`usuario ${usuario.name} prama en JS`);
    }
}

console.log(usuario.isAlumno);

usuario.correr();

usuario.cantar();

usuario.programar();
