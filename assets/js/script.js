class Propietario {
    constructor(nombreDueno, telefono, direccion) {
        this.nombreDueno = nombreDueno;
        this.direccion = direccion;
        this.telefono = telefono
    }

    datosPropietario() {
        return `El nombre del dueño es ${this.nombreDueno}. El domicilio es ${this.direccion}, y el número telefónico de contacto es ${this.telefono}.`
    }
};
class Animal extends Propietario {
    constructor(nombreDueno, telefono, direccion, tipo) {
        super(nombreDueno, telefono, direccion)
        this._tipo = tipo;
    }
    get tipoNuevo() {
        return `El tipo de animal es un ${this._tipo}`
    }
}
class Mascota extends Animal {
    constructor(nombreDueno, telefono, direccion, tipo, nombreMascota, enfermedadMascota) {
        super(nombreDueno, telefono, direccion, tipo)
        this.nombreMascota = nombreMascota;
        this.enfermedadMascota = enfermedadMascota;
    }
    get nombre() {
        return this.nombreMascota
    }
    set nombre(nombreNuevo) {
        this.nombreMascota = nombreNuevo
    }
    get enfermedad() {
        return this.enfermedadMascota
    }
    set enfermedad(enfermedadNuevo) {
        this.enfermedadMascota = enfermedadNuevo
    }
    mostarDatos() {
        this.datosPropietario();
        let datosPropietario = this.datosPropietario()
        console.log(this.tipoNuevo)
        let datosMascota = `${this.tipoNuevo}, mientras que el nombre de la mascota es ${this.nombreMascota} y la enfermedad es ${this.enfermedadMascota}`
        document.getElementById('resultado').innerHTML =
            `<li>${datosPropietario}</li>
        <li>${datosMascota}</li> `;
    }
}

document.getElementsByTagName('form')[0].addEventListener("submit", function (event) {
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    console.log(tipo)
    let enfermedad = document.getElementById('enfermedad').value;

    switch (tipo) {
        case "perro":
            var mensaje = new Mascota(propietario, telefono, direccion, tipo, nombreMascota, enfermedad);
            console.log("m1", mensaje)
            break;

        case "gato":
            var mensaje = new Mascota(propietario, telefono, direccion, nombreMascota, tipo, enfermedad);
            console.log(mensaje)
            break;

        case "conejo":
            var mensaje = new Mascota(propietario, telefono, direccion, nombreMascota, tipo, enfermedad);
            console.log(mensaje)
            break;
    }
    mensaje.mostarDatos()
    console.log(mensaje)


})