import { Autor } from "./Autor";
export class Libro{

    private Titulo: string = "";
    private Tipo: string = "";
    private Editorial: string = "";
    private Año: number = 0;

    constructor(Titulo: string, Tipo: string, Editorial: string, Año: number, nacionalidad: string){
        this. Titulo = Titulo;
        this. Tipo = Tipo;
        this. Editorial = Editorial;
        this. Año = Año;
    }
    private get_Titulo():string{
        return this.Titulo;
    }
    private set_Titulo(Titulo:string){
        this.Titulo = Titulo;
    }
    private get_Tipo():string{
        return this.Tipo;
    }
    private set_Tipo(Tipo:string){
        this.Tipo = Tipo;
    }
    private get_Editorial():string{
        return this.Editorial;
    }
    private set_Editorial(Editorial:string){
        this.Editorial = Editorial;
    }
    private get_Año():Number {
        return this.Año;
    }
    private set_Año(Año:number){
        this.Año = Año;
    }
}