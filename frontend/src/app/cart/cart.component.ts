import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartItem } from '../models/cart';
import { AuthService } from '../service/auth.service';
import jwt_decode from 'jwt-decode';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  currentUser: any;

  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser()
    
    this.getCartItems();
  }

  getCartItems(): void {
    // Call the API service to get the cart items of the user
    this.apiService.getCartItems().subscribe((cartItems: Product[]) => {
      this.cartItems = cartItems;
    });
  }

  removeFromCart(item: CartItem): void {
  const token : string | null = localStorage.getItem('token');
  if (token !== null) {
    // делать что-то с токеном
  
  const decodedToken: any  = jwt_decode(token);
  
  const userId = decodedToken.userId;
  
    }
  }
  }

