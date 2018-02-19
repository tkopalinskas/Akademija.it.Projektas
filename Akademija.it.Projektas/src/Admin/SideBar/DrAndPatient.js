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
import Row from 'muicss/lib/react/row';
import {
    Step,
    Stepper,
    StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';




class DoctorAssignmentToPatient extends Component {
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
            stepIndex: 0,

        };
    }

    handleNext = () => {
        const { stepIndex } = this.state;
        if (stepIndex < 2) {
            this.setState({ stepIndex: stepIndex + 1 });
        }
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'Pasirinkite Pacientą';
            case 1:
                return 'Pasirinkite Daktarą';
            case 2:
                return 'Patvirtinkite';
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    render() {
        const { stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };

        return (
            <MuiThemeProvider>
                <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }} >

                    <Stepper linear={false} activeStep={stepIndex}>
                        <Step>
                            <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                                Select campaign settings
            </StepButton>
                        </Step>
                        <Step>
                            <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                                Create an ad group
            </StepButton>
                        </Step>
                        <Step>
                            <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                                Create an ad
            </StepButton>
                        </Step>
                    </Stepper>
                    <div style={contentStyle}>
                        <p>{this.getStepContent(stepIndex)}</p>
                        <div style={{ marginTop: 12 }}>
                            <FlatButton
                                label="Back"
                                disabled={stepIndex === 0}
                                onClick={this.handlePrev}
                                style={{ marginRight: 12 }}
                            />
                            <RaisedButton
                                label="Next"
                                disabled={stepIndex === 2}
                                primary={true}
                                onClick={this.handleNext}
                            />
                            {/* <Row>
                        
                        <Table
                            height={this.state.height}
                            fixedHeader={this.state.fixedHeader}
                            selectable={this.state.selectable}
                            style={{
                                width: "40%",
                                float: 'right'
                            }}
                        >
                            <TableHeader
                                displaySelectAll={this.state.showCheckboxes}
                                adjustForCheckbox={this.state.showCheckboxes}
                                enableSelectAll={this.state.enableSelectAll}
                            >
                                <TableRow>
                                    <TableHeaderColumn>
                                        <h3> Daktarai </h3>
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
                    </Row> */}
                        </div>
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}
export default DoctorAssignmentToPatient;