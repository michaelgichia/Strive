/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import { CardMedia, CardTitle } from "material-ui/Card";

import "!!style-loader!css-loader!./homepage.css";

export default class HomePage extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <Modal
            open={open}
            handleClose={this.handleClose}
            handleOpen={this.handleOpen}
          />
          <div className="col-12 col-md-6 padding-zero">
            <div className="home-btn">
              <CardMedia
                overlay={
                  <CardTitle
                    title="Overlay title"
                    subtitle="Overlay subtitle"
                  />
                }
              />
              <div className="btn-wrapper">
                <RaisedButton
                  label="Get Started Free"
                  onTouchTap={this.handleOpen}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Modal = ({ open, handleClose }) => {
  const actions = [
    <FlatButton label="Cancel" primary={true} onTouchTap={handleClose} />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={handleClose}
    />
  ];
  return (
    <div>
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={handleClose}
      >
        The actions in this window were passed in as an array of React objects.
        <TextField hintText="Hint Text" />
      </Dialog>
    </div>
  );
};
