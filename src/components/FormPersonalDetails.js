import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormPersonalDetails extends React.Component {
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
                        <h5>ENTER PERSONAL DETAILS</h5>
                    </div>
                </div>
               
                <div className={"row justify-content-center m-2"}>
                    <TextField 
                        helperText="Enter Occupation"
                        onChange={this.props.handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                </div>

                <div className={"row justify-content-center m-2"}>
                    <TextField 
                        helperText="Enter City"
                        onChange={this.props.handleChange('city')}
                        defaultValue={values.city}
                    />
                </div>

                <div className={"row justify-content-center m-2"}>
                    <TextField 
                        helperText="Enter Bio"
                        onChange={this.props.handleChange('bio')}
                        defaultValue={values.bio}
                    />
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

export default FormPersonalDetails;