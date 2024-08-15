import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext';

function AddProducts() {

    const { products, setProducts } = useContext(ProductContext);



    return (
        <div>

            <h2 className="text-center" style={ { padding: "10rem" } }>
                <form action="submit">
                    <input type="number" placeholder='enter Product Id' /><br />
                    <input type="text" placeholder='Enter Name of product' /><br />
                    <input type="text" placeholder='Enter description of product' /><br />
                    <input type="text" placeholder='Enter brand of product' /><br />
                    <input type="int" placeholder='Enter price of product' /><br />
                    <input type="text" placeholder='Enter category of product' /><br />
                    <input type="text" placeholder='Enter release date of product' /><br />
                    <input type="boolean" placeholder='Enter availability of product' /><br />
                    <input type="number" placeholder='Enter quantity of product' /><br />
                    <button type='submit'>Add Product</button>
                </form>


            </h2>
        </div>

    );
}

export default AddProducts;
