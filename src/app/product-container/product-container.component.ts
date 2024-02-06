import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from './product';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-product-container',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {

}
