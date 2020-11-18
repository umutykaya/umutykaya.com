import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', height: '75%' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://umutyalcinkaya.s3.eu-west-1.amazonaws.com/images/hi.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4W6RACP2TSKB7THC%2F20201115%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20201115T164802Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=dababbc91bafc3f788066ddbdedaae91dec35e2aa1676880e2d77fec07b52051"
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
