/**
 * Created by grahamallen on 6/20/16.
 */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import CsStore from '../stores/CsStore'
import { DropdownButton, MenuItem, InputGroup, FormControl, Button } from 'react-bootstrap';


@observer
class SearchBar extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (!CsStore.login.loggedIn) return <div></div>
        return (
            <div className="row">
                <div className="inputDiv col-md-6">
                    <InputGroup>
                        <InputGroup.Addon><i className="fa fa-filter"></i></InputGroup.Addon>
                        <FormControl
                            type="text"
                            className="filterSearch"
                            placeholder="Filter By Object Title"
                            value={ CsStore.filterTerm }
                            onChange={event => CsStore.filterTerm = event.target.value}
                            onKeyPress={this.handleKeyPress}
                        />
                    </InputGroup>
                </div>
                <div className="inputDiv col-md-6">
                    <Button
                        className="btn btn-secondary reverseButton"
                        onClick={CsStore.reverseOrder}
                    >
                        <i className="fa fa-sort-amount-asc"></i>
                    </Button>
                    <DropdownButton bsStyle={"default"} title={"Sort"} key={1}>
                        <MenuItem onClick={() => {CsStore.displayValue = "title"; CsStore.sortAlphaBeta()}} eventKey="1">Title</MenuItem>
                        <MenuItem onClick={() => {CsStore.displayValue = "objecttype"; CsStore.sortByKey('objecttype')}} eventKey="3">Type</MenuItem>
                        <MenuItem onClick={() => {CsStore.displayValue = "fulllocationname"; CsStore.sortByKey('fulllocationname')}} eventKey="2">Location</MenuItem>
                        <MenuItem onClick={() => {CsStore.displayValue = "objectstatus"; CsStore.sortByKey('objectstatus')}} eventKey="3">Status</MenuItem>
                    </DropdownButton>
                </div>
            </div>
        );
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            CsStore.delayedFilterTerm()
        }
    }
};

export default SearchBar