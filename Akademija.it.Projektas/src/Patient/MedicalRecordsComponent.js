import React from 'react';
import VisitComponent from './VisitComponent';

var MedicalRecordsComponent =(props)=>{
    var allMedicalRecords = props.allMedicalRecords;
    if (allMedicalRecords.length===0){
        return <div style={{textAlign: 'center'}}>Ligos įrašai</div>
    } else {
        var medicalRecordDrawing = allMedicalRecords.map((visit)=>{
            return <VisitComponent key={visit.date} singleVisit={visit}/>
        })
        return <div>{medicalRecordDrawing}</div>
    }
}

export default MedicalRecordsComponent;