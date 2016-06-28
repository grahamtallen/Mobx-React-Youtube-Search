/**
 * Created by grahamallen on 6/27/16.
 */
/**
 * Created by grahamallen on 6/21/16.
 */
import { observable, autorun } from 'mobx'

import _ from 'lodash'

class FirebaseItems {
    @observable user_history = [
        { id: 1, title: "Paid Bills", startTime: "2016-06-27T10:15", endTime: "2016-06-27T10:45" },
        { id: 2, title: "React + Isotope Research", startTime: "2016-06-27T10:15", endTime: "2016-06-27T10:45"}
    ];

    @observable newItem = { id: 3, title: "Add an Item", startTime: "", endTime: "Current Task" };

    addItem = () => {
        var date = new Date();
        this.newItem.startTime = date.toString();
        var newItem = this.newItem;
        this.user_history.push(newItem);
        var newId = this.newItem.id;
        newId = newId + 1;
        this.newItem = { id: newId, title: "", endTime: "Current Task"};
        this.user_history[this.user_history.length - 1].endTime = date.toString();
    };


}


export default new FirebaseItems();