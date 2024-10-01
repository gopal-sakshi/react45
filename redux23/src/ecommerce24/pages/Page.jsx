import Card from "../components/Card";
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { BsCart } from 'react-icons/bs'
import data from "./api-data";
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteCart } from "../redux-stuff/cart-slice";


export function Page() {

    console.log("data ===> ", data);
    /*************************** HOOKS ***********************/
    // const dispatch = useDispatch();
    // const [product, setProduct] = useState([]);
    // const [qnt, setQnt] = useState(0);
    // const cart = useSelector(state => state.cart.cart);
    // useEffect(() => { setProduct(data) }, []);
    const product = data; 
    const setProduct = (data) => { }
    const cart = [    
        { id : 1, product_name : "Machine 1", product_price : 2000, product_quantity : 1, product_image : "../public/1.png", },
        { id : 2, product_name : "Machine 2", product_price : 4000, product_quantity : 1, product_image : "../public/2.png" }
    ];
    /*************************** HOOKS ***********************/


    /***************************** event handlers ***********************/
    const handleIncrement = (id) => {
        // const updatedCartItems = cart?.map(prod => {
        //     if (prod.id === id) {
        //         let newQuantity =  prod?.product_quantity +  1
        //         return { ...prod, product_quantity: newQuantity };
        //     }
        //     return prod;
        // });

        // if (qnt > 0) { 
        //     let quantity = qnt + 1; 
        //     setQnt(quantity); 
        //     dispatch(setDeleteCart(updatedCartItems)); }
        // else { 
        //     setQnt(1); 
        //     dispatch(setDeleteCart(updatedCartItems)) 
        // }
    }

    const handleDecrement = (id) => {
        // const updatedCartItems = cart?.map(prod => {
        //     if (prod.id === id) {
        //         if(prod?.product_quantity > 1){
        //             let newQuantity =  prod?.product_quantity -  1
        //             return { ...prod, product_quantity: newQuantity };
        //         } 
        //     }
        //     return prod;
        // });

        // if (qnt > 1) {
        //     let quantity = qnt - 1;
        //     setQnt(quantity);
        //     dispatch(setDeleteCart(updatedCartItems));
        // }
        // else {
        //     setQnt(1);
        //     dispatch(setDeleteCart(updatedCartItems));
        // }
    }

    const handleDelete = (id) => {
        // const newCart = cart?.filter(item => item?.id !== id)
        // dispatch(setDeleteCart(newCart))
    }

    const totalPrice = cart.reduce((acc, item) => {
        return acc + (item.product_quantity * item.product_price);
      }, 0);

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div>
                <a href="#cart"><BsCart className=" md:text-6xl mx-4  text-2xl" /></a>
                <p>{cart.length }</p>
            </div>
            <div>
                <div>
                    { product?.map((item) => { return <Card key={item.id} item={item} /> }) }
                </div>
                <div id='cart'>
                    {
                        cart?.map((prod) => {
                            return (
                                <div key={prod?.id}>
                                    <img src={prod?.product_image} width={100} height={100} className="rounded-full" />
                                    <p>{prod?.product_name}</p> <p>{prod?.product_price}</p>
                                    <div className='flex'>
                                        <button onClick={() => handleIncrement(prod?.id)}>+</button>
                                        <p>{prod?.product_quantity}</p>
                                        <button onClick={() => handleDecrement(prod?.id)}>-</button>
                                    </div>
                                    <AiFillDelete onClick={() => handleDelete(prod?.id)} />
                                </div>
                            )
                        })
                    }
                    <div>
                        <p>Total Price {totalPrice}</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
