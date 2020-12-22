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
              src="https://umutyalcinkaya.s3.eu-west-1.amazonaws.com/images/bye.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA4W6RACP264KRCIO6%2F20201222%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20201222T201117Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCWV1LXdlc3QtMSJGMEQCIAG5HAGoMKFhplsHsOOayPVhBpAzsoMR5aV5rHVHVuRdAiBveQzrgDew%2B2A7Mer7puA0zpyl3v36gP%2BJctnKi1jzJyqnAwit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDg3MzkyNzI4MzcwMSIMFArctb5iBapuZcJEKvsCRlQjLTceUnirgbWr5TaqJut%2Fq8RFkvGBzrNzTISXefbcbkS%2FEZkLHqzl20C43%2Fc2spHUsO2R1XKMqptX8pAjP2ObHEapjhi%2BxjuAdrwVAxxYGM4tDkghjyjDphOFvi6T%2FqhPMxm6WYEZ7wjGua3alVQrBHdKqRBd1CxCX6VCV9LjTZA0qOeroz%2FVSay2jFvLPCP2shb3epzyXbMgaZq4H5%2F3NcTmpikUHqnr7KtsxlhJ82alL6Sy4GpMvc4s1Hj51psp06tXAY3Kq%2Bsgtc1k8cBkqagoKBywPTtKI4Xjv%2BBDQNl9Dg0FWdoU3USp87VEeouuWOEgwQAPROGa3mckUnVXDsdkCuUS3bxQ6Hhgm9wfJvP%2FyQiprfARp14wk%2BJC%2F8nHrMAr77bJ7a2PxhIGi7rZeR6g5U4ULLGIu3sZ7ZyHLuzqXxC%2FKJx9OG2wOEY%2FW9vdSNFgrv0%2BuOVQAvGAx%2BSTZmewF3UfFIKRt24GllS5iJLgCzB3GqjiXDCppIn%2FBTq0Asm4gQ%2Fb%2BhruXxJRH973Ui46s%2F%2Fo80il21ej7wgJpvWAc3dCm9%2FsQmNi8GFsFE2e8LQQs2OkJQ7FadpVfaEhrAWJcOpvX4yFWaUeOXuF9tTt%2F45q9mLg%2FotZeuWWbbUjzK31IiUCeCOWcMTHPfCXxA0xZ9RPqjhK4UIdoA4H03r6ns1tNpaf4oDO4N1Vb5M3Lvpj0iFIOgYRzJguffiKgD7tXvxKVfQuVXA6uljAddRWt54ZhggR0wHodxjmKqNVwDXo5756si7nNZaeSmwGPwfz9GO8PSyOHr6N5dbEv1Cn6c2Fe07W6HMwY1WYtAHvMef3kSs%2B2veFqaLquG%2FGOBFwflOrxAnXEDZIsQAq9338weiWq5Y80vVVPjXyaTPnpqFHP6enTmD%2FTgECsOLFkoMhWjXn&X-Amz-Signature=bb68b8780887dc1cf1a8e5a7ff7c0ce159d192371a44784d64869e1bf4978c08"
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
