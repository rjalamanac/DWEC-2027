class Resumen {
  constructor() {
    this.suma = 0;
    this.max_importe = Number.MIN_SAFE_INTEGER;
    this.min_importe = Number.MAX_SAFE_INTEGER;
  }
  mostrarResumen() {
    console.log(
      `Importe total: ${this.suma} Importe Max: ${this.max_importe} Importe Min ${this.min_importe}`,
    );
  }
}

class Paquete {
  constructor(precio, unidades, id) {
    this.id = id;
    this.precio = precio;
    this.unidades = unidades;
  }
}

class Paqueteria {
  constructor(subscribe) {
    this.paquetes = [];
    this.subscribe = subscribe;
  }

  addPaquete(paquete) {
    this.paquetes.push(paquete);
    this.subscribe.notify(this.paquetes);
  }

  removePaquete(paquete) {
    let searchIndex = 0;
    for (let index = 0; index < this.paquetes.length; index++) {
      if (this.paquetes[index].id === paquete.id) {
        searchIndex = index;
      }
    }
    this.paquetes.splice(searchIndex, 1);
    this.subscribe.notify(this.paquetes);
  }

  updatePaquete() {}
}
class Subject {
  constructor(resumen) {
    this.observers = [];
    this.resumen = resumen;
  }

  notify(paqueteria) {
    let importe = 0;
    resumen.suma = 0;
    resumen.max_importe = Number.MIN_SAFE_INTEGER;
    resumen.min_importe = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < paqueteria.length; index++) {
      importe = paqueteria[index].unidades * paqueteria[index].precio;
      resumen.suma += importe;
      if (resumen.max_importe < importe) {
        resumen.max_importe = importe;
      }
      if (resumen.min_importe > importe) {
        resumen.min_importe = importe;
      }
    }
  }
}
let resumen = new Resumen();
let subject = new Subject(resumen);
let paqueteria = new Paqueteria(subject);
resumen.mostrarResumen();
paqueteria.addPaquete(new Paquete(100, 50, 1));
resumen.mostrarResumen();
paqueteria.addPaquete(new Paquete(300, 90, 2));
resumen.mostrarResumen();
paqueteria.addPaquete(new Paquete(1, 5, 3));
resumen.mostrarResumen();
let paqueteCuatro = new Paquete(9999, 9989, 4);
paqueteria.addPaquete(paqueteCuatro);
resumen.mostrarResumen();
paqueteria.removePaquete(paqueteCuatro);
resumen.mostrarResumen();
