import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideBarMain from './SideBar/SideBarMain';
import AdminRouting from './AdminRouting'
import TopBar from './SideBar/TopBar'
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


const rowStyle = {
    margin: 0,
}

class Admin extends React.Component {



    render() {
        return (           
            <MuiThemeProvider>
                <div>
                    <TopBar />
                    <div>
                    <Row style={rowStyle}>
                        <Col xs="3" md="3">
                            <SideBarMain />
                        </Col>
                        <Col xs="9" md="9">
                            <AdminRouting />
                        </Col>
                    </Row>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default Admin;