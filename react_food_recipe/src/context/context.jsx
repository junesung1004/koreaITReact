import { createContext, useState } from "react";

export const GlobalContext = createContext(null)  //useContext로 가져다 쓸 수 있음.

//리덕스 대신에 전역적으로 사용할 state : index.js에서 App 컴포너트를 감싸줘야함( 리덕스와 유사 ) function GlobalState() 감싸줘야함
export default function GlobalState({children}) {

  //검색 값 state
  let [searchParam, setSearchParam] = useState("")
  // 음식리스트 state
  let [foodList, setFoodList] = useState([])
  // 음식 상세데이터 state
  let [foodDetailData, setFoodDetailData] = useState(null)
  // 즐겨찾기 등록 리스트 state
  let [favoritesList, setFavoritesList] = useState([])
  
  
  //제공할 함수
  //검색을 하면 검색명으로 get요청
  async function hSubmit(e) {
    e.preventDefault()
    //https://forkify-api.herokuapp.com/v2  --> 이용할 사이트
    //https://forkify-api.herokuapp.com/api/v2/recipes?search=${재료명}
    // api요청을해서 가져올때 실패할수도 있는 함수는 try{} catch{error} 구문으로 감싸준다.
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`) // get요청(REST API GET요청)
      const information = await res.json() // REST API는 JSON문자열로 전달하니깐 사용할 수 있는 자료형으로 변경
      console.log("data : ", information)
      if(information?.data.recipes) {
        setFoodList(information?.data.recipes)
        setSearchParam("")
      }
    } catch (err){
      console.error("err :", err)
    }
    
  }
  return (
    <GlobalContext.Provider 
    value={{searchParam, setSearchParam, hSubmit, foodList, setFoodList, 
    foodDetailData, setFoodDetailData, }}>
      {children}
    </GlobalContext.Provider>
  )
}
