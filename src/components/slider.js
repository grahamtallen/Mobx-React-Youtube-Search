/**
 * Created by grahamallen on 6/27/16.
 */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Slider from 'react-rangeslider'



@observer
class SliderComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Slider value={19} />
            </div>
        )
    }
}

export default SliderComponent