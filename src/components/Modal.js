import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
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
    department: "Sale",
    annualLeave: "",
    overTime: "",
    image: "/assets/images/D.jpg",
    touched: {
      name: false,
      doB: false,
      salaryScale: false,
      annualLeave: false,
      overTime: false,
    },
  });

  // validate form
  const handleBlur = (field) => (evt) => {
    setNewEmployee({
      ...newEmployee,
      touched: { ...newEmployee.touched, [field]: true },
    });
  };

  const validate = (
    name,
    doB,
    salaryScale,
    department,
    annualLeave,
    overTime
  ) => {
    const errors = {
      name: "",
      doB: "",
      salaryScale: "",
      department: "",
      annualLeave: "",
      overTime: "",
    };

    if (newEmployee.touched.name && name.length < 2)
      errors.name = "Họ và tên phải nhiều hơn 2 ký tự";
    else if (newEmployee.touched.name && name.length > 30)
      errors.name = "Họ và tên phải ít hơn 30 ký tự";

    if (newEmployee.touched.doB && doB.length < 1) errors.doB = "yêu cầu nhập";

    if (newEmployee.touched.salaryScale && salaryScale.length < 1)
      errors.salaryScale = "yêu cầu nhập";

    if (newEmployee.touched.department && department.length < 1)
      errors.department = "yêu cầu nhập";

    if (newEmployee.touched.annualLeave && annualLeave.length < 1)
      errors.annualLeave = "yêu cầu nhập";

    if (newEmployee.touched.overTime && overTime.length < 1)
      errors.overTime = "yêu cầu nhập";

    return errors;
  };

  const errors = validate(
    newEmployee.name,
    newEmployee.doB,
    newEmployee.salaryScale,
    newEmployee.department,
    newEmployee.annualLeave,
    newEmployee.overTime
  );

  // add new Employee function

  const handleAdd = () => {
    if (newEmployee.name.length < 2)
      errors.name = "Họ và tên phải nhiều hơn 2 ký tự";
    else if (newEmployee.name.length > 30)
      errors.name = "Họ và tên phải ít hơn 30 ký tự";

    if (newEmployee.doB.length < 1) errors.doB = "yêu cầu nhập";

    if (newEmployee.salaryScale.length < 1) errors.salaryScale = "yêu cầu nhập";

    if (newEmployee.department.length < 1) errors.department = "yêu cầu nhập";

    if (newEmployee.annualLeave.length < 1) errors.annualLeave = "yêu cầu nhập";

    if (newEmployee.overTime.length < 1) errors.overTime = "yêu cầu nhập";

    if (
      errors.name === "" &&
      errors.doB === "" &&
      errors.salaryScale === "" &&
      errors.department === "" &&
      errors.annualLeave === "" &&
      errors.overTime === ""
    ) {
      props.getEmployee(newEmployee);
      handleClose();
      setNewEmployee({
        id: STAFFS.length + 1,
        name: "",
        doB: "",
        salaryScale: 0,
        department: "Sale",
        annualLeave: 0,
        overTime: 0,
        image: "/assets/images/D.jpg",
      });
    }
  };

  // react-redux-form
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="fa fa-plus" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm Nhân Viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LocalForm>
            <Row className="form-group">
              <Label htmlFor="name" md={4}>
                Tên
              </Label>
              <Col md={7}>
                <Control.text
                  model=".firstname"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(30),
                  }}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, name: e.target.value })
                  }
                  value={newEmployee.name}
                  invalid={errors.name !== ""}
                  onBlur={handleBlur("name")}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Họ và tên"
                ></Control.text>
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 30 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label htmlFor="doB" md={4}>
                Ngày Sinh
              </Label>
              <Col md={7}>
                <Control.text
                  model=".lastname"
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, doB: e.target.value })
                  }
                  value={newEmployee.doB}
                  invalid={errors.doB !== ""}
                  onBlur={handleBlur("doB")}
                  type="date"
                  id="doB"
                  name="doB"
                  placeholder=""
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required",                   
                  }}
                />
              </Col>
            </Row>
            <div className="row">
              <Label htmlFor="startDate" md={4}>
                Ngày vào công ty
              </Label>
              <Col md={7}>
                <Control.text
                model=".lastname"
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      startDate: e.target.value,
                    })
                  }
                  value={newEmployee.startDate}
                  onBlur={handleBlur("startDate")}
                  invalid={errors.startDate !== ""}
                  type="date"
                  id="startDate"
                  name="startDate"
                  placeholder=""
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required",                   
                  }}
                />
              </Col>
            </div>
            <Row>
              <Label htmlFor="department" md={4}>
                Phòng ban
              </Label>
              <Col md={7}>
                <Control.select model=".contactType"
                  value={newEmployee.department}
                  invalid={errors.department !== ""}
                  onBlur={handleBlur("department")}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      department: e.target.value,
                    })
                  }
                  style={{ width: "100%", borderRadius: "3px" }}
                >
                  <option>Sale</option>
                  <option>HR</option>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Finance</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required",                   
                  }}
                />
              </Col>
            </Row>
            <div className="row">
              <Label htmlFor="salaryScale" md={4}>
                Hệ số lương
              </Label>
              <Col md={7}>
                <Control.text model=".telnum"
                  value={newEmployee.salaryScale}
                  invalid={errors.salaryScale !== ""}
                  onBlur={handleBlur("salaryScale")}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      salaryScale: e.target.value,
                    })
                  }
                  type="number"
                  id="salaryScale"
                  name="salaryScale"
                  placeholder=""
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required",                   
                  }}
                />
              </Col>
            </div>
            <div className="row">
              <Label htmlFor="annualLeave" md={4}>
                Ngày nghỉ còn lại
              </Label>
              <Col md={7}>
                <Control.text model=".telnum"
                  value={newEmployee.annualLeave}
                  invalid={errors.annualLeave !== ""}
                  onBlur={handleBlur("annualLeave")}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      annualLeave: e.target.value,
                    })
                  }
                  type="number"
                  id="annualLeave"
                  name="annualLeave"
                  placeholder=""
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required",                   
                  }}
                />
              </Col>
            </div>
            <div className="row">
              <Label htmlFor="overTime" md={4}>
                Số ngày đã làm thêm
              </Label>
              <Col md={7}>
                <Control.text model=".telnum"
                  value={newEmployee.overTime}
                  invalid={errors.overTime !== ""}
                  onBlur={handleBlur("overTime")}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, overTime: e.target.value })
                  }
                  type="number"
                  id="overTime"
                  name="overTime"
                  placeholder=""
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: "Required",                   
                  }}
                />
              </Col>
            </div>
          </LocalForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Thêm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
