// 1.Get item for call the local storage and get it the formate 
const getFromLocalStorage = () =>{
    const storedCartString = localStorage.getItem('cart_item')
    if(storedCartString){
      const storedCart = JSON.parse(storedCartString)
      return storedCart;
    }
    return []
    }
    
    // 2.Save to the Local Storage Data 
    const saveDataToLocalStorage = (cart_item) =>{
    // Convert the Data to JSON formate on the store the Web Storage 
    const cartStringConvert =JSON.stringify(cart_item)
    localStorage.setItem('cart_item',cartStringConvert)
    }
    
    
    // 3.AT Last Use This For add item to the local storage 
    const addItemsToLocalstorage =id=>{
        const cart_item  = getFromLocalStorage();
        const newCart = [...cart_item , id];
        // This line send the data to store Local Storage 
        saveDataToLocalStorage(newCart)
    }
    
    const removeFromStoreCart = (id) =>{
      const storedCart = getFromLocalStorage()
      const remainingCart = storedCart.filter(storeID => storeID !== id)
      saveDataToLocalStorage(remainingCart)
    }
    
    
    export {
        addItemsToLocalstorage as addStoredCart , 
        getFromLocalStorage as getItems
      , removeFromStoreCart as removeCart
    }