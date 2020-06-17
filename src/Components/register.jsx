import React from "react";
import "../CSS/register.css";
import account from "../Assets/account.svg";
import { TextField, Button } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';


export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showPassword: false,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      confirmPassword: "",
      errors: {},
    }
  } 
  handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state, '------>name'))
  }
  validateForm = () => {
        let errors = {}
        let formIsValid = true
        if (!this.state.firstName) {
            errors['firstName'] = '*Enter the First Name'
            formIsValid = false
        }
        if (!this.state.lastName) {
            errors['lastName'] = '*Enter the Last Name'
            formIsValid = false
        }
        // if (!RegExp("^[_A-Za-z0-9-//+]+(//.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(//. [A-Za-z0-9]+)*(//.[A-Za-z]{2,})$").test(this.state.email)) {
        //     errors['email'] = '*Enter valid Email id'
        // }
        if (!this.state.email) {
            errors['email'] = '*Enter the Email Id'
            formIsValid = false
        }
        // if (!RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})").test(this.state.password)) {
        //     errors['password'] = '*Enter the valid password'
        //     formIsValid = false
        // }
        if (!this.state.password) {
            errors['password'] = '*Enter the password'
            formIsValid = false
        }
        if (!this.state.confirmPassword) {
            errors['confirmPassword'] = '*Enter the confirm password'
            formIsValid = false
        }
        if (this.state.password !== this.state.confirmPassword) {
            errors['confirmPassword'] = '*Password doesn\'t match'
            formIsValid = false
        }
        this.setState({
            errors: errors
        })
        return formIsValid
    }
    submitUserSignUpForm = () => {
        if (this.validateForm()) {
            let user = {};
            user.firstname = this.state.firstName;
            user.lastname = this.state.lastName;
            user.email = this.state.email;
            user.password = this.state.password;

            console.log(user);

            // Registration(user)
            //     .then(Response => {
            //         console.log(Response, "User Registered successfully!!");
            //         alert(`${Response.data.message}`);
            //         this.props.history.push("/");
            //     }).catch((error) => {
            //         console.log("Error", error.response)
            //         console.log(error.response.data.message, "User Registration failed");
            //         alert(error.response.data.message);
            //     });
        }
    }
  render() 
  {
  return (
    <Card className="root" variant="outlined">
      <div className='fundoofont' align="center">
          <span class="f">F</span>
          <span class="u">u</span>
          <span class="n">n</span>
          <span class="d">d</span>
          <span class="o">o</span>
          <span class="oo">o</span>
      </div>
      <p className='text'>Create your Fundoo Account</p>
      <p className='continue'>Continue to Fundoo</p>
      <div class="main">
        <div class="input">
          <div className='flname'>
            <TextField
              classname='name'
              variant='outlined'
              label={ <div class="password">First name</div>}
              margin="dense"
              size="medium"
              style={{ width: "48%" }}
              inputProps={{style:{ fontSize:'16px'}}}
              onChange={this.handleChangeText}
              error={this.state.errors.firstName}
              helperText={this.state.errors.firstName}
            />
            <span>


            </span>
            <TextField
              className='name'
              variant='outlined'
              label={ <div class="password">Last name</div>}
              margin="dense"
              size="medium"
              style={{ width: "48%" }}
              inputProps={{style:{ fontSize:'16px'}}}
              onChange={this.handleChangeText}
              error={this.state.errors.lastName}
              helperText={this.state.errors.lastName}
            />                  
          </div>
          <br/>
          <div id="pass">
            <TextField
              className='username'
              variant='outlined'
              label={ <div class="email">Email</div>}
              margin='dense'
              inputProps={{style:{ fontSize:'16px'}}}
              onChange={this.handleChangeText}
              error={this.state.errors.email}
              helperText={this.state.errors.email}
            />
            <h1 className='usermailline'>Use my current email address instead</h1>
            <div className='confirmPass'>
              <TextField
                className='pass'
                type={this.state.showPassword ? "text" : "password"}
                variant='outlined'
                label={ <div class="password">Password</div>}
                margin='dense'
                style={{ width: "48%" }}
                inputProps={{style:{ fontSize:'16px'}}}
                onChange={this.handleChangeText}
                error={this.state.errors.password}
                helperText={this.state.errors.password}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sytle={{ width: "1px" }}>
                            <IconButton
                                onClick={
                                    () => this.setState({ showPassword: !this.state.showPassword })
                                }
                            >
                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                            )
                }}
              />
              <span>

              </span>
              <TextField
                className='cpassword'
                type={this.state.showPassword ? "text" : "password"}
                variant='outlined'
                label={ <div class="password">Confirm Password</div>}
                margin='dense'
                style={{ width: "48%" }}
                onChange={this.handleChangeText}
                error={this.state.errors.confirmPassword}
                helperText={this.state.errors.confirmPassword}
                inputProps={{style:{ fontSize:'16px'}}}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sytle={{ width: "1px" }}>
                            <IconButton
                                onClick={
                                    () => this.setState({ showPassword: !this.state.showPassword })
                                }
                            >
                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                            </InputAdornment>
                            )
                }}
              />
            </div>
            {/* <div className="service">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Service</FormLabel>
                  <RadioGroup aria-label="service" name="service">
                  <FormControlLabel control={<Radio />} label="Basic" />
                  <FormControlLabel control={<Radio />} label="Advance" />
                  </RadioGroup>
                </FormControl>
            </div> */}
              <h1 className='passline' >Use 8 or more characters with a mix of letters, numbers & symbols</h1>
              <div className="signbutton">
                  <Button color="primary"
                    style={{ width:"150px",padding: "7px 0px",color:'#0423ce',fontSize:'13px'}} 
                    onClick={() => this.props.history.push('/')}>
                    Sign in instead
                  </Button>

                  <Button variant="contained"
                    style={{ width:"90px",padding: "7px 0px",fontSize:'12px'}} 
                    color="primary" 
                    onClick={this.submitUserSignUpForm}>
                    Submit
                  </Button>
              </div>
          </div>
        </div>
        <div>
            <img src={account} className='signimage' alt='fundooo'
                  width="244" height="244" ></img>
                <figcaption className='figcaption'>One account. All of Fundoo </figcaption>
                <figcaption className='figcaption'>working for you.</figcaption>
            </div>
      </div>

    </Card>
    );
  }
}