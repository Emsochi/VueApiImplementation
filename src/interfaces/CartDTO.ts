import type { ProductDTO } from "./ProductDTO";


export interface CartDTO {
userId: number,
products: ProductDTO[]
  }