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
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import { CardMedia, CardTitle } from "material-ui/Card";
import Handsup from "./handsup.png";
import ActionClose from "material-ui/svg-icons/navigation/close";
import IconButton from "material-ui/IconButton";
import jsonp from "jsonp";
import "!!style-loader!css-loader!./homepage.css";

// Components

/**
 * HeaderWrapper
 * defaultProps
 * @type {{title: string, onTouchTap: function, imageNode: node}}
 * This is the title or a header on every modal.
 */
const HeaderWrapper = ({ title, onTouchTap, imageNode }) =>
  <div>
    <div className="icon-wrapper">
      <IconButton onTouchTap={onTouchTap}>
        <ActionClose color="#676d79" hoverColor="#333" />
      </IconButton>
    </div>
    <h3 className="dialog-header">
      {title} {imageNode}
    </h3>
  </div>;

/**
 * Footer
 * defaultProps
 * @type {{email: null, height: number, imgHeight: number}}
 * This is the links to Github pages at the bottom of every Modal/Dialog.
 */
const Footer = () =>
  <div className="custom-footer">
    <p>
      Checkout our Github projects <a href="">here</a>
    </p>
    <p>
      Checkout our Github projects <a href="">here</a>
    </p>
  </div>;

/**
 * CustomBtn
 * defaultProps
 * @type {{isDisabled: function, onClick: function}}
 * This is a button.
 */
const CustomBtn = ({ isDisabled, onClick }) =>
  <button onClick={onClick} className="btn-custom" disabled={isDisabled}>
    Done
  </button>;

/**
 * GetStatedBtn
 * defaultProps
 * @type {{onClick: function}}
 * This is a button.
 */
const GetStatedBtn = ({ onClick }) =>
  <button onClick={onClick} className="getstarted-btn">
    Get Started Free
  </button>;

/**
 * Modal
 * defaultProps
 * @type {{ open: boolean, handleClose: function, handleChange: function, 
 *          isDisabled: boolean, onClick: function, errorText: string }}.
 * 
 * This is the first modal when that pops up `Get started Free` button ic clicked.
 * This modal handles email submission and open the  `next modal`.
 * The `next modal` opens according to OS. There are two modals that can open, that
 * is iOS and Others Modals.
 */
const Modal = ({ open, handleClose, isDisabled, onClick, children }) => {
  {
    /* This is are button for the dialog. They are modal specific for material-ui dialog.*/
  }
  const actions = [
    <CustomBtn isDisabled={isDisabled} onClick={onClick} />,
    <Footer />
  ];
  return (
    <div>
      <Dialog
        actionsContainerStyle={{ textAlign: "center" }}
        titleStyle={{ textAlign: "center" }}
        title={
          <HeaderWrapper
            title="Enter Your Email"
            onTouchTap={handleClose}
            imageNode=""
          />
        }
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={handleClose}
        contentClassName="modal-content"
        autoDetectWindowHeight
        bodyStyle={{ paddingBottom: 12 }}
      >
        You'll get the demo app and intergration instruction{" "}
        <img src={Handsup} alt="handsup" style={{ maxHeight: 16 }} />
        {children}
      </Dialog>
    </div>
  );
};

/**
 * CustomLabel
 * This is customized lable for iOSmodal.
 */
const CustomLabel = () =>
  <label className="custom-label" onClick={() => console.log("clicked")}>
    <div className="lable-icon">
      <svg viewBox="0 0 22 22">
        <path
          fill="#fff"
          d="M4.72 15.693a3.564 3.564 0 0 1-.829-.765 10.49 10.49 0 0 1-.71-.97 9.4 9.4 0 0 1-1.186-2.423c-.333-1.001-.495-1.96-.495-2.897 0-1.045.226-1.96.668-2.725.33-.6.813-1.102 1.4-1.454a3.634 3.634 0 0 1 1.896-.56c.236 0 .484.032.753.097.194.054.431.14.711.248.367.14.571.226.636.247.215.076.398.108.538.108.108 0 .259-.032.431-.086.097-.032.28-.097.539-.205.258-.097.463-.172.624-.237.248-.075.485-.14.7-.172.259-.043.517-.054.765-.032.474.032.905.129 1.293.28.678.269 1.227.7 1.637 1.303a3.18 3.18 0 0 0-.485.366 3.982 3.982 0 0 0-.819 1.002 3.395 3.395 0 0 0-.43 1.68c.01.722.194 1.357.56 1.906.258.399.603.743 1.023 1.024.205.14.388.236.56.301a7.77 7.77 0 0 1-.27.732 9.53 9.53 0 0 1-.829 1.54c-.29.42-.517.733-.689.938-.27.323-.528.56-.786.732a1.76 1.76 0 0 1-.97.29c-.233.01-.466-.02-.689-.085a6.483 6.483 0 0 1-.57-.216 5.139 5.139 0 0 0-.604-.226 3.06 3.06 0 0 0-.775-.097c-.27 0-.528.033-.776.097-.206.058-.407.13-.603.216-.28.118-.463.193-.57.226a2.813 2.813 0 0 1-.658.118c-.344 0-.668-.097-.99-.301H4.72zm4.567-12.3c-.452.226-.883.323-1.314.29-.065-.43 0-.872.183-1.357.162-.409.377-.786.668-1.12a3.58 3.58 0 0 1 1.088-.84c.441-.226.861-.344 1.26-.366.054.452 0 .905-.162 1.379a3.87 3.87 0 0 1-.667 1.174 3.2 3.2 0 0 1-1.056.84z"
        />
      </svg>;
    </div>
    <div className="lable-label">
      <span className="descrption">Experience as the</span>
      <span className="apple">App Store</span>
    </div>
  </label>;

