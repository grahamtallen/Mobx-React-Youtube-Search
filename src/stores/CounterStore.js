/**
 * Created by grahamallen on 6/21/16.
 */
import { observable } from 'mobx'

class CounterStore {
    @observable counter = 0;


    increment = () => this.counter++
}

var aCounterStore = new CounterStore();

export default aCounterStore;