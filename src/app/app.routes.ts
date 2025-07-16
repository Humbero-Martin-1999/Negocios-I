import { Routes } from '@angular/router';

import { HomeComponent } from './componentes/pages/home/home.component';
import { ProductListComponent } from './componentes/pages/product-list/product-list.component';
import { CartComponent } from './componentes/pages/cart/cart.component';
import { CheckoutComponent } from './componentes/pages/checkout/checkout.component';
import { ConfirmationComponent } from './componentes/pages/confirmation/confirmation.component';
import { LandingComponent } from './componentes/pages/landing/landing.component';
import { MujerComponent } from './ropa/mujer/mujer.component';
import { HombreComponent } from './ropa/hombre/hombre.component';
import { ContactoComponent } from './componentes/pages/contacto/contacto.component';
import { LeggingsComponent } from './ropa/mujer/categorias/leggings/leggings.component';

// Importa los nuevos componentes de aviso y términos
import { AvisoDePrivacidadComponent } from './componentes/pages/aviso/avisodeprivacidad.component';
import { TerminosYCondicionesComponent } from './componentes/pages/terminos/terminosycondiciones.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'landing', component: LandingComponent, title: 'Landing' },
  { path: 'ropa', component: ProductListComponent, title: 'Ropa' },
  { path: 'ropa/mujer', component: MujerComponent, title: 'Ropa Mujer' },
  { path: 'ropa/mujer/leggings', component: LeggingsComponent, title: 'Leggings Mujer' },
  { path: 'ropa/hombre', component: HombreComponent, title: 'Ropa Hombre' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto' },
  { path: 'cart', component: CartComponent, title: 'Carrito' },
  { path: 'verificate', component: CheckoutComponent, title: 'Verificate' },
  { path: 'confirmacion', component: ConfirmationComponent, title: 'Confirmacion' },
  // Nuevas rutas para aviso y términos
  { path: 'avisodeprivacidad', component: AvisoDePrivacidadComponent, title: 'Aviso de Privacidad' },
  { path: 'terminosycondiciones', component: TerminosYCondicionesComponent, title: 'Términos y Condiciones' },
];
