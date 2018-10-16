import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';

export default class MainTemplate extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
