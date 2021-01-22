import { createModule, action } from 'vuex-class-component';
import { Product } from '@/models/Product';
import { ProductFilter } from '@/models/ProductFilter';

function getDefaultProductFilter(): ProductFilter {
  return {
    name: null,
    minPrice: null,
    maxPrice: null,
  };
}

function getDefaultProducts(): Product[] {
  return [
    { id: 1, name: 'Mercedes-Benz S 63 AMG 2019', price: 167000 },
    { id: 2, name: 'Lincoln Continental AWD 2017', price: 24000 },
    { id: 3, name: 'Ford Fusion SE 2017', price: 16300 },
    { id: 4, name: 'Lexus GX 460 KDSS 2015', price: 39900 },
    { id: 5, name: 'Hyundai Tucson 4WD OFFICIAL 2018', price: 20900 },
    { id: 6, name: 'Mercedes-Benz Sprinter 316 Bluetech Long 2016', price: 19999 },
    { id: 7, name: 'Volkswagen Touareg 2019', price: 55000 },
    { id: 8, name: 'Volkswagen Touareg EXCLUSIVE IDEAL 2015', price: 39999 },
    { id: 9, name: 'Audi Q7 2.0 2019', price: 51500 },
    { id: 10, name: 'Audi Q7 Sline 2018', price: 62000 },
  ];
}

const VuexModule = createModule({ namespaced: 'products', strict: false });

export default class ProductsModule extends VuexModule {
  filter = getDefaultProductFilter();
  products = getDefaultProducts();

  get filteredProducts(): Product[] {
    const filter = this.filter;
    return this.products.filter(
      product =>
        (filter.name === null || product.name.toLowerCase().includes(filter.name.toLowerCase())) &&
        (filter.minPrice === null || product.price >= filter.minPrice) &&
        (filter.maxPrice === null || product.price <= filter.maxPrice),
    );
  }

  @action
  async setFilter(newFilter: ProductFilter): Promise<void> {
    this.filter = newFilter;
  }
}
