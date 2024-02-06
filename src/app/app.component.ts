import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductContainerComponent } from './product-container/product-container.component';
import { Product } from './product-container/product';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductContainerComponent,
    NavBarComponent,
    ProductItemComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-JSON-crud';

  products: Product[] = [
    {
      name: "Producto 1",
      price: 1000,
      quantity: 100
    },
    {
      name: "Producto 2",
      price: 100,
      quantity: 10
    }
  ]

  selectedProduct!: Product | undefined;
  selectedIndex!: number;

  openEditModal(index: number) {
    this.selectedProduct = { ...this.products[index] };
    this.selectedIndex = index;
  }

  closeEditModal() {
    this.selectedProduct = undefined;
  }

  addProduct(product: Product) {
    this.products = [...this.products, product];
  }

  deleteProduct(index: number) {

    this.products = this.products.filter((_, i) => i != index);
  }

  onSubmitAddForm(addForm: NgForm) {
    this.addProduct(<Product>addForm.value)
  }

  onSubmitEditForm(addForm: NgForm) {
    const tempProducts: Product[] = [...this.products]
    tempProducts[this.selectedIndex].name = addForm.value.name;
    tempProducts[this.selectedIndex].price = addForm.value.price;
    tempProducts[this.selectedIndex].quantity = addForm.value.quantity;
    this.products = tempProducts;
    this.selectedProduct = undefined;
  }
}
