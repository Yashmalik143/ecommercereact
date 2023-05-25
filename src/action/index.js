

export const addToCartv= () =>{
    return{
        type : 'INC'
    }
}

export const deleteFromCart = () =>{
    return {
        type :'DEC'
    }
}

export const nameOf = (data) =>{
    return {
        type :'NAME',
        data : data
    }
}



export const SingleProduct = (data)=>{
    return {
        type :'PROD',
        data : data
    }
}

export const Deleteproduct = (data)=>{
    return {
        type:"RMV",
        data:data
    }
}

export const Category = (data) =>{

    return {
        type :"CAT" , 
        data : data
    }
}

export const Sort = (data) =>{

    debugger;
    return{
        type:"SORT",
        data : data
    }
}

















