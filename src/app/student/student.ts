//No se compila
//Define la estructura de una entidad, siempre publicos
//No puede tener constructor
//Se pierden otras ventajas de POO
//Los metodos siempre son abstractos
// se parece a los struct de c
export interface Student {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    ppa: number;
    //Este atributo no es obligatorio
    address?: string;
    activated: boolean;
    fechaPago: Date;
}