import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({});


class ItemPage extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className="container" >
                Item Component
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemPage);
