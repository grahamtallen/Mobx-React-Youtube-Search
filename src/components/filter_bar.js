/**
 * Created by grahamallen on 6/28/16.
 */

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import GithubStore from '../stores/GithubStore'


@observer
class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }
    render() {
        return (
            <div className="col-md-2">
                <input
                    className="form-control"
                    placeholder="Filter Repos"
                    value={ GithubStore.filterTerm }
                    onChange={event => GithubStore.filterTerm = event.target.value}
                    onKeyPress={this.handleKeyPress}
                />
            </div>
        );
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            GithubStore.delayedFilterTerm();
        }

    }
};

export default FilterBar