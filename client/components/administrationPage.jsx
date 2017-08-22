import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';

import { thunkItemsList } from '../side-effects/thunks';

const mapStateToProps = ({ItemsList}) => ({ItemsList});

const mapDispatchToProps = dispatch => ({
    getItemsList: ()=> dispatch(thunkItemsList()),
});

class AdministrationPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.getItemsList();
    }

    render() {
        console.log(this.props)
        return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Options</td>
                    </tr>
                </thead>
                {
                    this.props.ItemsList.map(item=>{
                        return(
                            <tbody key = {item.id}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.count}</td>
                                <td>
                                    <input type="submit" value='...'
                                        onClick={(e)=>{}}
                                    />
                                    <input type="submit" value='X'
                                        onClick={(e)=>{}}
                                    />
                                </td>
                            </tr>
                            </tbody>
                        )
                    })
                }
            </table>
            <input type="text" />
            <input type="file" />
        </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AdministrationPage);