import React, { Component } from 'react'

export class Form extends Component {

    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {

        const {name, value, type, checked} = event.target        
        type === "checkbox" 
        ? this.setState({[name]: checked}) 
        : this.setState({            
            // eg: [firstName]: "value"
            // [gender]: "get value from input named 'gender'"
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <input type="text" 
                name="firstName" 
                placeholder="First Name" 
                onChange={this.handleChange}
                value={this.state.firstName}
                />
                <br />

                <input type="text" 
                name="lastName" 
                placeholder="Last Name" 
                onChange={this.handleChange}
                value={this.state.lastName}
                />

                <br />
                <textarea value={"Some default value"}></textarea>
                <input 
                type="checkbox"
                name="isFriendly"
                checked={this.state.isFriendly}
                onChange={this.handleChange}
                />

                <br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> male
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> female
                </label>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender}</h2>
            </form>
        )
    }
}

export default Form
