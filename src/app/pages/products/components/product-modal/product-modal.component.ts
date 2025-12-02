import { Component, inject, Input, signal } from '@angular/core';
import { ProductDetailInterface } from '../../interfaces/product-interface';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-modal',
  standalone: false,
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent {
  @Input({ required: true }) productId!: number;
  productService = inject(ProductService);
  productDetail = signal<ProductDetailInterface | undefined>(undefined);
  ngOnInit() {
    console.log(this.productId);
    this.productService.getOneProduct(this.productId).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('successfully fetched the data'),
    });
  }
}
