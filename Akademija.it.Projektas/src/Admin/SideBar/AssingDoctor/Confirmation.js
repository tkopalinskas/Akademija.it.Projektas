import React, { Component } from 'react'



class Confirmation extends Component {



    render() {

            console.log("confirmationComponent", this.props.patient)
        return (
            <div>
                <p>{this.props.patient.firstName + " " + this.props.patient.lastName}</p>
                <p>Priskirti:</p>
                <p>{this.props.doctor.firstName + " " + this.props.doctor.lastName}</p>
            </div>
        );
    }
}

export default Confirmation