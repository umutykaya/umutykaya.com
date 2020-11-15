import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import Footer from '../components/footerpage'

class Contact extends Component {
  render() {
    return (
      <div>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Umut Yalçınkaya</h2>
            <img
              src="https://umutyalcinkaya.s3.eu-west-1.amazonaws.com/images/bye.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4W6RACP2TSKB7THC%2F20201115%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20201115T164733Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=842a58f2eed93e85928d291685abbda273f2b7b331c9e69d9cb9246ba4323cfe"
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
       
      </div>
    )
  }
}

export default Contact;