import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export class LoginRouter extends React.Component {
  constructor(props) {
    super(props);
    // should be changed later
    this.state = {
      isAuthed: true,
      hasAuthed: true,
    };
  }

  checkAuth = (data) => {
    console.log(data);
    if (data.status >= 0) {
      this.setState({ isAuthed: true, hasAuthed: true });
    } else {
      localStorage.removeItem('user');
      this.setState({ isAuthed: false, hasAuthed: true });
    }
  };

  componentDidMount() {
    // userService.checkSession(this.checkAuth);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { component: Component, path = '/', exact = false, strict = false } = this.props;

    console.log(this.state.isAuthed);

    if (!this.state.hasAuthed) {
      return null;
    }

    return (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        render={(props) =>
          this.state.isAuthed ? (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
}

export default LoginRouter;
