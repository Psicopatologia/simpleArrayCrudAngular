import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product-container/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() index!: number;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() editProduct = new EventEmitter<number>();

  selectProductToDelete(index: number) {
    this.deleteProduct.emit(index)
  }

  selectProductToEdit(index: number) {
    this.editProduct.emit(index);
  }
}
