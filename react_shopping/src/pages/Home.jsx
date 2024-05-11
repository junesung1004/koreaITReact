import './Home.css'

import React, { useEffect, useState } from 'react'

import {} from 'react-icons'
import {Circles} from 'react-loader-spinner'
import Product from '../components/product-tile/Product'

export default function Home() {

  //fetch로 받아온 데이터를 보관할 state
  const [products, setProducts] = useState([])

  //fetch로 받아올동안 표시해줄 loading 문구
  const [loading, setLoading] = useState(false)



  //https://fakestoreapi.com/products
  //서버에서 데이터를 받기 위해서 useEffect와 fetch를 사용

  async function fetchListProducts() {
    setLoading(true)
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    console.log("data :", data)
    if(data){
      setLoading(false)
      setProducts(data)
    }
  }

  //리액트에서 화면과는 별개로 좀 오래 걸리는 작업은 
  //useEffect
  useEffect(()=> {
    fetchListProducts()
  },[]) // []를 하면 update에 대해서는 발동안함(처음만 발동)

  return (
    <>
    {loading ? (
      <div className='my-loading'>
        <p>로딩중입니다.</p>
        <Circles height={'120'} width={'120'} color='rgb(127,29,29)' visible={true} />
        </div>
    ) : (
      <div className='my-product-grid'>
        {
          //fatch로 가져온 data 배열을 map 메소드를 이용하여 뿌려주는 코드
          products.map((product, idx) => {
            return (
              <>
              <Product product={product} key={idx} />
              </>
            )
          })
        }
      </div>
    )}
    </>
  )
}
