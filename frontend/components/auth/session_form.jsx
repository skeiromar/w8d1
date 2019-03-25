import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class SessionForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        const whatev = this.props.processForm;
        // debugger
        whatev.login ? whatev.login(user).then(() => this.props.history.push('/')) : whatev.signup(user).then(() => this.props.history.push('/'));
    }

    onChange(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            });
        };
    }

    render() {
        return this.props.formType === "login" ? (
            <>
            <Link to="/signup"></Link>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Username<input type="text" onChange={this.onChange("username")} name="" id=""/></label>
                {/* <label htmlFor="">Email<input type="text" onChange={this.onChange("email")} name="" id=""/></label> */}
                <label htmlFor="">Password<input type="password" onChange={this.onChange("password")} name="" id=""/></label>
                <input type="submit" value="sign in"/>
            </form>
            </>
        ) : (
            <>  
            <Link to="/signup"></Link>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Username<input type="text" onChange={this.onChange("username")} name="" id="" /></label>
                <label htmlFor="">Email<input type="text" onChange={this.onChange("email")} name="" id=""/></label>
                <label htmlFor="">Password<input type="password" onChange={this.onChange("password")} name="" id="" /></label>
                <input type="submit" value="sign in" />
            </form>
            </>
        )
    }
}