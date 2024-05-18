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

  //favoritesList 즐겨찾기 등록 리스트 state의 배열을 수정(추가/삭제)
    //state의 배열은 직접 수정x ==> ...으로 분리하고 []로 감싸서 카피본으로 수정 [...]
    //변수를 안쓰고 useState를 사용하는 이유가 데이터값이 바뀌면 화면도 같이 갱신해주려고
    function hAddToFavorite(getCurItem) {
      let copyFavoritesList = [...favoritesList] // 배열 통째로 분리했다가 다시 배열로 만들어서 대입
      //let copyFavoritesList = favoritesList  --> 주소값(공간의 위치)만 들어감..

      // 동일한 id가 있는지 검사 (getCurItem의 id와 favoritesList의 id들을 비교)
      const index = copyFavoritesList.findIndex(e=>e.id === getCurItem.id) // 하나씩 비교해서 못찾으면 -1, 찾으면 해당 위치를 return

      if(index === -1) {
        copyFavoritesList.push(getCurItem) //즐겨찾기 리스트에 없으면 추가
      } else {
        copyFavoritesList.splice(index) // 즐겨찾기 리스트에 있었으면 제거
      }
      // 새로 만든 배열을 state에 엎어친다 (한개이 값만 수정하면 화면이 안바뀌니깐 배열째로 엎어침)
      setFavoritesList(copyFavoritesList);
    }
    
  


  return (
    <GlobalContext.Provider 
    value={{searchParam, setSearchParam, hSubmit, foodList, setFoodList, 
    foodDetailData, setFoodDetailData, hAddToFavorite}}>
      {children}
    </GlobalContext.Provider>
  )
}
