import React from 'react';
import './App.css';


class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        }
    }
    handleSubmit = (e) => {
        let checkState = this.state
        console.log(checkState)
        fetch('http://localhost:8000/api/post/', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(checkState) })
            .then((res) => res.json())
            .then(data => {
            })
    }
    handleChange = (e) => {
        this.setState(this.setState({ [e.target.name]: e.target.value }));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    roast or boasts: <select onChange={this.handleChange}><option name="roast_or_boast" value={this.state.roast_or_boast}>Roast</option><option name="roast_or_boast" value={this.state.roast_or_boast}>Boast</option></select>
    description:<textarea type="text" name="description" onChange={this.handleChange} value={this.state.description}></textarea>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NewPost;