import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = dispatch => ({
});

class AdministrationPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div>
            Страница администрирования
        </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AdministrationPage);