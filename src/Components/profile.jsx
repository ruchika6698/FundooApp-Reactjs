import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItem,
  Popper,
  Paper,
  Fade,
  Tooltip,
  ClickAwayListener,
} from "@material-ui/core";
import moreMenu from "../Assets/moreMenu.svg";
import IconButton from "@material-ui/core/IconButton";
import "../CSS/dashboard.css";
import { Snackbar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotesService from "../Services/notesServices";
let services = new NotesService();

class Profile extends Component {
 constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
      placement: null,
    };
  }
  clickMoreOptions(event) {
    try {
      const { currentTarget } = event;

      this.setState((state) => ({
        anchorEl: currentTarget,
        open: !state.open,
      }));
    } catch (err) {
      console.log("error in more options");
    }
  }
  closeLabelPopper() {
    this.setState({
      open: false,
    });
  }
  OnLogOut=()=>{
        localStorage.removeItem("Token");
        localStorage.removeItem("FirstName");
        localStorage.removeItem("LastName");
        localStorage.removeItem("Email");
        this.props.history.push("/");
  }
  handleLabelsOnNote(e) {
    this.setState({
      open: false,
    });
    this.moreOptionsToAddLabels.current.addLabelPopup(e);
  }
  render() {
    const { anchorEl, open } = this.state;
    return (
      <div>
        <Tooltip title="Manage Account">
          <AccountCircleIcon onClick={(event)=>this.clickMoreOptions(event)} alt="Manage Account" />
        </Tooltip>

        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={"bottom"}
          transition
          style={{ position: "fixed" }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={0}>
              <Paper className="moreOptionsPopper">
                <ClickAwayListener onClickAway={() => this.closeLabelPopper()}>
                  <div id="selectMoreOptions">
                    <br/>
                    <br/>
                    <MenuItem
                      id="moreOptionsMenu"
                    >
                      {localStorage.getItem("FirstName") +
                      " " +
                      localStorage.getItem("LastName") }
                    </MenuItem>
                    <MenuItem
                      id="moreOptionsMenu1"
                    >
                     { localStorage.getItem("Email")}
                    </MenuItem>
                    <MenuItem onClick={this.OnLogOut}>Log Out</MenuItem>
                  </div>
                </ClickAwayListener>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}
export default withRouter(Profile);
