"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var lodash_1 = require("lodash");
var ProductComponent = (function () {
    function ProductComponent(productService) {
        this.productService = productService;
        this.productForm = false;
        this.editProductForm = false;
        this.newProduct = {};
        this.editedProduct = {};
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductComponent.prototype.getProducts = function () {
        this.products = this.productService.getProductsFromData();
    };
    ProductComponent.prototype.showEditProductForm = function (product) {
        if (!product) {
            this.productForm = false;
            return;
        }
        this.editProductForm = true;
        this.productForm = false;
        this.editedProduct = lodash_1.clone(product);
    };
    ProductComponent.prototype.showAddProductForm = function () {
        //resets form if edited product
        if (this.products.length) {
            this.newProduct = {};
        }
        this.editProductForm = false;
        this.productForm = true;
        this.isNewForm = true;
    };
    ProductComponent.prototype.saveProduct = function (product) {
        if (this.isNewForm) {
            //add a new product
            this.productService.addProduct(product);
        }
        this.productForm = false;
    };
    ProductComponent.prototype.updateProduct = function () {
        this.productService.updateProduct(this.editedProduct);
    };
    ProductComponent.prototype.removeProduct = function (product) {
        this.productService.removeProduct(product);
    };
    ProductComponent.prototype.cancelsEdits = function () {
        this.editedProduct = {};
        this.editProductForm = false;
    };
    ProductComponent.prototype.cancel = function () {
        this.newProduct = {};
        this.productForm = false;
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'product.template.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map