import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Search extends Component {

    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: propTypes.func.isRequired,
        clearUsers: propTypes.func.isRequired,
        showClear: propTypes.bool.isRequired,
        setAlert: propTypes.func.isRequired,
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('type something to search', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }

    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users.."
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />
                </form>
                {this.props.showClear && <button className="btn btn-light btn-block"
                    onClick={this.props.clearUsers}>Clear</button>}

            </div>
        )
    }
}

export default Search
