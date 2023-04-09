import type { Product } from "./Product"
export interface ProductsList {
    products: Product[]
    total: number
    skip: number
    limit: number
  }