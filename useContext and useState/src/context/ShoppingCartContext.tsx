import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

type ShoppingCartProviderProps = {
    children : ReactNode
}

type CartItem = {
    id : number
    quantity : number
}

type ShoppingCartContextType = {
    openCart : () => void
    closeCart : () => void
    getItemQuantity : (id : number) => number
    increaseCartQuantity : (id  : number) => void
    decreaseCartQuantity : (id : number) => void
    removeFromCart : (id : number) => void
    cartQuantity : number
    cartItems : CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export const useShoppingCart = () => useContext(ShoppingCartContext)

export const ShoppingCartProvider = ({children} : ShoppingCartProviderProps ) =>{
    const [isOpen,setIsOpen] = useState(false)
    const [cartItems,setCartItems] = useState<CartItem[]>([])  
    
    const cartQuantity = cartItems.reduce(  //* Basica
        (quantity,item) => item.quantity + quantity,
        0
    )
    
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id : number){
       return cartItems.find(item=>item.id === id)?.quantity || 0  //* Since we are basically increasing quantity,first by checking the id,then doing shit on that cart item
    }

    function increaseCartQuantity(id : number){
        setCartItems(currItems=>{
            //* Checking if is there in cart or not
            if(currItems.find(item=>item.id === id) == null){
                return [...currItems,{id,quantity : 1}]
            }
            else{
                return currItems.map(item=>{
                    if(item.id=== id){
                        return {...item, quantity : item.quantity+1}
                    }
                    else{
                        return item
                    }
                })
            }  
        })
    }

    function decreaseCartQuantity(id : number){
       setCartItems(currItems=>{
         if(currItems.find(item=>item.id === id)?.quantity === 1){
            return currItems.filter(item=>item.id!== id)
         }
         else{
            return currItems.map(item=>{
                if(item.id===id){
                 return {...item,quantity : item.quantity - 1}
                }
                else{
                    return item
                }
            })
         }
       })
    }

    function removeFromCart(id : number){
        setCartItems(currItems=>{
            return currItems.filter(item=>item.id!==id)
        })
    }


    
    return (
        <ShoppingCartContext.Provider value={{
            openCart,
            closeCart,
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartQuantity,
            cartItems
        }}>
            <ShoppingCart isOpen = {isOpen} />
            {children}
        </ShoppingCartContext.Provider>
    )
}
    