import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
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
            height: '480px',
            showModal: false,
            disabled: true,

        };
    }

    render() {
        return (
            <Table
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                selectable={this.state.selectable}
                style={{
                    width: "40%",
                    float: 'left'
                }}
            >
                <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}
                >
                    <TableRow>
                        <TableHeaderColumn>
                            <h3> Pacientai be Daktarų</h3>
                        </TableHeaderColumn>
                    </TableRow>
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
                </TableBody>
            </Table>
        );
    }
}
export default ListOfPatietns;