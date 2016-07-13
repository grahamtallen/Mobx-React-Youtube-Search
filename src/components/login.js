/**
 * Created by grahamallen on 7/12/16.
 */
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import CsStore from '../stores/CsStore'
import { FormGroup, ControlLabel, InputGroup, FormControl, Button } from 'react-bootstrap';


@observer
class Login extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (CsStore.login.loggedIn) return <div></div>;
            return (
            <div className="row">
                <div className="col-md-3"><img className="img-rounded center-block" src="http://www.way2b1.com/assets/images/logo-medium.png" /> </div>
                <div className="col-md-6 login">
                <form>
                    <FormGroup controlId="formControlsText">
                        <FormControl type="text"
                                     placeholder="Username"
                                     onChange={event => CsStore.login.username = event.target.value}
                                     onKeyPress={this.handleKeyPress}
                        />
                    </FormGroup>
                    <FormGroup controlId="formControlsEmail">
                        <FormControl
                            type="email"
                            placeholder="Password"
                            value={CsStore.login.password}
                            onChange={event => CsStore.login.password = event.target.value}
                            onKeyPress={this.handleKeyPress}
                        />
                    </FormGroup>
                </form>
                </div>
                <div className="col-md-3"><img className="img-rounded center-block" src="http://www.collectorsystems.com/wp-content/uploads/2016/02/xxCS_Logo_PublicRetina.png" /> </div>
            </div>
        );
    }

    handleKeyPress(target) {
        if(target.charCode==13){
            console.log(CsStore.login.username + CsStore.login.password)
            CsStore.loggedIn = true;
            CsStore.indexMounted();
        }
    }
};

export default Login