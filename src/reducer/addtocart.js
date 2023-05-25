


const init = "Plz Log In"
const nameOfUser = (state = init,action) =>{
    switch(action.type)
    {
        case "NAME":return action.data;
        default : return state
    }
}
const prod  = { cartItem : []};

const SingleProduct = (state = prod,action) =>{
  
    switch(action.type)
    {
        case "PROD" : return {
            ...state,
         cartItem :  state.cartItem.concat(action.data)

        }
        case "RMV" : return{
        
            ...state,
             cartItem : state.cartItem.filter(item => item.id != action.data)
             
        }
        default : return state
    }
}
const initial = 0;
const addToCart = (state = initial ,action) =>{
 
    switch(action.type)
    {
        case "INC" : return state+1;
        case "DEC" : return state-1;
        default : return state
    }
}

let categList = []
export const CategoryList = (state = categList,action)=>{
    switch(action.type){
        case "CAT" : return {
            ...state,
            categList : [...action.data].map((curr) => {
                return curr.categoryID
            })

        }
    }

}

let newSortedArr = []
export const Sorting = (state = newSortedArr , action) =>{

    switch(action.type){
        case "SORT" : 
        const {sortingValue , Arr} = action.data
        let arr = Arr;

        if(sortingValue === "lowest")
        {
          newSortedArr= arr.sort((a,b) => a.price - b.price)
          console.log(newSortedArr);
          return newSortedArr
        }
        if(sortingValue === "highest")
        {
          newSortedArr= arr.sort((a,b) => b.price - a.price)
          console.log(newSortedArr);
          return newSortedArr
        }
        if(sortingValue === "a-z")
        {
          newSortedArr= arr.sort((a,b) => a.productName.localeCompare(b.productName))
          console.log(newSortedArr);
          return newSortedArr
        }
        if(sortingValue === "z-a")
        {
          newSortedArr= arr.sort((a,b) => b.productName.localeCompare(a.productName))
          console.log(newSortedArr);
          return newSortedArr
        }

        default :
        return {
            ...state,
            arr: newSortedArr
        }
    }
}
export default addToCart;
export {nameOfUser,SingleProduct}