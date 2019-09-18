import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormUserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.continue = this.continue.bind(this);
    }

    continue(e) {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values } = this.props;

        return (
            <div>
                <div className={"row justify-content-center"}>
                    <div className={"col-12  text-center p-3"}> {/*#f2e3f1*/}
                        <h5>ENTER USER DETAILS</h5>
                    </div>
                </div>
               

                <div className={"row justify-content-center m-2"}>
                    <TextField 
                        helperText="Enter First Name"
                        onChange={this.props.handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                </div>

                <div className={"row justify-content-center m-2"}>
                    <TextField 
                        helperText="Enter Last Name"
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                </div>

                <div className={"row justify-content-center m-2"}>
                    <TextField 
                        helperText="Enter Email Address"
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                    />
                </div>

                <div className={"row justify-content-center mt-4"}>
                    <Button variant="contained" size="large" color="primary" onClick={this.continue}>
                        Continue
                    </Button>
                </div>
            </div>
        );
    }

}

export default FormUserDetails;