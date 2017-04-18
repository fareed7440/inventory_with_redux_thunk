import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

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

                <Table>
                    <TableHeader>
                        <TableRow >

                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Product</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Quantity</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Store</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }} >Date</TableHeaderColumn>
                            <TableHeaderColumn style={{ color: "#7B1FA2" }}>Total Price</TableHeaderColumn>
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