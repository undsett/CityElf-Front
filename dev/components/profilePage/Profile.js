import React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/profilepage.scss';

import ImgMapStatic from "./ImgMapStatic";
import AllUserInformation from "./AllUserInformation";


class Profile extends React.Component {    
    render() { 
        const { isAuthenticated} = this.props.authorization;
        const profile = (
            <div className="Site-content">               
                <ImgMapStatic />
                <AllUserInformation/>
            </div>                
        );
        const notAuth = (
            <div className="Site-content" style={{paddingTop: '50px'}}>
                Вам необходимо войти или зарегистрироваться для доступа к этой странице
            </div>
        );
        return (
            <div className="Site">                
                { isAuthenticated ? profile : notAuth }                
            </div>
        );
       
    }
}

Profile.propTypes = {
    authorization: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        authorization: state.authorization
    }
}

export default connect(mapStateToProps)(Profile);