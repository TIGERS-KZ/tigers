import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartItem } from '../models/cart';
import { AuthService } from '../service/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  currentUser: any;

  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser()
    
    // this.getCartItems();
  }

  getCartItems(userId: number): void {
    // Call the API service to get the cart items of the user
    this.apiService.getCartItems(userId).subscribe((cartItems: CartItem[]) => {
      this.cartItems = cartItems;
    });
  }

  removeFromCart(item: CartItem): void {
  const token : string | null = localStorage.getItem('token');
  if (token !== null) {
    // делать что-то с токеном
  
  const decodedToken: any  = jwt_decode(token);
  
  const userId = decodedToken.userId;
  

    // Call the API service to remove the item from the user's cart
    this.apiService.removeFromCart(userId,item.id).subscribe(() => {
      // Remove the item from the cartItems array
      const index = this.cartItems.indexOf(item);
      this.cartItems.splice(index, 1);
    });
  }
  }
}
