import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()


export class DbzService {


    private _Personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegetta',
          poder: 7500
        }
      ];

      get personajes(): Personaje[] {
        return this._Personajes;
      }
      

    constructor() {}

    agregarPersonaje(personaje: Personaje) {

        this._Personajes.push(personaje);

    }

}