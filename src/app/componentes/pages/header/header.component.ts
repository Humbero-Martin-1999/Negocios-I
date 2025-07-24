import { Component, Signal, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProductService } from '../../servicios/product.service';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- IMPORTANTE para routerLink

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [NgIf, RouterModule]  // <-- agregar RouterModule aquí
})
export class HeaderComponent {

  counter!: Signal<number>;
  isLandingPage: boolean = false;
  searchQuery = signal('');  // Usamos signal para el buscador

  constructor(private productService: ProductService, private router: Router) {
    this.counter = productService.getCounter();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects.split('?')[0].split('#')[0];
      this.isLandingPage = (url === '/landing');
    });
  }

  onSearch(event: Event) {
    event.preventDefault();
    const query = this.searchQuery();
    if (query.trim().length > 0) {
      // Aquí puedes hacer la lógica para buscar, por ejemplo:
      this.router.navigate(['/search'], { queryParams: { q: query } });
    }
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}

