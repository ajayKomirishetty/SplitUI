import { Component } from 'react';
import axios from 'axios';
import './App.css';


class  ProductsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            products :[],
            prices : [],
            totalPrice : 0,
            hasValues : false
        }
    }

    componentDidMount() {
        axios.post('http://localhost:5000/upload', this.props.formData)
        .then(res =>{ 
            console.log(res.data)
            this.setState({
                products : res.data.product_names,
                prices : res.data.product_prices,
                hasValues : true,
                totalPrice : () =>  {
                    var total = 0
                    for(var i = 0; i < res.data.product_prices.length; i++ ){
                        total += i;
                    }
                    return total;
                }
            })
          console.log(res.data.product_names)
          console.log(this.state.products)

        })
        .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Prices</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hasValues &&
                            this.state.products.map((item, i) => {
                                return  <tr>
                                    <td>{item} </td>
                                    <td>{this.state.prices[i]} </td>
                                    </tr>
                            })
                        }
                        <tr>
                            <td>
                              <b>  Total </b> </td><td>
                              {
                                    this.state.hasValues &&
                                    this.state.totalPrice
                              }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    };        
}

export default ProductsList;