import { Component } from '@angular/core';

@Component({
  selector: 'app-decimo-primeiro',
  templateUrl: './decimo-primeiro.component.html',
  styleUrls: ['./decimo-primeiro.component.css']
})
export class DecimoPrimeiroComponent {
  texto = "Texto interpolado";
  datanascimento = "2000-01-31";
  urlImagem = "/assets/wolverine.jpeg";

  mostrarDataNascimento() {
    alert(`Data de nascimento é ${this.datanascimento}`);
  }

}
