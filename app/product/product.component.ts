import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {clone} from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {
	products:Product[];
	productForm: boolean = false;
	editProductForm:boolean = false;
	isNewForm: boolean;
	newProduct: any = {};
	editedProduct:any = {}


	constructor(private productService: ProductService){}

	ngOnInit(){
		this.getProducts();
	}


	getProducts(){
		this.products = this.productService.getProductsFromData();
	}

	showEditProductForm(product:Product){

		if(!product){
			this.productForm = false;
			return;
		}
		this.editProductForm = true;
		this.productForm = false;
		this.editedProduct = clone(product);
	}

	showAddProductForm(){
		//resets form if edited product
		if(this.products.length){
			this.newProduct = {};
		}
		this.editProductForm = false;
		this.productForm = true;
		this.isNewForm = true;
	}


	saveProduct(product: Product){
		if(this.isNewForm){
			//add a new product
			this.productService.addProduct(product);
		}
		this.productForm = false;
	}

	updateProduct(){
		this.productService.updateProduct(this.editedProduct);
	}

	removeProduct(product:Product){
		this.productService.removeProduct(product);
	}

	cancelsEdits(){
		this.editedProduct = {};
		this.editProductForm = false;
	}

	cancel(){
		this.newProduct = {};
		this.productForm = false;
	}


}
