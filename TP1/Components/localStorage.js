
export const getData = (key) =>{
    const res = JSON.parse(localStorage.getItem(key))
    return res ? res : []
}


export const setData = (key, array) => {
    try{
        localStorage.setItem(key, JSON.stringify(array))
    } 
    catch(error){
        console.log(error)
    }
}



export const deleteData = (key) => {
    localStorage.removeItem(key)
}

export const updateCounter = itemsData => {

    return itemsData.reduce((total, item) => total+ item.Count,0);
    /*return itemsData.length;*/
}

export const removeElement = (array, prodId) =>{
    array = array.filter(item => item.Id !== prodId);
    return array;
}

