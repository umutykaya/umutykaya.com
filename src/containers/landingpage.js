import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', height: '75%' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://umutyalcinkaya.s3.eu-west-1.amazonaws.com/images/hi.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4W6RACP2TQUS6ZYK/20201210/eu-west-1/s3/aws4_request&X-Amz-Date=20201210T061959Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b822379e7fc8c6b5e166714aa1214608ab24da652bb59104067a6e8931753942"
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
