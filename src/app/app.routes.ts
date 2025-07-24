import { Routes } from '@angular/router';

import { HomeComponent } from './componentes/pages/home/home.component';
import { ProductListComponent } from './componentes/pages/product-list/product-list.component';
import { CartComponent } from './componentes/pages/cart/cart.component';
import { CheckoutComponent } from './componentes/pages/checkout/checkout.component';
import { ConfirmationComponent } from './componentes/pages/confirmation/confirmation.component';
import { LandingComponent } from './componentes/pages/landing/landing.component';
import { MujerComponent } from './ropa/mujer/mujer.component';
import { HombreComponent } from './ropa/hombre/hombre.component';
import { LeggingsComponent } from './ropa/mujer/categorias/leggings/leggings.component';
import { ShortsComponent } from './ropa/mujer/categorias/shorts/shorts.component';
import { BraDeportivoComponent } from './ropa/mujer/categorias/bra-deportivo/bra-deportivo.component';
import { ChamarrasDeportivasMujerComponent } from './ropa/mujer/categorias/chamarras-deportivas-mujer/chamarras-deportivas-mujer.component';
import { ChamarrasDeportivasHombreComponent } from './ropa/hombre/categoriash/chamarras-deportivas-hombre/chamarras-deportivas-hombre.component';
import { CamisetasComponent } from './ropa/hombre/categoriash/camisetas/camisetas.component';
import { ShortshComponent } from './ropa/hombre/categoriash/shortsh/shortsh.component';
import { PansComponent } from './ropa/hombre/categoriash/pans/pans.component';
import { ContactoComponent } from './componentes/pages/contacto/contacto.component';

import { AvisoDePrivacidadComponent } from './componentes/pages/aviso/avisodeprivacidad.component';
import { TerminosYCondicionesComponent } from './componentes/pages/terminos/terminosycondiciones.component';
 
//
// Importa los componentes de la página de administración
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';

// Importa los componentes de suplementos
import { GimnasioComponent } from './suplementos/gimnasio/gimnasio.component';
import { RunningComponent } from './suplementos/running/running.component';
import { CrossfitComponent } from './suplementos/crossfit/crossfit.component';
import { YogaBienestarComponent } from './suplementos/yoga-bienestar/yoga-bienestar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'admin', component: AdminComponent, title: 'Administración', canActivate: [AdminGuard]},
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'landing', component: LandingComponent, title: 'Landing' },
  { path: 'ropa', component: ProductListComponent, title: 'Ropa' },
  { path: 'ropa/mujer', component: MujerComponent, title: 'Ropa Mujer' },
  { path: 'ropa/mujer/leggings', component: LeggingsComponent, title: 'Leggings Mujer' },
  { path: 'ropa/mujer/shorts', component: ShortsComponent, title: 'Shorts Mujer' },
  { path: 'ropa/mujer/bra-deportivo', component: BraDeportivoComponent, title: 'Bra Deportivo Mujer' },
  { path: 'ropa/mujer/chamarras-deportivas-mujer', component: ChamarrasDeportivasMujerComponent, title: 'Chamarras Deportivas Mujer' },
  { path: 'ropa/hombre', component: HombreComponent, title: 'Ropa Hombre' },
  { path: 'ropa/hombre/camisetas', component: CamisetasComponent, title: 'Camisetas Hombre' },
  { path: 'ropa/hombre/shortsh', component: ShortshComponent, title: 'Shorts Hombre' },
  { path: 'ropa/hombre/pans', component: PansComponent, title: 'Pans Hombre' },
  { path: 'ropa/hombre/chamarras-deportivas-hombre', component: ChamarrasDeportivasHombreComponent, title: 'Chamarras Deportivas Hombre' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto' },
  { path: 'cart', component: CartComponent, title: 'Carrito' },
  { path: 'verificate', component: CheckoutComponent, title: 'Verificate' },
  { path: 'confirmacion', component: ConfirmationComponent, title: 'Confirmacion' },
  { path: 'avisodeprivacidad', component: AvisoDePrivacidadComponent, title: 'Aviso de Privacidad' },
  { path: 'terminosycondiciones', component: TerminosYCondicionesComponent, title: 'Términos y Condiciones' },

  // Rutas para suplementos
  { path: 'suplementos/gimnasio', component: GimnasioComponent, title: 'Suplementos Gimnasio' },
  { path: 'suplementos/running', component: RunningComponent, title: 'Suplementos Running' },
  { path: 'suplementos/crossfit', component: CrossfitComponent, title: 'Suplementos Crossfit' },
  { path: 'suplementos/yoga-bienestar', component: YogaBienestarComponent, title: 'Suplementos Yoga y Bienestar' },

  // Rutas de administración
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'admin', component: AdminComponent, title: 'Administración',canActivate: [AdminGuard]}
];

