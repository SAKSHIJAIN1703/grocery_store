import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"

export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'Chips', price: 40, image: "https://m.media-amazon.com/images/I/512bWT7n9qL.jpg" ,productStatus: 'hot'},
        {id: 2, name: 'SonPapdi', price: 200, image:"https://i0.wp.com/ajitbakery.in/wp-content/uploads/2021/05/Sonpapdi.jpg",productStatus: 'new'},
        {id: 3, name: 'Biscuits', price: 300, image: "https://rukminim1.flixcart.com/image/416/416/k1b1bbk0/cookie-biscuit/j/x/8/450-assorted-cookie-6-cookie-packets-75gm-each-pack-of-1-unibic-original-imafkwyzmdj6x4sq.jpeg?q=70",productStatus: 'new'},
        {id: 4, name: 'Mixture-Namkeen', price: 150, image:"https://keralaspecial.in/wp-content/uploads/2020/05/Miture.jpg",productStatus: 'new'},
        {id: 5, name: 'Long-Sev', price: 160, image:"https://m.media-amazon.com/images/I/51uvR+D+fsL.jpg",productStatus: 'hot'},
        {id: 6, name: 'Alu-Bhujiya', price: 500, image: "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Aloo-Bhujiya---SK-Khazana.jpg",productStatus: 'new'},
        {id: 7, name: 'Cookies', price: 240, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwA5KihP4y4KJeuAs5QsbMIRtjFC3PFI6BQ&usqp=CAU",productStatus: 'hot'},
        {id: 8, name: 'Petha', price: 120, image: "https://3.imimg.com/data3/KP/DV/MY-7322329/dry-petha-500x500.gif",productStatus: 'new'},
      ])
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;