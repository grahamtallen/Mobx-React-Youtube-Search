/**
 * Created by grahamallen on 6/21/16.
 */

import React, {Component} from 'react'
import CounterStore from '../stores/CounterStore'
import { observer } from 'mobx-react'

@observer
class Counter extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <p>{ CounterStore.counter }</p>
                <button onClick={ CounterStore.increment }>Update Counter</button>
            </div>
        )
    }

}

export default Counter



/*export default observer(()=> <div>

    {/* get State from Mobx store

     CounterStore.iterate()


    <p>{ hasCounts && "need count" }</p>
    <button onClick={CounterStore.iterate}>Update Counter</button>
</div>)*/