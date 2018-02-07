import React, {Component} from 'react';
//import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
//import ManyPrescriptionsComponent from './ManyPrescriptionsComponent';

const styles ={
  marginLeft: 0,
  marginRight: 10
  
}

const prescriptions=[];

class PrescriptionsTable extends Component {
    constructor() {
      super();
        this.state = {
          fixedHeader: true,
          showRowHover: true,
          selectable: true,
          multiSelectable: false,
          enableSelectAll: false,
          deselectOnClickaway: true,
          height: '300px',

          prescriptions: [{
            validUntil: 'dsfgg',
            prescriptionDate: 'sad',
            timesUsed: 'asg',
            activeIngredient: 'fffg',
            description: 'afsgd',
          }]
      }
  }

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });

      /* axios
            .get("http://localhost:8081/patient/:id/prescriptions")
            .then((response) => {
                console.log(response);
                this.setState({prescriptions: response.data});
            })
            .catch((error) => {
                console.log(error);
            }); */
    }

    render() {
      return (
        <MuiThemeProvider>
          <Table
            height={this.state.height}
            style={styles}
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
                <TableHeaderColumn colSpan="3" tooltip="Receptai" style={{textAlign: 'center'}}>
                  Receptai
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Galiojimo data">Galiojimo data</TableHeaderColumn>
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Išrašymo data">Išrašymo data</TableHeaderColumn>
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Recepto panaudojimų skaičius">Recepto panaudojimų skaičius</TableHeaderColumn>
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }}
                  tooltip="Veiklioji medžiaga">Veiklioji medžiaga</TableHeaderColumn>
                <TableHeaderColumn 
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word"
                  }} 
                  tooltip="Aprašymas">Aprašymas</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
            >
              {prescriptions.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.validUntil}</TableRowColumn>
                <TableRowColumn>{row.prescriptionDate}</TableRowColumn>
                <TableRowColumn>{row.timesUsed}</TableRowColumn>
                <TableRowColumn>{row.activeIngredient}</TableRowColumn>
                <TableRowColumn>{row.description}</TableRowColumn>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </MuiThemeProvider>
      );
    }
  };

export default PrescriptionsTable;