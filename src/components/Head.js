import React, {Component} from 'react';
import { connect } from 'react-redux';


class Head extends Component{
    render(){
        return(
        <div class="header">
            <a href="#default" class="logo">CompanyLogo</a>
            <div class="header-right">
            <a class="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            </div>
        </div>) 
    }
}


const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Head);