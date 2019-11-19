import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from '../components/footerpage'

class Contact extends Component {
  render() {
    return (
      <div>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Umut Yalçınkaya</h2>
            <img
              src="https://umutyalcinkaya.s3-eu-west-1.amazonaws.com/images/bye.png"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              I'm really curios person about technology and innovation.
              Please feel free to chat with me about ideas.
              I believe that innovation valuable whether it has been shared.
            </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <h4>Phone</h4>
              <p><a href="callto://+905340345553">+90 534 034 55 53</a></p>
              <h4>Email</h4>
              <p><a href="mailto:yalcinkayaumut@outlook.com">yalcinkayaumut@outlook.com</a></p>
              <h4>Skype</h4>
              <p><a href="skype:+905340345553?call">live:yalcinkayaumut</a></p>
            </div>
          </Cell>
        </Grid>
        <Footer></Footer>
      </div>
    )
  }
}

export default Contact;