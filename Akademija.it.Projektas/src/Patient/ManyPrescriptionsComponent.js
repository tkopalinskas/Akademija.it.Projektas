import React from 'react';
import SinglePrescriptionComponent from './SinglePrescriptionComponent';

var ManyPrescriptionsComponent =(props)=>{
    var allPrescriptions = props.allPrescriptions;
    if (allPrescriptions.length===0){
        return <div style={{textAlign: 'center'}}>Čia bus visi paciento receptai</div>
    } else {
        var prescriptionDrawing = allPrescriptions.map((prescription)=>{
            return <SinglePrescriptionComponent key={prescription.validUntil} singlePrescription={prescription}/>
        })
        return <div>{prescriptionDrawing}</div>
    }
}

export default ManyPrescriptionsComponent;