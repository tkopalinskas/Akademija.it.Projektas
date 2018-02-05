import React from 'react';

var SinglePrescriptionComponent = (props)=>{
    var prescription = props.singlePrescription;
    return <span>
                Galiojimo data: {prescription.validUntil}<br/>
                Išrašymo data: {prescription.prescriptionDate}<br/>
                Panaudojimų skaičius: {prescription.timesUsed}<br/>
                Veiklioji medžiaga: {prescription.activeIngredient}<br/>
                Aprašymas: {prescription.description}<br/> 
                {/*su panaudojimu sarasu*/}
    </span>

}

export default SinglePrescriptionComponent;