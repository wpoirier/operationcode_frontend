import React from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends React.Component {
  static responseFacebook(response) {
    // eslint-disable-next-line
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="711044949101273"
        autoLoad="true"
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    );
  }
}

export default Facebook;
