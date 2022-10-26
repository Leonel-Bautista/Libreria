export class Prestamo {

    private Inicio: string = "" ;
    private Fin : string = "" ;
   constructor ( Nombre : string , Nacionalidad : string , Fecha_nacimiento : string , Titulo : string , Tipo : string , Editorial : string , Año : string , Num_negocio : number , Inicio : string , Fin : string ) {
       this.Inicio = Inicio ;
       this.Fin = Fin ;
   }

   public  set_Inicio (Inicio:string) {
       this.Inicio  =  Inicio ;
   }
    public get_Inicio():string {
       return this.Inicio ;
   }


   public  set_Fin (Fin : string ) {
       this.Fin  =  Fin ;
   }
    public get_Fin():string {
       return this.Fin;
   }


}