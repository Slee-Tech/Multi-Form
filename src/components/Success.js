import React from 'react';

function Success(props) {
    return (
        <div>
            <div className={"row justify-content-center"}>
                <div className={"col-12  text-center p-3"}> {/*#f2e3f1*/}
                    <h5>FORM SUBMISSION SUCCESSFUL</h5>
                </div>
                <div className={"alert alert-success"} role="alert">
                    Thank you for filling out the form, <span className={"font-weight-bold text-uppercase"}>{props.values.firstName}</span>. Your submission was successful, you will be
                    contacted if you are selected.
                </div>
            </div>
        </div>
    );
}

export default Success;