import React from 'react'
import './DetailItem.css'
import { Link } from 'react-router-dom'

export default function DetailItem({item}) {
  //각 item을 받아서 사용용
  // DetailItem({item})  매개변수로 item이 뭐냐면
  //Home 컴포넌트에서 <DetailItem key={idx} item={food}/> 
  //item이라는 것을 자식으로 props로 넘겨줬기 때문
  return (
    <div className='detail-item-container'>
      <div className="img-box">
        <img src={item?.image_url} alt={item?.title} className='img-style'/>
      </div>

      <div>
        <span className='text-publisher'>{item?.publisher}</span>
        <h3 className='text-title'>{item?.title}</h3>
        <Link to={`/detail/${item?.id}`} className='link-detail'>
          상세보기
        </Link>
      </div>
    </div>
  )
}
