import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Umut Yalçınkaya</h2>
            <img
              src="https://umutyalcinkaya.s3-eu-west-1.amazonaws.com/images/bye.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Principled software engineering, conversational assistance bots, big data cloud operations, software architecture, Postgresql database management, machine learning, end-to-end application delivery for multi environments, advanced analytics, IOT signal processing, data management, supervised learning, kaizen, strategic thinking, business logic.

</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
            <h4>Phone</h4>
            <p><a href="callto://+905340345553">+90 534 034 55 53</a></p>
            <h4>Email</h4>
            <p><a href = "mailto:yalcinkayaumut@outlook.com">yalcinkayaumut@outlook.com</a></p>
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