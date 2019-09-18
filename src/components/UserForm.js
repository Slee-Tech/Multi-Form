import React from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }

    nextStep() {
        this.setState({
            step: this.state.step + 1
        })
    }

    prevStep() {
        this.setState({
            step: this.state.step - 1
        })
    }

    /* an alternate way of writing handleChange
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
        console.log(this.state.firstName);
    };
    */
    handleChange(input) {
        // this handles changes for each input
        // could also bind a function for each input and call here
        return e => {
            this.setState({
                [input]: e.target.value });
                console.log(this.state.firstName);
        }
    }
    
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch(step) {
            case 1:
                return ( <FormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        /> );
            case 2:
                return  ( <FormPersonalDetails
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                /> );
                
            case 3:
                return ( <Confirm
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    values={values}
                /> );
            case 4:
                return (
                    <Success values={values} />
                );
        }
    }

}

export default UserForm;