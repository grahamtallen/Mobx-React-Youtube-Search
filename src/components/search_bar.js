/**
 * Created by grahamallen on 6/20/16.
 */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import GithubStore from '../stores/GithubStore'


@observer
class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input
                    className="form-control"
                    placeholder="Search Github"
                    value={ GithubStore.searchTerm }
                    onChange={event => GithubStore.searchTerm = event.target.value}
                    onKeyPress={this.handleKeyPress}
                />
                <img className="logo" src="http://i.imgur.com/OCHWcon.png" width="40px" height="40px"/>
            </div>
        );
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            FirebaseStore.
        }

    }
};

export default SearchBar