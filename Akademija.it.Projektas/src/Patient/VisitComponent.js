import React from 'react';

var VisitComponent = (props)=>{
    var visit = props.singleVisit;
    return <span>
                Vizito data: {visit.dateOfVisit}<br/>
                Ligos TLK kodas: {visit.illnessTLKCode}<br/>
                Gydytojo vardas, pavardė: {visit.doctorsFullName}<br/>
                Aprašymas: {visit.description}<br/> 
    </span>

}

export default VisitComponent;