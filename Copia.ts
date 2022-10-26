import { Libro } from './Libro';
import { Lector } from './Lector';
export class Copia{


    private Fecha: number = 0;
    private ID: number = 0;
    private Estado: string = "";
    private Copia: any []=[];


    constructor(Fecha: number, ID: number, Estado: string,Libros: any){
        this. Fecha = Fecha;
    }

public get_ID():number {
    return this.ID;
}
public set_ID(ID:number){
    this.ID = ID;
}
public get_Estado():string {
    return this.Estado;
}
public set_Estado(Estado:string) {
    this.Estado = Estado;
}public get_Fecha():number {
    return this.Fecha;
}
public set_Fecha(Fecha:number) {
    this.Fecha = Fecha;
    }



public AgregarCopia (NoCopias:number,Libro: Libro,Lector: Lector){
    this.ID++;
    let Registro={
    Registro:this.ID,
    Lector:Lector,
    NumCopias:NoCopias,
    Estado: 'proceso',
};
this.Copia.push(Registro);
}
public listacopias():void{
    console.log(this.Copia);

};
};