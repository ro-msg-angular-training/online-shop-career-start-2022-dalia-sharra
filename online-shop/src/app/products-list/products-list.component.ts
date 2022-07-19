import { Component, OnInit } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products : Product[] = [
    {
      id: 0,
      name: "Notebook Basic 15",
      category: "Laptops",
      image: "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      price: 956,
      description: "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro"
    },
    {
      id: 1,
      name: "Notebook Basic 17",
      category: "Laptops",
      image: "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
      price: 1249,
      description: "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro"
    },
    {
      id: 2,
      name: "Notebook Basic 18",
      category: "Laptops",
      image: "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg",
      price: 1570,
      description: "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro"
    },
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
