import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "DESIREE",
                "src": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/530/212/products/img_8763_1024x10241-606556abd1129543b216128159372414-1024-1024.jpg",
                "description": "Tapizado: Pana soft y / o estampado",
                "content": "Medidas: 065x065x075 alto.",
                "price": 58000,
                "colors":["Amarillo", "Salmon", "Azul", "Verde"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "AMORE MIO",
                "src": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/530/212/products/whatsapp-image-2020-05-04-at-18-34-331-403a0a5c5f5f49b78116273659863929-1024-1024.jpg",
                "description": "Tapizado: Pana soft. ",
                "content": "Medidas: 65x65x80 alto.",
                "price": 73000,
                "colors": ["Amarillo", "Salmon", "Azul", "Verde"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "SARITA",
                "src": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/530/212/products/whatsapp-image-2021-03-10-at-10-57-341-806fb551932fe7bce316154032825321-1024-1024.jpeg",
                "description": "Tapizado: Pana soft. ",
                "content": "Medidas: 080x075x090 alto",
                "price": 85000,
                "colors": ["Amarillo", "Salmon", "Azul", "Verde"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "BITIA",
                "src": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/530/212/products/img_10201-f351f9c20f521b330616373376408917-1024-1024.jpg",
                "description": "Tapizado: Pana soft. ",
                "content": "Medidas:  0,52 X 0 ,67 X 0,84 mt alto.",
                "price": 102000,
                "colors": ["Amarillo", "Salmon", "Azul", "Verde"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "CARROUSEL",
                "src": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/530/212/products/whatsapp-image-2021-03-10-at-10-57-101-54e97779e2e58508c416154032184721-1024-1024.jpeg",
                "description": "Tapizado: Pana. ",
                "content": "Medidas: 080x075x090 alto",
                "price": 110000,
                "colors": ["Amarillo", "Salmon", "Azul", "Verde"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "CAROL",
                "src": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/530/212/products/img_75921-f2b8a623a881e01b3f16273597992385-1024-1024.jpg",
                "description": "Tapizado: Pana soft. ",
                "content": "Medidas: 080x075x090 alto",
                "price": 89000,
                "colors": ["Amarillo", "Salmon", "Azul", "Verde"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}