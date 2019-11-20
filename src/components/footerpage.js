import React, { Component } from 'react';
import { Footer, FooterLinkList, FooterSection } from 'react-mdl';


class FooterPage extends Component {
    render() {
        return (
            <div className="footer">
                <Footer size="mini">
                    <FooterSection type="left" logo="Title">
                        <FooterLinkList>
                            <a href="/">Help</a>
                            <a href="/">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </div>
        )
    }
}

export default FooterPage;
