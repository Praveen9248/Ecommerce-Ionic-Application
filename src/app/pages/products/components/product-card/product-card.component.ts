import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../interfaces/product-interface';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input({ required: true }) productData!: ProductInterface;

  handleCart(event: Event) {
    event.stopPropagation();
    console.log('click the cart');
  }
}
