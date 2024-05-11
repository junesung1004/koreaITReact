import { useSelector } from 'react-redux'
import './Cart.css'

import React, { useEffect, useState } from 'react'
import CartTile from '../components/cart-tile/Cart';
import { Link } from 'react-router-dom';

export default function Cart() {
  //리덕스에 담긴 데이터를 받아서 화면에 출력
  //리덕스 값은 useSelector로 가져온다
  let [totalPrice, setTotalPrice]= useState(0)

  const cartState = useSelector(state=>state.cart)
  //console.log("state :", cartState)

  //총 가격 구하기
  useEffect(()=> {
    setTotalPrice(cartState.reduce((acc, cur)=> {
      return acc + cur.price
    }, 0))
  }, [cartState]) // useEffect의 update에 대해서 cartState에만 반응하게

  return (
    <>
    <div>
      {cartState && cartState.length ? (
      <div>
        <div className="my-element">
          <div>
            <h1>장바구니 내역</h1>
            <p>담긴 갯수<span>: {cartState.length}개</span></p>
            <p>총 가격<span>: {Math.floor(totalPrice * 1300).toLocaleString('ko-KR')}원</span></p>
          </div>
          <div className='centered-flex-column'>
            {cartState.map((item, idx)=> {
              return (
                <CartTile key={idx} cartItem={item}/>
              )
            })}
          </div>
        </div>
      </div>
      ) : (
        <>
        <h1>현재 담긴 상품이 없습니다.</h1>
        <Link to={'/'}>
          <button>담으러 가기</button>
        </Link>
        </>
      )}
    </div>

    </>
  )
}
