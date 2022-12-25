import { Component, OnInit } from '@angular/core';
import { TransferenciaDatosService } from 'src/app/services/transferencia-datos.service';

@Component({
  selector: 'app-componente-alpha',
  templateUrl: './componente-alpha.component.html',
  styleUrls: ['./componente-alpha.component.scss']
})
export class ComponenteAlphaComponent implements OnInit {

  constructor(private transferenciaDatos : TransferenciaDatosService) { }

  readonly mockData = [
    {
      id: 1,
      name: 'John Smith',
      age: 30,
      address: '123 Main Street'
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25,
      address: '456 Park Avenue'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      age: 35,
      address: '789 Market Street'
    }
  ];


  ngOnInit(): void {
  }



  clickAlpha () {
    console.log('Click papaa')
    this.transferenciaDatos.disparadorDeDatos.emit({
      data:this.mockData
    })
  }

}
