import { useDispatch, useSelector } from 'react-redux'
import './Product.css'

import React from 'react'
import { addToCart, removeFromCart } from '../../store/slices/cart-slice';


//home 컴포넌트에서 props로 상품정보를 받는다 {product}
export default function Product({product}) {
  //addToCart 함수를 이용해서 정보를 추가
  const dispatch = useDispatch();

  function hAddToCart(){
    dispatch(addToCart(product))
  }

  function hRemoveFromCart(){
    dispatch(removeFromCart(product.id))
  }

  //cart 프로퍼티를 추출
  const cart = useSelector((state) => state.cart);


  return (
    <>
    <div className="flex-col-container">
      <div style={{height:'180px'}}>
        <img className='full-cover-image' src={product?.image} alt={product.title}/>
        <div className='product-title'>
        <h4>{product.title}</h4>
        </div>
        <div className='add-cart-btn-wrapper'>
          <button className='add-cart-btn' onClick={cart.some(item=>item.id === product.id) 
            ? hRemoveFromCart : hAddToCart
          }>
            {
            cart.some(item=>item.id === product.id) ? '장바구니에서 제거' : '장바구니 담기'
            }
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

//장바구니에 담긴 정보는 리덕스 store에 저장