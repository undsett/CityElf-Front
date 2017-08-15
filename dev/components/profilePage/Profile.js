import React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/profilepage.scss';

import ImgMapStatic from "./ImgMapStatic";
import AllUserInformation from "./AllUserInformation";
import EnterAddressModal from "./EnterAddressModal";
import NotAuthProfile from "./NotAuthProfile";
import { getAllForecastsRequest } from '../../actions/userActions';

class Profile extends React.Component {
    render() {
        const { isAuthenticated} = this.props.authorization;
        const { userData } = this.props.authorization;
        const profile = (
            <div className="Site-content">
                <ImgMapStatic />
                <AllUserInformation
                    userData={userData}
                    getAllForecastsRequest={this.props.getAllForecastsRequest}
                />
                <EnterAddressModal/>
            </div>
        );
        return (
            <div className="Site">
                { isAuthenticated ? profile : <NotAuthProfile /> }
            </div>
        );
    }
}

Profile.propTypes = {
    authorization: React.PropTypes.object.isRequired,
    getAllForecastsRequest: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        authorization: state.authorization
    }
}

export default connect(mapStateToProps, { getAllForecastsRequest })(Profile);
