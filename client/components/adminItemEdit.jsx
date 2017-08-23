import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { thunkSelectedItem } from '../side-effects/thunks';
import { selectItem } from "../actions/actions";
import {SelectedItem} from "../reducers/reducer";

const mapStateToProps = ({SelectedItem,ItemsList},params) => ({
    SelectedItem,
    ItemsList,
    itemID: params.match.params.id
});

const mapDispatchToProps = dispatch => ({
    thunkSelectedItem: (id)=> dispatch(thunkSelectedItem(id))
});

class AdminItemEdit extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.thunkSelectedItem(this.props.itemID);
    }

    render(){
        console.log(this.props);
        return(
            <div>{this.props.SelectedItem.name}</div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminItemEdit);