/**
 * defaultProps
 * @type {{isiOSModalOpen: boolean, handleClose: function}}
 * This is a Modal/Dialog that pops up if the browser is iOS.
 */
const IOSModal = ({ isiOSModalOpen, handleClose }) =>
  <Dialog
    titleStyle={{ marginBottom: 30, padding: 16 }}
    title={
      <HeaderWrapper
        title="You'll get an email shortly{apple}"
        imageNode={
          <img src={Handsup} alt="handsup" style={{ maxHeight: 16 }} />
        }
        onTouchTap={handleClose}
      />
    }
    modal={false}
    open={isiOSModalOpen}
    onRequestClose={handleClose}
    autoDetectWindowHeight
    bodyStyle={{ paddingBottom: 12, textAlign: "center" }}
  >
    <div className="empty-div">
      <CustomLabel />
    </div>
    <Footer />
  </Dialog>;

/**
 * defaultProps
 * @type {{isAndroidModalOpen: boolean, handleClose: function}}
 * This is a Modal/Dialog for other user agents apart from iOS.
 */
const AndroidModal = ({ isAndroidModalOpen, handleClose }) =>
  <Dialog
    titleStyle={{ marginBottom: 30, padding: 16 }}
    title={
      <HeaderWrapper
        title="You'll get an email shortly"
        imageNode={
          <img src={Handsup} alt="handsup" style={{ maxHeight: 16 }} />
        }
        onTouchTap={handleClose}
      />
    }
    modal={false}
    open={isAndroidModalOpen}
    onRequestClose={handleClose}
    autoDetectWindowHeight
    bodyStyle={{ paddingBottom: 12, textAlign: "center" }}
  >
    <div className="empty-div">
      <CustomBtn disabled={false} onClick={handleClose} />
    </div>
    <Footer />
  </Dialog>;

/*
 * 
 * HomePage
 * The main container.
 * 
 * 
*/
export default class HomePage extends React.Component {
  state = {
    open: false,
    disabled: true,
    isDisabled: true,
    email: "",
    isAndroidModalOpen: false,
    isiOSModalOpen: false,
    errorText: ""
  };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => {
    this.setState({
      open: false,
      isAndroidModalOpen: false,
      isiOSModalOpen: false
    });
  };

  handleChange = (e, email) => {
    this.setState(() => ({ email }));
    if (this.state.email.length > 0 && this.state.disabled === true) {
      this.setState(() => ({ isDisabled: false }));
    }
    if (this.state.email.length < 0) {
      this.setState(() => ({ isDisabled: true }));
    }
  };

  browserDetector = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const ios = /iphone|ipod|ipad/.test(userAgent);
    if (ios) {
      return true;
    }
  };

  handleFormSubmit = () => {
    const action =
      "//mc.us16.list-manage.com/subscribe/post-json?u=e4f850169eb9915dc9e0b6e44&id=42804fed1c";

    const url = `${action}&EMAIL=${this.state.email}`;

    jsonp(url, { param: "c" }, (err, res) => {
      if (err === null) {
        if (this.browserDetector()) {
          this.setState({ email: "", open: false, isiOSModalOpen: true });
        } else {
          this.setState({ email: "", open: false, isAndroidModalOpen: true });
        }
      } else {
        this.setState({
          errorText: "Email was not received. Please try again."
        });
      }
    });
  };

  render() {
    const {
      open,
      disabled,
      isDisabled,
      isAndroidModalOpen,
      errorText,
      isiOSModalOpen
    } = this.state;

    return (
      <div className="parent">
        {/* Start: Modals/Dialogs. */}
        <Modal
          open={open}
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
          disabled={disabled}
          isDisabled={isDisabled}
          onClick={this.handleFormSubmit}
        >
          <TextField
            autoFocus={true}
            hintText="hello@world.com"
            fullWidth={true}
            onChange={this.handleChange}
          />
        </Modal>
        <AndroidModal
          isAndroidModalOpen={isAndroidModalOpen}
          handleClose={this.handleClose}
        />
        <IOSModal
          isiOSModalOpen={isiOSModalOpen}
          handleClose={this.handleClose}
        />
        {/* End: Modals/Dialogs. */}
        <div className="child">
          <CardMedia
            overlay={
              <CardTitle
                titleStyle={{ fontWeight: 600 }}
                title="Live Face Filters for Your App"
                subtitleStyle={{ fontSize: 18 }}
                subtitle="Boost engagement with a few lines of code"
              />
            }
          />
          <div className="btn-wrapper">
            <GetStatedBtn onClick={this.handleOpen} />
          </div>
        </div>
      </div>
    );
  }
}

// Inline styling.
const styles = {
  wrapper: {
    margin: 20
  },
  apple: {
    margin: 12
  }
};
