// Clase Contador: guarda el valor y sabe cómo cambiarlo
class Contador {
  constructor() {
    this.valor = 0; // estado inicial

    // Conectamos los botones con los métodos de la clase
    document.getElementById("sumar")
      .addEventListener("click", () => this.sumar());
    document.getElementById("restar")
      .addEventListener("click", () => this.restar());
    document.getElementById("reiniciar")
      .addEventListener("click", () => this.reiniciar());
  }

  sumar() {
    this.valor++;
    this.mostrar();
  }

  restar() {
    if (this.valor > 0) {
      this.valor--;
      this.mostrar();
    } else {
      console.log("es cero");
    }
  }

  reiniciar() {
    this.valor = 0;
    this.mostrar();
  }

  // Modifica el contenido HTML desde JavaScript
  mostrar() {
    document.getElementById("valor").textContent = this.valor;
  }
}

new Contador();
