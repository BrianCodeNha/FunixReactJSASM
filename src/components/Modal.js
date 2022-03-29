import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Label, Input } from "reactstrap";
import { STAFFS } from "../shared/staffs.jsx";

export default function AddEmployee(props) {
  // on off modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  // employee object

  const [newEmployee, setNewEmployee] = useState({
    id: STAFFS.length + 1,
    name: "",
    doB: "",
    salaryScale: "",
    department: "",
    annualLeave: "",
    overTime: "",
    image: "/assets/images/D.jpg"   
    
  });

  const [newEmployeeErrors, setNewEmployeeErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false)

  //handle change

  const handleChange = (e) => {
   
      const {name, value} = e.target;
      setNewEmployee({...newEmployee, [name]: value} )
      console.log(newEmployee)
  }

  // submit new Employee function

  const handleSubmit = (e) => {
    console.log()
    e.preventDefault();
    setNewEmployeeErrors(validate(newEmployee));
    setIsSubmit(true) 
  };

  useEffect(() => {
    console.log(newEmployeeErrors)
    if (Object.keys(newEmployeeErrors).length === 0 && isSubmit){
      console.log(newEmployee)
    }
  },[newEmployeeErrors])

  const validate = (values) => {
    const errors = {};
    
    if(!values.name){
      errors.name = "Yêu cầu nhập!"
    }

    if(!values.doB){
      errors.doB = "Yêu cầu nhập!"
    }

    if(!values.salaryScale){
      errors.salaryScale = "Yêu cầu nhập!"
    }

    if(!values.department){
      errors.department = "Yêu cầu nhập!"
    }

    if(!values.annualLeave){
      errors.annualLeave = "Yêu cầu nhập!"
    }

    if(!values.overTime){
      errors.overTime = "Yêu cầu nhập!"
    }

    return errors;
  };

  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="fa fa-plus" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm Nhân Viên</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row className="form-group">
              <Label htmlFor="name" md={4}>
                Tên
              </Label>
              <Col md={7}>
                <Input
                  onChange={handleChange}
                  value={newEmployee.name}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Họ và tên"
                />
                <div style={{color: 'red'}}>{newEmployeeErrors.name}</div>
              </Col>
            </Row>
            <Row>
              <Label htmlFor="doB" md={4}>
                Ngày Sinh
              </Label>
              <Col md={7}>
                <Input
                  onChange={handleChange}
                  value={newEmployee.doB}
                  type="date"
                  id="doB"
                  name="doB"
                  placeholder=""
                />
                <div style={{color: 'red'}}>{newEmployeeErrors.doB}</div>
              </Col>
            </Row>
            <div className="row">
              <Label htmlFor="startDate" md={4}>
                Ngày vào công ty
              </Label>
              <Col md={7}>
                <Input
                  onChange={handleChange}
                  value={newEmployee.startDate}
                  type="date"
                  id="startDate"
                  name="startDate"
                  placeholder=""
                />
                <div style={{color: 'red'}}>{newEmployeeErrors.startDate}</div>
              </Col>
            </div>
            <Row>
              <Label htmlFor="department" md={4}>
                Phòng ban
              </Label>
              <Col md={7}>
                <select
                  name="department"
                  value={newEmployee.department}
                  onChange={handleChange}
                  style={{ width: "100%", borderRadius: "3px" }}
                >
                  <option></option>
                  <option>Sale</option>
                  <option>HR</option>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Finance</option>
                </select>
                <div style={{color: 'red'}}>{newEmployeeErrors.department}</div>
              </Col>
            </Row>
            <div className="row">
              <Label htmlFor="salaryScale" md={4}>
                Hệ số lương
              </Label>
              <Col md={7}>
                <Input
                  value={newEmployee.salaryScale}
                  onChange={handleChange}
                  type="text"
                  id="salaryScale"
                  name="salaryScale"
                  placeholder=""
                />
                <div style={{color: 'red'}}>{newEmployeeErrors.salaryScale}</div>
              </Col>
            </div>
            <div className="row">
              <Label htmlFor="annualLeave" md={4}>
                Ngày nghỉ còn lại
              </Label>
              <Col md={7}>
                <Input
                  value={newEmployee.annualLeave}
                  onChange={handleChange}
                  type="text"
                  id="annualLeave"
                  name="annualLeave"
                  placeholder=""
                />
                <div style={{color: 'red'}}>{newEmployeeErrors.annualLeave}</div>
              </Col>
            </div>
            <div className="row">
              <Label htmlFor="overTime" md={4}>
                Số ngày đã làm thêm
              </Label>
              <Col md={7}>
                <Input
                  value={newEmployee.overTime}
                  onChange={handleChange}
                  type="number"
                  id="overTime"
                  name="overTime"
                  placeholder=""
                />
                <div style={{color: 'red'}}>{newEmployeeErrors.overTime}</div>
              </Col>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Thêm
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
