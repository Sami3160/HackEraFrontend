import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';


function Product() {
    const [popularProduct, setPopularProduct] = useState(null);
    const [subfilter, handleSubfilterChange] = useState('');
    const fetchDefaultProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/products');
            setPopularProduct(response.data);
        } catch (error) {
            console.error('Failed to fetch Popular Products info:', error);
        }
    };
        const fetchProducts = async (type) => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products?category=${type}`);
                setPopularProduct(response.data);
            } catch (error) {
                console.error(`Failed to fetch ${type} Products info:`, error);
            }
        };

        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/products');
                setPopularProduct(response.data);
            } catch (error) {
                console.error('Failed to fetch Popular Products info:', error);
            }
        };

       
    const [activeTag, setActiveTag] = useState('All');

    useEffect(() => {
        fetchDefaultProducts();
    }, []);

    if (!popularProduct) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-purple-600"></div>
            </div>
        )
    }
    return (
        <div className="bg-white  pb-10 flex flex-col items-center ">
            <div className="nav flex w-full h-20 bg-purple-50 items-center justify-center underline">
                <label
                    className={`mx-4 cursor-pointer ${activeTag === 'Mobiles' ? 'text-purple-500 font-bold' : 'text-black'}`}
                    onClick={() =>{ fetchProducts('66d2de70f878e7109685d290') }}
                >
                    Mobiles
                </label>
                <label
                    className={`mx-4 cursor-pointer ${activeTag === 'Laptops' ? 'text-purple-500 font-bold' : 'text-black'}`}
                    onClick={() => {fetchProducts('66d2dde7f878e7109685d28a') }}
                >
                    Laptops
                </label>
                <label
                    className={`mx-4 cursor-pointer ${activeTag === 'Clothes' ? 'text-purple-500 font-bold' : 'text-black'}`}
                    onClick={() => {fetchProducts('66d3849e8a602b371294d7f7') }}
                >
                    Cloths
                </label>
                <label
                    className={`mx-4 cursor-pointer ${activeTag === 'Watches' ? 'text-purple-500 font-bold' : 'text-black'}`}
                    onClick={() => {fetchProducts('66d2df41f878e7109685d2ad')}}
                >
                    Watches
                </label>
                <label
                    className={`mx-4 cursor-pointer ${activeTag === 'All' ? 'text-purple-500 font-bold' : 'text-black'}`}
                    onClick={() => {fetchAllProducts()}}
                >
                    All
                </label>
                
                <div className="relative">

                    <label htmlFor="subfilter" className="mx-4 cursor-pointer">Sort :</label>
                    <select
                        id="subfilter"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        onChange={(e) => handleSubfilterChange(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="price">Price (low to high)</option>
                        <option value="price">Price (high to low)</option>
                        <option value="price">Rating (low to high)</option>
                        <option value="price">Rating (high to low)</option>
                        <option value="price">A-Z</option>
                        <option value="price">Z-A</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 mt-3 mx-8 max-w-[1300px]">

                {popularProduct?.map((product) => (
                    <ProductCard
                        key={product._id}
                        id={product._id}
                        imageUrl={product.image.url}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div >
    );
}

export default Product;
