import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: boolean = false;

  constructor() { }

  lodaingOn() {
    this.loading = true;
  }

  lodaingOff() {
    this.loading = false;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
