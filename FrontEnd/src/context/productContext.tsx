import { createContext } from "react";
import { IProduct } from "../types/Product";

export interface IProductContext {
    products: IProduct[],
    setProducts: (products: IProduct[]) => void;
}
export const ProductContext = createContext<(IProductContext)>({
    products: [],
    setProducts: () => { }
});