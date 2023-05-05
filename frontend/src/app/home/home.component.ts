import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Product } from '../models/product';
import { AuthService } from '../service/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currentUser: any;

  products: Product[] = [];

  productId: number = 0;
  quantity: number = 0;

  category = null;

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.getProducts();
  }

  getProducts(): void {
    this.apiService.getProducts()
      .subscribe(
        (products: Product[]) => {
          this.products = products
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  addToCart(productId: number, quantity: number) {
    this.apiService.addToCart(this.currentUser,productId, quantity);
  }

}
