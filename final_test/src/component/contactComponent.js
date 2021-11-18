/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Form, Button, FormGroup, Row, Col, Label, Input } from "reactstrap";
import { LocalForm, controls, Errors, Control } from "react-redux-form";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { postStaff } from "../redux/ActionCreator";
const required = (val) => val && val.length;
const min = (len) => (val) => val && val.length >= len;
const max = (len) => (val) => !val || val.length <= len;
const num = (val) => !isNaN(Number(val));


function Contact() {
  // const [val, setVal] = useState({
  //   firstname: "",
  //   lastname: "",
  // });
  // const [firstnameerr, setFirstnameerr] = useState('');
  // const [lastnameerr, setLastnemeerr] = useState('');

  // const handleChange = (e) => {
  //   const target = e.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
  //   console.log(e.target.value)
  //   setVal({...val,
  //     [name]: value
  //   })
  // }

  // const Validation = () => {
  //   const firstnameerr = {};
  //   const lastnameerr = {};
  //   let isValid = true;
  //   const ho = val.firstname.length;
  //   const ten = val.lastname.length
  //   if (ho < 3) {
  //     firstnameerr.firstnameShort = "Họ quá ngắn";
  //     isValid = false;
  //   }
  //   if (ten < 5) {
  //     lastnameerr.lastnameShort = "Tên quá ngắn";
  //     isValid = false;
  //   }
  //   setFirstnameerr(firstnameerr);
  //   setLastnemeerr(lastnameerr);
  //   return isValid;
  // }
  const dispatch = useDispatch();
  const handleSubmit = (value) => {
    // setVal(e.target.val)
    // const isValid = Validation();
    // if(isValid){
    alert('Current State is: ' + JSON.stringify(value));
    // const id = 1;
    // const name = 'Nguyễn Văn Duong'
    // dispatch(postStaff(
    //   id,
    //   name
    // ))
    // }
    // event.preventDefault();
  };
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-9">
          <LocalForm onSubmit={handleSubmit}>
            <Row>
              <Label md={2} htmlFor="firstname">
                First Name
              </Label>
              <Col md={10}>
                <Control.text
                  // type="text"
                  model=".firstname"
                  name="firstname"
                  placeholder="first name"
                  // value={val.firstname}
                  // onChange={e => handleChange(e)}
                  validators={{
                    required,
                    minLength: min(3),
                    maxLength: max(8),
                  }}
                />
                {/* {Object.keys(firstnameerr).map((key, index) => {
                      return (
                        <div key={index} style={{ color: "red" }}>
                          {firstnameerr[key]}
                        </div>
                      );
                    })} */}
                <Errors
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 8 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label md={2} htmlFor="lastname">
                last Name
              </Label>
              <Col md={10}>
                <Control.text
                  // type="text"
                  model=".lastname"
                  name="lastname"
                  placeholder="last name"
                  // value={val.lastname}
                  // onChange={e => handleChange(e)}
                  validators={{
                    required, minLength: min(2), maxLength: max(8)
                  }}
                />
                {/* {Object.keys(lastnameerr).map((key, index) => {
                  return (
                    <div key={index} style={{ color: "red" }}>
                          {lastnameerr[key]}
                        </div>
                      );
                    })} */}
                    <Errors 
                    model='.lastname'
                    show='touched'
                    messages={{
                      required: 'nhap de',
                      minLength: 'nhap it the',
                      maxLength: 'nhap nhieu vay'
                    }}
                    />
              </Col>
              {/* {console.log(val.lastname)} */}
            </Row>
            <Row>
              <Col md={3}>
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </LocalForm>
        </div>
      </div>
    </div>
  );
}

export default Contact;
