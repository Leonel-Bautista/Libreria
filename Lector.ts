export class Lector{

    private Num_negocio: number;
    private Nombre: string = "";
    private Telefono: number = 0;
    private Direccion: string = "";
    private T_C: number = 0;

    constructor(Num_negocio: number, Nombre: string, Telefono: number, Direccion: string, T_C: number){
        this.Num_negocio = Num_negocio
        this.Telefono = Telefono;
        this.Direccion = Direccion;
        this.T_C = T_C;
    }
private get_Num_negocio():number {
    return this.Num_negocio;
}
private set_Num_negocio(Nombre_negocio:number){
    this.Num_negocio = Nombre_negocio;
}
private get_Nombre():string {
    return this.Nombre;
}
private set_Nomber(Nombre:string){
    this.Nombre = Nombre;
}
private get_Telefono():number {
    return this.Telefono;
}
private set_Telefono(Telefono:number){
    this.Telefono = Telefono;
}
private get_Direccion():string{
    return this.Direccion;
}
private set_Direccion(Direccion:string){
    this.Direccion = Direccion;
}
private get_T_C():number {
    return this.T_C;
}
private set_T_C(T_C:number){
    this.T_C = T_C;
}
}