import { Injectable } from '@angular/core';
import { projects } from './mock-data';
@Injectable({
  providedIn: 'root'
})
export class MockServiceService {
  items = [];
  constructor() {

    for (const item of projects.data) {
      this.items.push(item);
    }

  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (const key in params) {
        const field = item[key];
        if (typeof field === 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field === params[key]) {
          return item;
        }
      }
      return null;
    });
  }

}
