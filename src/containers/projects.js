import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Footer from '../components/footerpage'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div style={{ width: '100%', margin: 'auto', height: '75%', padding: '0' }}>
          <Grid>
            <Cell col={4}>
              {/* Project 1 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>

              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell>

              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #3</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={4}>
              {/* Project 1 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell col={4}>

              {/* Project 2 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
            <Cell>

              {/* Project 3 */}
              <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #3</CardTitle>
                <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div><h1>This is Python</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Python</Tab>
          <Tab>Java</Tab>
          <Tab>AWS</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      <Footer></Footer>

      </div>
    )
  }
}

export default Projects;
