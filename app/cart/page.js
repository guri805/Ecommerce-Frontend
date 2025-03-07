
import Link from "next/link";

import AddCart from "../_component/common/AddCart";
const Cart = () => {

    return (
        <section className="cart-page py-5">
            <div className="container ">
                <div className="maincontainer flex my-5 gap-4">
                    <div className="leftPart w-[70%]">
                        <div className="card shadow-md rounded-md bg-white p-3">
                            <div className="cartHeader p-3 border-b-2">
                                <h2 className='font-medium'>Your Cart</h2>
                                <p>There are <span className='font-bold'>2</span> products in your cart</p>
                            </div>
                            <div className="cartItem w-full p-3 flex items-center gap-4 relative border-b-2 my-2 ">
                                <AddCart />
                            </div>
                            <div className="cartItem border-b-2 w-full p-3 flex items-center gap-4 relative">
                                <AddCart />
                            </div>
                        </div>

                    </div>
                    <div className="rightPart w-[30%]">
                        <div className="card shadow-md rounded-md p-3 bg-white flex flex-col gap-2 ">
                            <h2 className='font-medium border-b-2 pb-2'>Card Total</h2>
                            <div className="flex justify-between mt-1">
                                <p>Subtotal</p>
                                <p className='text-primary font-bold'>$60.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Shipping</p>
                                <p className='font-medium'>Free</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Total</p>
                                <p className='font-medium'>$60.00</p>
                            </div>
                            <button className='bg-primary text-white w-full rounded-md mt-3 p-2'><Link href={"/checkout"}>Proceed to Checkout</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
