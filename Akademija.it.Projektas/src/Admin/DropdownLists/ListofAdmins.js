import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from 'material-ui/svg-icons/action/search';
import axios from 'axios'
import InformationModal from './InformationModal'
import FlatButton from 'material-ui/FlatButton/FlatButton';
/* 
const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
}; */

export default class ListofAdmins extends Component {
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
            showCheckboxes: false,
            height: '480px',
            adminGet: [],
            showModal: false,
            disabled: true
        };
    }

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({ height: event.target.value });
    };

    openModal = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    componentWillMount = () => {
        axios.get("http://localhost:8081/admin/allAdmins")
            .then((responce) => { this.setState({ adminGet: responce.data }); console.log(this.state.adminGet) })
            .catch((error) => { console.log(error) });
    };

    render() {
        var adminListComponenet = this.state.adminGet.map((admins, index) => (
            <TableRow key={index} onClick={this.openModal}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{admins.firstName + " " + admins.lastName}</TableRowColumn>
                <TableRowColumn>Username</TableRowColumn>
                <TableRowColumn>Admin</TableRowColumn>
                <TableRowColumn><FlatButton label="Info" primary={true} onClick={this.openModal} /></TableRowColumn>
            </TableRow>
        ))

        if (!this.state.adminGet) {
            return null;
        }

        console.log(this.state.disabled)
        return (    
            <MuiThemeProvider>
                <div>
                    <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        selectable={this.state.selectable}
                        multiSelectable={this.state.multiSelectable}
                    >
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}
                        >
                            <TableRow>

                                <TableHeaderColumn colSpan="5" tooltip="Search" style={{ textAlign: 'left' }}>
                                    <div>
                                        <Search style={{ color: '#9E9E9E', marginRight: '15', }} />
                                        <TextField hintText="Search" underlineShow={false} />
                                    </div>
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Vardas</TableHeaderColumn>
                                <TableHeaderColumn>Slapyvardis</TableHeaderColumn>
                                <TableHeaderColumn>Pareigos?</TableHeaderColumn>
                                <TableHeaderColumn>More info</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                        >
                            {adminListComponenet}
                            {/* <TableRow>
                                <TableRowColumn>1</TableRowColumn>
                                <TableRowColumn>Name</TableRowColumn>
                                <TableRowColumn>Username</TableRowColumn>
                                <TableRowColumn>Admin</TableRowColumn>
                                <TableRowColumn><FlatButton label="Info" primary={true} onClick={this.openModal} /></TableRowColumn>
                            </TableRow> */}
                        </TableBody>
                    </Table>
                    <InformationModal
                        open={this.state.showModal}
                        disabled={this.state.disabled}
                        closeAction={this.openModal} />
                </div>
            </MuiThemeProvider>
        );
    }
}