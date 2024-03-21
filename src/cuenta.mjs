class Cuenta {
  #id
  #saldo //propiedad privada
  constructor(id, saldo) {
    this.#id = id;
    this.#saldo = saldo;
  }

  get id() {
    return this.#id;
  }

  get saldo() {
    return this.#saldo
  }

  depositar(deposito){
    // saldo = saldo + deposito
    this.#saldo += deposito
  }

  girar(monto) {
    if ( this.#saldo >= monto ) {
      this.#saldo -= monto;
      console.log("Haz realizado un giro, tu saldo actual es:", this.#saldo);
    } else {
      console.log("No tienes fondos suficientes, prueba un monto menor");
    }
  }
}

export { Cuenta }