import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { User } from '../models/user';
import { CartItem } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    const url = `${this.baseUrl}/products`;
    return this.http.get<Product[]>(url);
  }

  // getUsers(): Observable<User[]> {
  //   const url = `${this.baseUrl}/users`;
  //   return this.http.get<User[]>(url);
  // }

  addToCart(userId: number, productId: number, quantity: number): Observable<any> {
    const url = `${this.baseUrl}/cart`;
    const body = {
      productId,
      quantity
    };
    return this.http.post(url, body);
  }

  getCartItems(userId: number): Observable<CartItem[]> {
    const url = `${this.baseUrl}/cart`;
    return this.http.get<CartItem[]>(url);
  }
  
  removeFromCart(userId: number, itemId: number): Observable<any> {
    // Call the API endpoint to remove the item from the user's cart
    return this.http.delete(`${this.baseUrl}/users/${userId}/cart/${itemId}`);
  }
}
