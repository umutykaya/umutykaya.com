import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import hi from '../../assets/img/hi.png'; // with import

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', height: '75%' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={hi}
	            alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Data Engineer</h1>
              <hr></hr>
              <p> Cloud Computing | Data Lake | Analytics
                <br/>
                Python | Java | Java Script | Shell | Spark | Docker
              </p>
            </div>
          </Cell>
       </Grid>
       
      </div>
    )
  }
}

export default Landing;
