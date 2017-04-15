import React from 'react'



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
consol.log('wievvvvvvvv',viewsale)
    return(
        <div>



        </div>
    )
}

}