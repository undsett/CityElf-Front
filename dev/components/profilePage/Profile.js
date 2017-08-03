import React from 'react';
import '../../assets/css/profilepage.scss';
import ImgMapStatic from "./ImgMapStatic";
import AllUserInformation from "./AllUserInformation";


class Profile extends React.Component {    
    render() { 
        return (
            <div className="Site">
                <div className="Site-content">
                    <ImgMapStatic />
                    <AllUserInformation/>
                </div>
            </div>
        )
    }
}
export default Profile;