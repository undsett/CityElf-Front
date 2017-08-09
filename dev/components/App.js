import React from 'react';
import Footer from './Footer';
import NavigationBar from "./NavigationBar";

class App extends React.Component {    
    render() { 
        return (
        	<div>
        		<NavigationBar />
        		{this.props.children}
        		<Footer/>
        	</div>
        )  
    }
}

export default App;

