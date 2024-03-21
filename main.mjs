import { Estudiante } from "./src/estudiante.mjs";
import { Cuenta } from "./src/cuenta.mjs";


let cuentaRut = new Cuenta("11.111.111", 300000);
let cuentaFAN = new Cuenta("123987-123-124", 400000);
let cuentaSantander = new Cuenta("09872-123-4", 10000);

cuentaSantander.depositar(30000);
cuentaSantander.girar(35000);


// Pendiente crear Cuenta
let estudiante = new Estudiante("Pepito", "11.111.111-1", cuentaFAN)

estudiante.cuentas = cuentaRut;
estudiante.cuentas = cuentaSantander;

console.log(estudiante.cuentas);