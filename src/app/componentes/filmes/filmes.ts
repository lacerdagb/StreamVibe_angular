import { Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  imports: [],
  templateUrl: './filmes.html',
  styleUrl: './filmes.css'
})
export class Filmes {
  alterarFavorito() {
    this.filme1.favorito = !this.filme1.favorito
  }


  // Dados mockados
  // filme1 = {
  //   nome: "Ataque de tubarão de 3 cabeças",
  //   imagem: "/tubarao.jpg",
  //   sinopse: "Filme de um tubarão irado que possui 3 cabeças mutantes ",
  //   genero: "drama",
  //   favorito: false
  }


