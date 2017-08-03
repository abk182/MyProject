import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartAdd } from "../actions/actions";


const mapStateToProps = ({SelectedItem}) => ({SelectedItem});

const mapDispatchToProps = dispatch => ({
    cartAdd: (item) => dispatch(cartAdd.add(item))
});


class ItemPage extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className="container" >
                <nav className="nav-tabs">Кнопка меню</nav>
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src={this.props.SelectedItem.img}/>
                    </div>
                    <div className="col-4">
                        <p>{this.props.SelectedItem.name}</p>
                        <p>{this.props.SelectedItem.price}</p>
                    </div>

                </div>
                <button className="btn col" onClick={()=> this.props.cartAdd(this.props.SelectedItem)}> В корзину </button>
          </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemPage);
