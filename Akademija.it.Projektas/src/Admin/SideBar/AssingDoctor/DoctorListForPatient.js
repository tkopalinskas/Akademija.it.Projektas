import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';
import axios from 'axios'

class ListOfPatietns extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '400px',
            showModal: false,
            disabled: true,
            selected:[],
            familyDoctors: []

        };
    }
    componentWillMount = () => {
        axios.get("http://localhost:8081/admin/familyDoctors")
            .then((responce) => { this.setState({ familyDoctors: responce.data }); console.log(this.state.familyDoctors) })
            .catch((error) => { console.log(error) });
    };
    
    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };


    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
        
        this.props.callBackFromParentDoctor(this.state.familyDoctors[selectedRows], this.state.selected)
    };


    render() {

        var familyDoctorsComponent = this.state.familyDoctors.map((familyDoctor, index) => (
            <TableRow key={index} selected={this.isSelected(index)}>
                <TableRowColumn>{familyDoctor.firstName + " " + familyDoctor.lastName}</TableRowColumn>
                <TableRowColumn>{familyDoctor.userName}</TableRowColumn>
            </TableRow>
        )
        );

        console.log(this.state)
        return (
            <Table
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                selectable={this.state.selectable}
                onRowSelection={this.handleRowSelection}
            >
                <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}
                >
                    <TableRow>
                        <TableHeaderColumn colSpan="2" tooltip="Search" style={{ textAlign: 'left' }}>
                            <div>
                                <Search style={{ color: '#9E9E9E', marginRight: '15', }} />
                                <TextField hintText="Search" underlineShow={false} />
                            </div>
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn>Vardas</TableHeaderColumn>
                        <TableHeaderColumn>Slapyvardis</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                >
                    {familyDoctorsComponent}
                </TableBody>
            </Table>
        );
    }
}
export default ListOfPatietns;