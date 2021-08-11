import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  data:any =dataPrueba;

  constructor() { }

  ngOnInit(){

    for (var i = 0; i < this.data.length ; i++) {
              console.log(this.data[i]['email']);
          }
  }

}

const dataPrueba = [
  {
    "id": 1,
    "email": "haha@example.com",
    "first_name": "haha",
    "last_name": "haha",
    "n_document": "333222244",
    "phone_number": "34445556677"
  },
  {
    "id": 2,
    "email": "rfg@example.com",
    "first_name": "hplalslas",
    "last_name": "jdjdjd",
    "n_document": "23232344",
    "phone_number": "34453321454"

  },
  {
    "id": 3,
    "email": "cjqoxec134@nowdigit.com",
    "first_name": "juan ",
    "last_name": "Hhh",
    "n_document": "387374",
    "phone_number": "3887890987"

  },
  {
    "id": 4,
    "email": "vhhgh@gm.com",
    "first_name": "Nbbbv",
    "last_name": "Gggg",
    "n_document": "155555666",
    "phone_number": "3556677777"

  },
  {
    "id": 5,
    "email": "ndjdndb@gm.com",
    "first_name": "Jajsjsjsjs",
    "last_name": "Hehehe",
    "n_document": "18373737",
    "phone_number": "3838370000"

  }

]
