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
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
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
            <p>+90 534 034 55 53</p>
            <h4>Email</h4>
            <p>yalcinkayaumut@outlook.com</p>
            <h4>Skype</h4>
            <p>live:yalcinkayaumut</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;