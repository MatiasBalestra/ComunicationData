import { Component, OnInit } from '@angular/core';
import { TransferenciaDatosService } from 'src/app/services/transferencia-datos.service';

@Component({
  selector: 'app-componente-beta',
  templateUrl: './componente-beta.component.html',
  styleUrls: ['./componente-beta.component.scss']
})
export class ComponenteBetaComponent implements OnInit {

  data:any;

  constructor(private transferenciaDatos : TransferenciaDatosService) { }

  ngOnInit(): void {
    this.transferenciaDatos.disparadorDeDatos.subscribe(data => {
      this.data = data;
      console.log('Recibiendo data...', data)
    })
  }

}
