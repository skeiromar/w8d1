import React, { Component } from 'react'

export default class BenchForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            description: '',
            seating: 0,
            lat: this.props.lat,
            lng: this.props.lng
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(e) {
        e.preventDefault();
        const newState = this.state;
        this.props.createBench(newState).then(() => 
            (this.props.history.push({
                pathname: "/",
            })
        ));
      }
    onChange(field) {
        return (e) => {
          this.setState({[field] : e.target.value})
        }
      }

    componentDidMount() {
        console.log(this.state);
    }
    
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <form onSubmit={this.handleSubmit}>
        description:
            <input type="text" 
            onChange={this.onChange('description')}
            value={this.state.description} />
        number of seats:
            <input type="text" 
            onChange={this.onChange('seating')}
            value={this.state.seating} />
        
        <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
