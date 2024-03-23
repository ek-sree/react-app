import React from 'react'
import CategoryItems from './CategoryItems'
import { useDispatch, useSelector } from 'react-redux'
import { clear } from '../redux/cartSlice'

const Cart = ({showAddButton}) => {

  const cartItems = useSelector((state)=>state.cart.items)

  const dispatch = useDispatch()

  const handleClear=()=>{
    dispatch(clear())
  }

  return (
    <div>
     
<div className='text-center font-bold p-5'>CART</div>
<div className='text-center font-bold p-5'>
        <button className='bg-black text-white rounded-lg w-20 p-2' onClick={handleClear}>Clear</button>
      </div>
<div className='text-center font-bold p-5'>
      {cartItems.length <=0 ? "Cart is empty,Add something.." : <CategoryItems items={cartItems} showAddButton={false}/>}
      </div>
    </div>
  )
}

export default Cart;