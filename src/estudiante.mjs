class Estudiante {
  #cuentas // -> Cuenta (objeto)
  constructor(nombre, rut, cuenta) {
    this.nombre = nombre;
    this.rut = rut;
    this.#cuentas = [cuenta] || [];
  }

  get cuentas() {
    return this.#cuentas;
  }

  set cuentas(nuevaCuenta) {
    this.#cuentas.push(nuevaCuenta);
  }
}

export { Estudiante }