import React, { Component } from 'react';
import { Grid, Cell, Footer,FooterLinkList,FooterDropDownSection,FooterSection } from 'react-mdl';

class Blog extends Component {
  render() {
    return(
      <div style={{ width: '100%', margin: 'auto', height: '75%' }}>
      <Grid className="landing-grid">
        <Cell col={12}>
       
          <div className="banner-text">
            <h1>Blog Posts</h1>
          </div>
        </Cell>
     </Grid>
     <Footer size="mega">
  <FooterSection type="middle">
      <FooterDropDownSection title="Features">
          <FooterLinkList>
              <a href="/#">About</a>
              <a href="/#">Terms</a>
              <a href="/#">Partners</a>
              <a href="/#">Updates</a>
          </FooterLinkList>
      </FooterDropDownSection>
      <FooterDropDownSection title="Details">
          <FooterLinkList>
              <a href="/#">Specs</a>
              <a href="/#">Tools</a>
              <a href="/#">Resources</a>
          </FooterLinkList>
      </FooterDropDownSection>
      <FooterDropDownSection title="Technology">
          <FooterLinkList>
              <a href="/#">How it works</a>
              <a href="/#">Patterns</a>
              <a href="/#">Usage</a>
              <a href="/#">Products</a>
              <a href="/#">Contracts</a>
          </FooterLinkList>
      </FooterDropDownSection>
      <FooterDropDownSection title="FAQ">
          <FooterLinkList>
              <a href="/#">Questions</a>
              <a href="/#">Answers</a>
              <a href="/#">Contact Us</a>
          </FooterLinkList>
      </FooterDropDownSection>
  </FooterSection>
  <FooterSection type="bottom" logo="Title">
      <FooterLinkList>
          <a href="/#">Privacy & Terms</a>
      </FooterLinkList>
  </FooterSection>
</Footer>
    </div>
    )
  }
}
export default Blog;