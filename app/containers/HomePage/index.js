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
    open: true,
    disabled: true,
    inputValue: ""
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e, inputValue) => {
    this.setState({ inputValue })
  };

  render() {
    const { open, disabled } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <Modal
            open={open}
            handleClose={this.handleClose}
            handleOpen={this.handleOpen}
            disabled={disabled}
            handleChange={this.handleChange}
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

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
};


const Modal = ({ open, handleClose, disabled, handleChange }) => {
  const actions = [
    <RaisedButton
      label="Done"
      primary={true}
      keyboardFocused={true}
      onTouchTap={handleClose}
    />
  ];
  return (
    <div>
      <Dialog
        titleStyle={{textAlign: "center"}}
        title="Enter Your Email"
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={handleClose}
        contentStyle={customContentStyle}
        autoDetectWindowHeight
      >
        You'll get the demo app and intergration instruction
        <TextField
          hintText="hello@world.com"
          fullWidth={true}
          onChange={handleChange}
         />
      </Dialog>
    </div>
  );
};
