import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/pages/home/home.component';
import { ProductListComponent } from './componentes/pages/product-list/product-list.component';
import { CartComponent } from './componentes/pages/cart/cart.component';
import { CheckoutComponent } from './componentes/pages/checkout/checkout.component';
import { ConfirmationComponent } from './componentes/pages/confirmation/confirmation.component';
import { LandingComponent } from './componentes/pages/landing/landing.component';
import { MujerComponent } from './ropa/mujer/mujer.component';
import { ContactoComponent } from './componentes/pages/contacto/contacto.component'; // <-- Importa el componente

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'landing', component: LandingComponent, title: 'Landing' },
  { path: 'ropa', component: ProductListComponent, title: 'Ropa' },
  { path: 'ropa/mujer', component: MujerComponent, title: 'Ropa Mujer' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto' },  // <-- Ruta nueva
  { path: 'cart', component: CartComponent, title: 'Carrito' },
  { path: 'verificate', component: CheckoutComponent, title: 'Verificate' },
  { path: 'confirmacion', component: ConfirmationComponent, title: 'Confirmacion' },
];
