import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from '../components/footerpage'

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
   <Footer></Footer>
    </div>
    )
  }
}
export default Blog;