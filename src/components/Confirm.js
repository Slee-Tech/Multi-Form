import React from 'react';
import Button from '@material-ui/core/Button';

class Confirm extends React.Component {
    constructor(props) {
        super(props);
        this.continue = this.continue.bind(this);
        this.back = this.back.bind(this);
    }

    continue(e) {
        e.preventDefault();
        this.props.nextStep();
    }

    back(e) {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props;

        return (
            <div>
                <div className={"row justify-content-center"}>
                    <div className={"col-12  text-center p-3"}> {/*#f2e3f1*/}
                        <h5>CONFIRM DETAILS</h5>
                    </div>
                </div>
               
                <div className={"row justify-content-center m-2"}>
                    <h5>First Name</h5>
                </div>
                <div className={"row justify-content-center m-2"}>
                    <p className="text-muted">{values.firstName}</p>
                </div>

                <div className={"row justify-content-center m-2"}>
                    <h5>Last Name</h5>
                </div>
                <div className={"row justify-content-center m-2"}>
                    <p className="text-muted">{values.lastName}</p>
                </div>

                <div className={"row justify-content-center m-2"}>
                    <h5>Email</h5>
                </div>
                <div className={"row justify-content-center m-2"}>
                    <p className="text-muted">{values.email}</p>
                </div>

                <div className={"row justify-content-center m-2"}>
                    <h5>Occupation</h5>
                </div>
                <div className={"row justify-content-center m-2"}>
                    <p className="text-muted">{values.occupation}</p>
                </div>

                <div className={"row justify-content-center m-2"}>
                    <h5>City</h5>
                </div>
                <div className={"row justify-content-center m-2"}>
                    <p className="text-muted">{values.city}</p>
                </div>

                <div className={"row justify-content-center m-2"}>
                    <h5>Bio</h5>
                </div>
                <div className={"row justify-content-center m-2"}>
                    <p className="text-muted">{values.bio}</p>
                </div>

                <div className={"row justify-content-center mt-4"}>
                    <Button  className={"mr-1"} variant="contained" size="large" color="secondary" onClick={this.back}>
                        Back
                    </Button>
            
                    <Button variant="contained" size="large" color="primary" onClick={this.continue}>
                        Continue
                    </Button>
                </div>
            </div>
        );
    }

}

export default Confirm;