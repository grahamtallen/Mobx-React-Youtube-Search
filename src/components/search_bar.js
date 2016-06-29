/**
 * Created by grahamallen on 6/20/16.
 */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import CsStore from '../stores/CsStore'


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
            GithubStore.search(GithubStore.searchTerm)
        }

    }

    render() {
        return (
            <div className="row">
                <div className="inputDiv col-md-4">
                    <div className="dropdown" align="right">

                        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-sort"></i>
                                <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li className="btn">Type</li>
                            <li className="btn">Location</li>
                            <li className="btn">Status</li>
                            <li className="btn">Price</li>
                        </ul>
                        <button className="btn btn-secondary reverseButton" onClick={CsStore.reverseOrder}><i className="fa fa-sort-amount-asc"></i></button>

                    </div>
                </div>
                <div className="inputDiv input-group col-md-6">
                    <span className="input-group-addon" id="basic-addon1"><i className="fa fa-filter"></i></span>
                    <input className="form-control"
                           placeholder="Filter by Title, Inventory #, Description..."
                           value={ CsStore.searchTerm }
                           onChange={event => CsStore.searchTerm = event.target.value}
                           onKeyPress={this.handleKeyPress}
                    />

                </div>
                <div className="inputDiv col-md-2">
                </div>
            </div>
        );
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            CsStore.search(CsStore.searchTerm)
        }

    }
};

export default SearchBar