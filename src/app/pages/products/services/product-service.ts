import { inject, Injectable } from '@angular/core';
import {
  ProductDetailInterface,
  ProductInterface,
} from '../interfaces/product-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);

  getAllProducts() {
    return this.httpClient.get<ProductInterface[]>(
      `${environment.apiUrl}/products`
    );
  }

  getOneProduct(id: number) {
    return this.httpClient.get<ProductDetailInterface>(
      `${environment.apiUrl}/products/${id}`
    );
  }
}
