import { Component, inject, signal } from '@angular/core';
import { ProductService } from './services/product-service';
import { ProductInterface } from './interfaces/product-interface';
import { RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  productService = inject(ProductService);
  products = signal<ProductInterface[]>([]);
  filteredProducts = signal<ProductInterface[]>([]);
  isModalOpen = signal<boolean>(false);
  currentProductModalId = signal<number>(0);

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        this.filteredProducts.set(data);
      },
      error: (err) => console.log(err),
      complete: () => console.log('initial products fetch done!!!'),
    });
  }

  handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      event.target.complete();
    }, 4000);
  }

  filter(event: CustomEvent) {
    if (event.detail.value === 'all') {
      this.filteredProducts.set(this.products());
    } else if (event.detail.value === "men's clothing") {
      this.filteredProducts.set(
        this.products().filter((prod) => prod.category === "men's clothing")
      );
    } else {
      this.filteredProducts.set(
        this.products().filter((prod) => prod.category === "women's clothing")
      );
    }
  }

  handleSearch(event: CustomEvent) {
    let target: string = event.detail.value || '';
    this.filteredProducts.set(
      this.products().filter(
        (prod) =>
          prod.title.toLowerCase().includes(target.toLowerCase()) ||
          prod.category.toLowerCase().includes(target.toLowerCase())
      )
    );
  }

  handleModalClick(productData: number) {
    this.currentProductModalId.set(productData);
    console.log(this.currentProductModalId());
    this.isModalOpen.set(true);
  }

  handleCloseModal() {
    this.isModalOpen.set(false);
  }
}
