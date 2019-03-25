import React, { Component } from 'react'

export default class FilterForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            min_seating: this.props.min_seating,
            max_seating: this.props.max_seating
        };
    
      }

    onChange(field) {
        return (e) => {
          this.setState({[field] : e.target.value})
          this.props.newUpdateFilter([field], e.target.value);
        }

    }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange('min_seating')} />
        <input type="text" onChange={this.onChange('max_seating')} />
      </div>
    )
  }
}
