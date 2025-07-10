import { Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  imports: [],
  templateUrl: './filmes.html',
  styleUrl: './filmes.css'
})
export class Filmes {

  filme1 = {
    nome: "Ataque de tubarão de 3 cabeças",
    imagem: "/tubarao.jpg",
    sinopse: "Filme de um tubarão de 3 cabeças "
  }
  filme2 = {
    nome: "Tropa de Elite",
    imagem: "/TropaDeElite.jpg",
    sinopse: "Mostra como a polícia combate ao crime "
  }
  filme3 = {
    nome: "2012",
    imagem: "/2012.jpg",
    sinopse: "Apocalipse do mundo em 2012. "
  }
}
