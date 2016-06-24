/**
 * Created by grahamallen on 6/20/16.
 */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import VideoStore from '../stores/VideoStore'


@observer
class SearchBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <input
                value={ VideoStore.searchTerm }
                onChange={event => VideoStore.searchTerm = event.target.value}
            />
            </div>
        );
    }
};

export default SearchBar