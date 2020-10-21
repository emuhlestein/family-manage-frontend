import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from '../product-type.service';
import { ProductType } from './product-type';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {

  productTypes = new Array(new ProductType(1, "Pepper", "test"), new ProductType(2, "Salt", "test"), new ProductType(3, "Paprika", "test"));

  constructor(private service: ProductTypeService) { }

  ngOnInit(): void {
    this.service.productTypes$.subscribe(data => {
      this.productTypes = [];
      if (data) {
        data.forEach(item => {
          this.productTypes.push(item);
        })
      }
    })

    this.service.getFoodProductTypes();
  }

  onAddProductType() {

  }

  addProductType() {
    const newItem = new ProductType(4, "New Item", "");
    const foundItem = this.productTypes.find(item => item.name === newItem.name)
    if (!foundItem) {
      this.productTypes.push(newItem);
    }
  }

  onDeleteProductType(id: number) {
    if (this.confirmDelete()) {
      alert('This item will be deleted: ' + id);
    } else {
      alert('THis item will not be deleted: ' + id);
    }
  }

  deleteProductType(selectedOption) {
    this.productTypes = this.productTypes.filter(item => item !== selectedOption)
  }

  confirmDelete() {
    return confirm("Are you sure you want to delete this item");
  }

  cancel() {

  }

}
