import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  status: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProducts(): Product[] {
    const categories = ['Electronics', 'Clothing', 'Fitness', 'Accessories'];
    const statuses: ('INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK')[] = ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'];
    
    return Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Product ${String.fromCharCode(65 + (i % 26))}${i > 25 ? i : ''}`,
      price: Math.floor(Math.random() * 900) + 100,
      category: categories[i % categories.length],
      status: statuses[i % statuses.length],
      rating: Math.floor(Math.random() * 5) + 1
    }));
  }
}