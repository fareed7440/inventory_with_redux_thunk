import React from 'react'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class ViewSale extends React.Component{
   constructor(props){
    super(props)
}

componentDidMount(){
    this.props. ViewSaleRequest()
}

render(){
 const app = this.props.app.store;
 console.log("appppppppppppppppp",app)
 const viewsale = this.props && this.props.app && this.props.app.saleData ? this.props.app.saleData : [];
console.log('wievvvvvvvv',viewsale)
    return(
        <div>

 <Table>
                    <TableHeader>
                        <TableRow >
                           
                            <TableHeaderColumn  style={{color:"#7B1FA2"}}>Product</TableHeaderColumn>
                            <TableHeaderColumn  style={{color:"#7B1FA2"}}>Quantity</TableHeaderColumn>
                            <TableHeaderColumn  style={{color:"#7B1FA2"}}>Store</TableHeaderColumn>
                            <TableHeaderColumn style={{color:"#7B1FA2"}} >Date</TableHeaderColumn>
                            <TableHeaderColumn style={{color:"#7B1FA2"}}>Price</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {viewsale.map((val, i) => {
                            console.log(val)
                            return (
                                <TableRow key={i}>
                                    
                                    <TableRowColumn key={i}>{val.product}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.quantity}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.store}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.date}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.price}</TableRowColumn>
                                    
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>



        </div>
    )
}

}


export default ViewSale;