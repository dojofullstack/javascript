

class Hermano {
    constructor(hermano){
        this.hermano = hermano;
    }

    saludarhermano(){
        console.log(`saludar ${this.hermano}`);
    }
}


class Tio extends Hermano {

    constructor(nombreTio, nombreTia){
        super('Hermano Jose');
        this.tio = nombreTio;
        this.tia = nombreTia;
    }

    saludarTio(){
        console.log('saludar sobrino');
    }

}


class Persona extends Tio {

    constructor(nombre='pepeito', edad=100, pais='peru'){
        // init la clase Tios y tenemoes accesos a sus datos
        super('Tia Maria', 'Tio Juan');

        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
        this.usuarioCorre = '';
    }


    correr(velocidad){
        this.usuarioCorre = 'corriendo 20m/s';

        if (velocidad > 100){
            console.log('supero el recordguiness!', this.nombre);
            return 'supero el recordguiness!'
        }
        console.log('usuario correr');
        return 'practicando..';
    }

    cantar(){
        console.log( this.hermano);
        console.log(this.tia);
        this.saludarhermano();
        console.log('usuario canta', this.nombre);
    }

}


const erick = new Persona('erick', 23, 'mexico');

console.log(erick.pais)
console.log(erick.nombre)
console.log(erick.edad)

erick.correr();

const oscar = new Persona('oscar', 25, 'colombia');
console.log(oscar.pais)
console.log(oscar.nombre)
console.log(oscar.edad)


const milton = new Persona('milton', 30, 'mexico');
console.log(milton.pais)
console.log(milton.nombre)
console.log(milton.edad)

milton.pais = 'paris';
oscar.pais = 'canada';
erick.pais = 'USA';


console.log(milton.pais)
console.log(oscar.pais)
console.log(erick.pais)


const salidaMilton =  milton.correr(101);


console.log(salidaMilton);


milton.saludarTio();
// console.log(milton.tia);
// console.log(milton.tio);


milton.cantar();