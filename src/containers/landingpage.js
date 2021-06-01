import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import hello from './../img/hi.png';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', height: '75%' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={hello}
	            alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Cloud Engineer</h1>
              <hr></hr>
              <p> Cloud Computing | Data Lake | Analytics
                <br/>
                Python | Java | Java Script | Shell | Spark | Docker
              </p>
            </div>
          </Cell>
       </Grid>
       {/* <Footer size="mega" className="footer-list">
          <FooterSection type="bottom">
            <FooterLinkList>
            </FooterLinkList>
          </FooterSection>
          <FooterSection type="bottom">
            <FooterLinkList>
            </FooterLinkList>
          </FooterSection>
          <FooterSection type="bottom" >
            <FooterLinkList className="footer-part">
            © {new Date().getFullYear()} Built with ♥️ by {` `}<a href="https://umutykaya.com/">umutyalcinkaya</a>
            </FooterLinkList>
          </FooterSection>
        </Footer> */}
       
      </div>
    )
  }
}

export default Landing;
