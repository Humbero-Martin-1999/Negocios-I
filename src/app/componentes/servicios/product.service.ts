import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    // Leggings (IDs 1–14)
    { id_product: 1, name: 'Legging Deportivo Negro', price: 1499, image: 'LNegro.jpg', description: '' },
    { id_product: 2, name: 'Legging Deportivo Azul', price: 1399, image: 'LAM.jpg', description: '' },
    { id_product: 3, name: 'Legging Deportivo Café', price: 1199, image: 'LMAR.jpg', description: '' },
    { id_product: 4, name: 'Legging Deportivo Naranja', price: 999, image: 'LNAR.jpg', description: '' },
    { id_product: 5, name: 'Legging Deportivo Blanco', price: 1099, image: 'LBL.jpg', description: '' },
    { id_product: 6, name: 'Legging Deportivo Magenta', price: 1199, image: 'LMAG.jpg', description: '' },
    { id_product: 7, name: 'Legging Deportivo Gris', price: 1299, image: 'LGRI.jpg', description: '' },
    { id_product: 8, name: 'Legging Deportivo Natural', price: 1399, image: 'LNAT.jpg', description: '' },
    { id_product: 9, name: 'Legging Deportivo Rojo Llama', price: 999, image: 'LRLL.jpg', description: '' },
    { id_product: 10, name: 'Legging Deportivo Morado', price: 1299, image: 'LUV.jpg', description: '' },
    { id_product: 11, name: 'Legging Deportivo Verde', price: 1099, image: 'LVER.jpg', description: '' },
    { id_product: 12, name: 'Legging Deportivo Azul Klein', price: 999, image: 'LAK.jpg', description: '' },
    { id_product: 13, name: 'Legging Deportivo Chocolate', price: 1149, image: 'LCH.jpg', description: '' },
    { id_product: 14, name: 'Legging Deportivo Moca', price: 1299, image: 'LMO.jpg', description: '' },

    // Shorts Mujer (IDs 15–23)
    { id_product: 15, name: 'Short Deportivo Negro', price: 799, image: 'SHN.jpg', description: '' },
    { id_product: 16, name: 'Short Deportivo Azul', price: 749, image: 'SHA.jpg', description: '' },
    { id_product: 17, name: 'Short Deportivo Café', price: 699, image: 'SHC.jpg', description: '' },
    { id_product: 18, name: 'Short Deportivo Azul Cielo', price: 849, image: 'SH1.jpg', description: '' },
    { id_product: 19, name: 'Short Deportivo Rojo', price: 799, image: 'SHR.jpg', description: '' },
    { id_product: 20, name: 'Short Deportivo Gris', price: 749, image: 'SHG.jpg', description: '' },
    { id_product: 21, name: 'Short Deportivo Naranja', price: 699, image: 'SHNA.jpg', description: '' },
    { id_product: 22, name: 'Short Deportivo Verde', price: 899, image: 'SHV.jpg', description: '' },
    { id_product: 23, name: 'Short Deportivo Marino', price: 899, image: 'SHMA.jpg', description: '' },

    // Bras Deportivos (IDs 24–33)
    { id_product: 24, name: 'Bra Deportivo Negro', price: 899, image: 'BRN.jpg', description: '' },
    { id_product: 25, name: 'Bra Deportivo Azul Marino', price: 849, image: 'BR1.jpg', description: '' },
    { id_product: 26, name: 'Bra Deportivo Rosa', price: 799, image: 'BRR.jpg', description: '' },
    { id_product: 27, name: 'Bra Deportivo Blanco', price: 899, image: 'BRB.jpg', description: '' },
    { id_product: 28, name: 'Bra Deportivo Gris', price: 849, image: 'BRG.jpg', description: '' },
    { id_product: 29, name: 'Bra Deportivo Morado', price: 799, image: 'BRM.jpg', description: '' },
    { id_product: 30, name: 'Bra Deportivo Verde', price: 899, image: 'BRV.jpg', description: '' },
    { id_product: 31, name: 'Bra Deportivo Naranja', price: 799, image: 'BRNA.jpg', description: '' },
    { id_product: 32, name: 'Bra Deportivo Lila', price: 799, image: 'BRL.jpg', description: '' },
    { id_product: 33, name: 'Bra Deportivo Natural', price: 799, image: 'BRNAT.jpg', description: '' },

    // Chamarras Deportivas Mujer (IDs 34–38)
    { id_product: 34, name: 'Chamarra Deportiva Negra', price: 1599, image: 'CH1.jpg', description: '' },
    { id_product: 35, name: 'Chamarra Deportiva Rosa', price: 1499, image: 'CHR.jpg', description: '' },
    { id_product: 36, name: 'Chamarra Deportiva Gris', price: 1399, image: 'CHG.jpg', description: '' },
    { id_product: 37, name: 'Chamarra Deportiva Blanca', price: 1599, image: 'CHB.jpg', description: '' },
    { id_product: 38, name: 'Chamarra Deportiva Beige', price: 1499, image: 'CHBE.jpg', description: '' },

    // Camisetas Hombre (IDs 39–43)
    { id_product: 39, name: 'Camiseta DryFit Negra', price: 899, image: 'CAMN.jpg', description: '' },
    { id_product: 40, name: 'Camiseta DryFit Blanca', price: 899, image: 'CAMB.jpg', description: '' },
    { id_product: 41, name: 'Camiseta DryFit Azul Marino', price: 999, image: 'CAMAZ.jpg', description: '' },
    { id_product: 42, name: 'Camiseta DryFit Gris', price: 999, image: 'CAMG.jpg', description: '' },
    { id_product: 43, name: 'Camiseta DryFit Café', price: 999, image: 'CAMC.jpg', description: '' },

    // Shorts Hombre (IDs 44–50)
    { id_product: 44, name: 'Short Hombre Negro + Licra Negra', price: 849, image: 'SHNH.jpg', description: '' },
    { id_product: 45, name: 'Short Hombre Azul Claro + Licra Negra', price: 799, image: 'SHAC.jpg', description: '' },
    { id_product: 46, name: 'Short Hombre Azul Marino + Licra Negra', price: 899, image: 'SHAM.jpg', description: '' },
    { id_product: 47, name: 'Short Hombre Gris + Licra Negra', price: 849, image: 'SHGH.jpg', description: '' },
    { id_product: 48, name: 'Short Hombre Café + Licra Negra', price: 899, image: 'SHHC.jpg', description: '' },
    { id_product: 49, name: 'Short Hombre Blanco + Licra Negra', price: 899, image: 'SHB.jpg', description: '' },
    { id_product: 50, name: 'Short Hombre Rojo + Licra Negra', price: 899, image: 'SHRH.jpg', description: '' },

    // Pants Hombre (IDs 51–53)
    { id_product: 51, name: 'Pants Deportivo Azul Con Blanco', price: 1099, image: 'PANAB.jpg', description: '' },
    { id_product: 52, name: 'Pants Deportivo Gris Con Negro', price: 1149, image: 'PANGN.jpg', description: '' },
    { id_product: 53, name: 'Pants Deportivo Blanco Con Negro', price: 1199, image: 'PANBN.jpg', description: '' },
    { id_product: 54, name: 'Pants Deportivo Rojo Con Negro', price: 1199, image: 'PANRN.jpg', description:'' },

    //Chamarras Hombre (IDs 55-60)
    { id_product: 55, name: 'Chamarra Deportiva Negra Hombre', price: 1599, image: 'CHN.jpg', description:'' },
    { id_product: 56, name: 'Chamarra Deportiva Amarilla Hombre', price: 1499, image: 'CHAM.jpg', description:''},
    { id_product: 57, name: 'Chamarra Deportiva Café Hombre', price: 1399, image: 'CHAC.jpg', description:'' },
    { id_product: 58, name: 'Chamarra Deportiva Blanca Hombre', price: 1599, image: 'CHBH.jpg', description:'' },
    { id_product: 59, name: 'Chamarra Deportiva Purpura Hombre', price: 1499, image: 'CHP.jpg', description:'' },

    //Suplementos Gimnasio (IDs 60-67)
    { id_product: 60, name: 'Proteína Whey Gold Standard 2,27kg', price: 1719, image: 'WHEY.webp', description:'' },
    { id_product: 61, name: 'Proteína Elite 2,3 kg', price: 1639, image: 'ELITE.webp', description:'' },
    { id_product: 62, name: 'Proteína Whey Pro 2,4kg', price: 1849, image: 'WHEYP.png', description:'' },
    { id_product: 63, name: 'Proteína Birdman Pro 1,4kg', price: 1069, image: 'BIRD.avif', description:'' },
    { id_product: 64, name: 'Creatina Birdman 450g', price: 465, image: 'BIRDC.jpg', description:'' },
    { id_product: 65, name: 'Creatina X-GEAR Pro 150g', price: 240, image: 'XGEAR.png', description:'' },
    { id_product: 66, name: 'Creatina GAT 1Kg', price: 820, image: 'GAT.webp', description:'' },
    { id_product: 67, name: 'Creatina BioShark 500g', price: 456, image: 'GAT.webp', description:'' },

    //Suplementos Running (IDs 68-81)
    { id_product: 68, name: 'Gel Energético GU sabor moras', price: 49, image: 'GUM.webp', description: '' },
    { id_product: 69, name: 'Gel Energético GU sabor Blackberry', price: 49, image: 'GUB.webp', description: '' },
    { id_product: 70, name: 'Gel Energético GU sabor Naranja', price: 49, image: 'GUN.webp', description: '' },
    { id_product: 71, name: 'Gel Energético GU sabor Chocolate', price: 49, image: 'GUC.jpg', description: '' },
    { id_product: 72, name: 'Gel Energético GU sabor Limón', price: 49, image: 'GUL.webp', description: '' },
    { id_product: 73, name: 'Gel Energético RUTS sabor Fresa', price: 49, image: 'RUTSF.webp', description: '' },
    { id_product: 74, name: 'Gel Energético RUTS sabor Arandano', price: 49, image: 'RUTSA.jpg', description: '' },
    { id_product: 75, name: 'Gel Energético RUTS sabor Mango', price: 49, image: 'RUTSM.webp', description: '' },
    { id_product: 76, name: 'Gel Energético MAURTEN sin cafeína', price: 99, image: 'MAUR.webp', description: '' },
    { id_product: 77, name: 'Gel Energético MAURTEN con cafeína', price: 139, image: 'MAURC.jpeg', description: '' },
    { id_product: 78, name: 'Tabletas de electrolitos GU sabor Lima-Limón', price: 199, image: 'GUELI.webp', description: '' },
    { id_product: 79, name: 'Tabletas de electrolitos GU sabor Fresa', price: 199, image: 'GUEF.webp', description: '' },
    { id_product: 80, name: 'Tabletas de electrolitos GU sabor Naranja', price: 199, image: 'GUEN.jpg', description: '' },
    { id_product: 81, name: 'Tabletas de electrolitos GU sabor Limonada de Fresa', price: 199, image: 'GUEFL.webp', description: '' },

    //Suplementos Crossfit(IDs 81-)
    { id_product: 82, name: 'Pre-Entreno X-GEAR 150g', price: 349, image: 'PREXGEAR.png', description: '' },
    { id_product: 83, name: 'Pre-Entreno Coura 300g', price: 329, image: 'PRECO.jpg', description: '' },
    { id_product: 84, name: 'Pre-Entreno Gold Standard 330g', price: 549, image: 'PREGO.jpg', description: '' },
    { id_product: 85, name: 'Pre-Entreno BioShark 320g', price: 299, image: 'PREBIO.webp', description: '' },

    //Suplementos Yoga-Bienestar
    { id_product: 86, name: 'Proteína Vegana Orgánica', price: 599, image: 'PROV.jpg', description: '' },
    { id_product: 87, name: 'Suplemento Vitamínas Y Minerales 120 caps', price: 399, image: 'MULT.avif', description: '' },
    { id_product: 88, name: 'Omega 3 500 caps', price: 749, image: 'O3.avif', description: '' },
    { id_product: 89, name: 'Colágeno Hidrolizado con Magnesio 345g', price: 319, image: 'COL.jpeg', description: '' }


  ];

  // Métodos CRUD
  addProduct(product: Product) {
    // Generar nuevo ID (podría mejorarse)
    const newId = Math.max(...this.products.map(p => p.id_product)) + 1;
    this.products.push({ ...product, id_product: newId });
  }

  updateProduct(updatedProduct: Product) {
    const index = this.products.findIndex(p => p.id_product === updatedProduct.id_product);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id_product !== id);
  }

  private searchResults = this.products;

  constructor() {}



  getProducts(): Product[] {
    return this.products;
  }

  searchProduct(term: string): Product[] {
    const filteredProduct = this.products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    this.searchResults = filteredProduct;
    return this.searchResults;
  }

  getCompra(): number[] {
    const compraString = localStorage.getItem('compra');
    const compra = compraString ? JSON.parse(compraString) : [];
    this.count.set(compra.length);
    return compra;
  }

  addToCompra(id: number) {
    this.incremento();
    const compra = this.getCompra();
    compra.push(id);
    localStorage.setItem('compra', JSON.stringify(compra));
  }

  removeFromFavorites(id: number) {
    this.decremento();
    const compra = this.getCompra();
    const updateProductos = compra.filter(id_product => id_product !== id);
    localStorage.setItem('compra', JSON.stringify(updateProductos));
  }

  private count = signal<number>(0);

  getCounter() {
    return this.count;
  }

  incremento() {
    this.count.update(n => n + 1);
  }

  decremento() {
    this.count.update(n => n - 1);
  }
}
