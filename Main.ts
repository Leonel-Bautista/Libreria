import { Autor } from "./Autor";
import { Lector } from "./Lector";
import { Copia } from "./Copia";
import { Libro } from "./Libro";


const Leonel = new Autor("Leonel","Tierra Blanca",30/5/2006)
console.log("-----------------");
console.log(Leonel);
console.log("-----------------");

const Juan = new Libro("Las marravillas de la programacion","Intelectual","Informativo",2022, "USA")
console.log(Juan);
console.log("-----------------");

const Alexander = new Lector(1635,"Aexander Santiago",27463718,"Oaxaca",1347)
console.log(Alexander);
console.log("-----------------");

const Felix = new Libro ("La rama de la filosofia","entretenido","Inspirativo",1995,"USA")
console.log(Felix);
console.log("-----------------");