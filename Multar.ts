export class Multar{


    private Fecha_inicio: number = 0;
    private Fecha_fin: number = 0;


    constructor(Fecha_inicio: number, Fecha_fin: number){
        this.Fecha_inicio = Fecha_inicio;
        this.Fecha_fin = Fecha_fin;
    }

private get_Fecha_inicio():number {
    return this.Fecha_inicio;    
}
private set_Fecha_inicio(Fecha_inicio:number) {
    this.Fecha_inicio = Fecha_inicio;
}
private get_Fecha_fin():number {
    return this.Fecha_fin;
}
private set_Fecha_fin(Fecha_fin:number) {
    this.Fecha_fin = Fecha_fin;
}


}