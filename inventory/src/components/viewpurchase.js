import React from 'react'
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
const style = {
    height: 80,
    width: 300,
    margin: 20,
    backgroundColor: '#7B1FA2',
    color:'white',
    textAlign: 'center',
    display: 'inline-block',
};
class ViewPurchase extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.ViewPurchaseRequest()
    }

    render() {
        const viewpurchase = this.props && this.props.app && this.props.app.purchaseData ? this.props.app.purchaseData : [];
        console.log('wievvvvvvvv', viewpurchase)
        return (
            <div>
 <center>
                    <Paper style={style} zDepth={1} >
                        <h3 style={{ textAlign: 'center' }}>    VIEW PURCHASE</h3>
                    </Paper>
                </center>
                <Table>
                    <TableHeader>
                        <TableRow >

                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Product</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Quantity</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Store</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }} >Date</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}> Price/unit</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}> pic</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {viewpurchase.map((val, i) => {
                            console.log(val)
                            return (
                                <TableRow key={i}>

                                    <TableRowColumn key={i}>{val.product}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.quantity}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.store}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.date}</TableRowColumn>
                                    <TableRowColumn key={i}>{val.price}</TableRowColumn>
                                    <Avatar
          src={val.pic}
          size={20}
          style={style}
        ></Avatar>
 

                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>



            </div>
        )
    }

}


export default ViewPurchase;