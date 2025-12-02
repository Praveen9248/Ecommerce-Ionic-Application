import { Component, inject, signal } from '@angular/core';
import { ProductService } from './services/product-service';
import { ProductInterface } from './interfaces/product-interface';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  productService = inject(ProductService);
  products = signal<ProductInterface[]>([]);
  isModalOpen = signal<boolean>(false);
  currentProductModalId = signal<number>(0);

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.log(err),
      complete: () => console.log('initial products fetch done!!!'),
    });
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
