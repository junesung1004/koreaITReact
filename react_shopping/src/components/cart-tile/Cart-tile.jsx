import './Cart-tile.css'
import {useDispatch} from 'react-redux'
import {removeFromCart} from '../../store/slices/cart-slice'

import React from 'react'

export default function CartTile({cartItem}) {
  //리덕스(store)의  함수를 사용하기 위해선 useDispatch()
  const dispatch = useDispatch()
  function hRemoveFromCart(){
    dispatch(removeFromCart(cartItem.id))
  }
  //리덕스(store)의 데이터를 사용하기 위해선 useSelector() 사용
  

  return (
    <>
    <div className="tile-container">
      <div className='flex-padding'>
        <img src={cartItem?.image} alt={cartItem?.title} className='rounded-box'/>
        <div className='tile-content'>
          <h1 className='text-title'>{cartItem.title}</h1>
          <p className='text-price'>{Math.floor(cartItem.price * 1300).toLocaleString('ko-KR')}원</p>
        </div>
      </div>

      <div>
        <button onClick={hRemoveFromCart} className='bold-red-btn'>제거</button>
      </div>
    </div>
    </>
    
  )
}
