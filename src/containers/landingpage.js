import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', height: '75%' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://umutyalcinkaya.s3.eu-west-1.amazonaws.com/images/hi.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4W6RACP2WQI4FK6E%2F20201222%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20201222T200645Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCWV1LXdlc3QtMSJHMEUCICRWhJ6Wk%2FpjrdaVNMTXrnGYHvENlbNzDF%2BIXbHWOHghAiEAg%2BiFvtZA%2FBz3Qoa0rv7KlQE6R88nNAoUCHRo8SaWQjUqpwMIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw4NzM5MjcyODM3MDEiDMFjtlonQgA2w4BM9Sr7AoZJ7amr%2Fh4yCnbMT8xrP%2FQVPgEHII70cNDwhEQVr8pFaVj6hvHBTdSBkVdLXrSNSCUcC7OXeG9K%2FBfGaGUVi3goXfUJBuQkeiuLu6%2BVkDbhhmFOjN6aYr%2FpjJdS%2BKYYsIyGf69JO%2Bbfv8tKANLZSYVSeo%2BIHc3BTmEggURePMG67y9BIflOKZ%2FB%2BSKIhVXUJZ2gmJhVaxwTBh%2FhCCEHur5cqQYfSC%2F2zo%2BAxK42WggfVIUaFv38Duz%2BAz2m6TqZIF5Lag7fmEJ6szW3Psr%2F%2FZU4GSLseQ95cQ%2F1AgIgZY4FvqMIOi5U%2BbyRmHIURH7XirtF2MeiFmqcpLe1YeiCF2tEGuBvKzaPm%2F7H8dqcKqFPzrzteAJTEDWQGfVhtLmUEctTGWC%2BTX3c1BxmarihWpbtjgcHqOkvRpcxraK3PeTSysSbocl%2Bh3QUKwciT6VFWvpPuwzVfp1YHMEM5p0iokO9eH0mpOycxre0QZhnlnC8p%2FUi8ovWbG1hi9owhaGJ%2FwU6swKjF8VqDHwvU5FhXwAcq7uVxrRL4tbk519TyGqtgKuN6bbOIryXmonc8VYQxJUqrsSbNAnEmQ46nta9IPeP8eSvOvL3nyp6CekwuKAS5RoNAmFiPnOBS39DUjiGtvg8I5QMm4Ci3D%2FVZTXab1y%2FHgYj0HNcoc%2BOWENZUZYXz8l1il%2BgpDlnUzT3VgSyRjMlNW727mRpcZ4WBTx5%2F2MiNYkHFWcD3kmKFgqc2aYCp6UniI7yGjRbzE%2BVb%2FdfXSoAF5W%2FDmrwt3m1Sv7dLV%2F3G%2ByjH5k3IO2g0Tp9XudQ0Jpualxu2SLKeqsfwb9vkuyi7VOAy3T66gtH8uF27nO4m4QkaypCwDSuUb90Fc1drKvyU23TO8WoxF1Xd9Nrb%2BwzE%2Ba2dH8YTsA72NpL%2BUDWkvObPkrT&X-Amz-Signature=a5bbb7427f3f1421e4e7a65293a35dec03723282057ead122e8936b46e0e2fc3"
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
