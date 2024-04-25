import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url = 'http://google.com';
  urlImage= 'https://picsum.photos/id/40/400/300' ;
  cursoAngular: boolean = true;
  getValor(){
    return 27;
  }

  getCurtirCurso(){
    return true;
  }
}
