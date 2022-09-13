// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona {
  nombre: string;
  apellido: string;
  aNacimiento: number;
  constructor(nombre:string,apellido:string,aNacimiento:number){
      this.nombre = nombre;
      this.apellido= apellido;
      this.aNacimiento = aNacimiento;

  }
}