export class Autor{

    private Nombre: string = "";
    private Nacionalidad: string = ""; 
    private Fecha_nacimiento: number = 0;

    constructor(Nombre: string, Nacionalidad: string, Fecha_nacimiento: number){
        this. Nombre = Nombre
        this. Nacionalidad = Nacionalidad;
        this. Fecha_nacimiento = Fecha_nacimiento;
    }

    private get_Nombre():string {
        return this.Nombre;
    }
    private set_Nombre(Nombre:string){
        this.Nombre = Nombre;
    }
    private get_Nacionalidad():string {
        return this.Nacionalidad;
    }
    private set_Nacionalidad(Nacionalidad:string){
        this.Nacionalidad = Nacionalidad;
    }
    private get_Fecha_Nacimiento():number{
        return this.Fecha_nacimiento;
    }
    private set_Fecha_nacimiento(Fecha_nacimiento:number){
        this.Fecha_nacimiento = Fecha_nacimiento
    }
}
