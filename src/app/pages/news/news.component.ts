import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles;

  countries;
  paises;
  categories;
  categorias;

  Country = 'us';
  Category = 'general';

  optionCountry = "";
  optionCategory = "";

  constructor(public authservice: AuthService, private router: Router, private apiService: ApiService) {
    this.countries = ["Emiratos Árabes Unidos", "Argentina", "Austria","Australia","Bélgica", "Bulgaria", "Brasil", "Canadá", "Suiza", "China", "Colombia",
      "Cuba", "República Checa", "Alemania", "Egipto", "Francia", "Reino Unido", "Grecia", "Hong Kong", "Hungría", "Indonesia", "Irlanda",
      "Israel", "India", "Italia", "Japón", "Corea del Sur", "Lituania", "Letonia", "Marruecos", "México", "Malasia", "Nigeria", "Países Bajos",
      "Noruega", "Nueva Zelanda", "Filipinas", "Polonia", "Portugal", "Rumanía", "Serbia y Montenegro", "Rusia", "Arabia Saudita", "Suecia",
      "Singapur", "Eslovenia", "Eslovaquia", "Tailandia", "Turquía", "Taiwán", "Ucrania", "Estados Unidos de América", "Venezuela", "Sudáfrica"];

      this.paises = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg","fr", "gb", "gr", "hk", "hu",
       "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs",
        "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];

    this.categories = ["Negocio", "Entretenimiento", "General", "Salud", "Ciencias", "Deportes", "Tecnologias"];
    this.categorias = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  }

  ngOnInit(): void {
    this.getarticles();
    this.capturar();
  }

  getarticles(){
    this.apiService.getNewsCountryCategory(this.Country, this.Category).subscribe((data)=>{
      this.articles = this.transform(data['articles']);
    });
  }

  capturar() {
    this.filtrar(this.optionCountry, this.optionCategory);
  }

  filtrar(p, c){
    for (let index = 0; index < Object.keys(this.countries).length; index++) {
      const element_country = this.countries[index];
      if (p === element_country) {
        this.Country = this.paises[index];
        console.log(p);
      }            
    }

    for (let index = 0; index < Object.keys(this.categories).length; index++) {
      const element = this.categories[index];
      if (c === element) {
        this.Category = this.categorias[index];
        console.log(c);
      }            
    }
    this.getarticles();
  }

  //Convertir la fecha
  transform(value: any, args: any[] = null): any { 
    return Object.keys(value).map(function(key) { 
     var d = new Date(value[key]['publishedAt']);
     var n = d.toDateString();    
     value[key]['publishedAt'] = n;
      return value[key];
    }); 
   }
}