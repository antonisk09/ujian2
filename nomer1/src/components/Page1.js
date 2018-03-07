import React from 'react';
import {Link} from 'react-router-dom';

export default class Page1 extends React.Component {
    render = () =>
        <div className="render form-group">
            <label htmlFor="Page1">Nama</label>
            <input type="text" ref="Page1" id="Page1" className="form-control"/>
            <Link to='/welcome' onClick={() => {
                this.props.changeActive(1);
                this.props.gantiNama(this.refs.Page1.value);
            }}  
            className="btn btn-primary">Submit</Link>
        </div>
}