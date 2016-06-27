/**
 * Created by grahamallen on 6/27/16.
 */
/**
 * Created by grahamallen on 6/20/16.
 */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import FirebaseItems from '../stores/Firebase'


@observer
class NewTask extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input
                    className="form-control"
                    placeholder="Search Github"
                    value={ FirebaseItems.newItem.title }
                    onChange={event => FirebaseItems.newItem.title = event.target.value}
                    onKeyPress={this.handleKeyPress}
                />
            </div>
        );
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            FirebaseItems.addItem
        }

    }
};

export default NewTask