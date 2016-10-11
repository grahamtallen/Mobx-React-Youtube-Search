/**
 * Created by grahamallen on 10/11/16.
 */
/**
 * Created by grahamallen on 6/21/16.
 */
import { observable, computed, autorun } from 'mobx'
import users from '../data/people';
import _ from 'lodash';

var roles = ['Maintenace', 'Managment', 'Accounting', 'Pilot', 'Executive', 'Admin', 'Housekeeping', 'Contractor', 'Butler']
var imgs = ['http://semantic-ui.com/images/avatar2/small/kristy.png',
    'http://semantic-ui.com/images/avatar2/small/matthew.png',
    'http://semantic-ui.com/images/avatar2/small/elyse.png',
    'http://semantic-ui.com/images/avatar2/small/molly.png',
    'http://semantic-ui.com/images/avatar/small/jenny.jpg',
    'http://semantic-ui.com/images/avatar/large/elliot.jpg'
];

function destroyer(arr, filterArr) {
    // Remove all the values
    var passedArray = arr;
    var passedFilter = filterArr;

    var newArray = passedArray.filter(function(x){
        if(passedFilter.indexOf(x) !== -1){
            return false;
        }
        return true;
    });

    return newArray;
}

class UsersStore {
    @observable users = users;

    @computed get userDisplayObjs () {
        return this.users.map((user, index) => {
            return { title: user.name, price: 299.99, id: index, imgSrc: imgs[Math.floor(Math.random()*5)], role: roles[Math.floor(Math.random()*7)]}
        });

    }

    @observable groupedUsers = [];


    increment = () => this.counter++
}

export default new UsersStore();