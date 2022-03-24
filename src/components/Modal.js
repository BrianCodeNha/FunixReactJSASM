import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";
import { Label, Input } from "reactstrap";
import { STAFFS } from "../shared/staffs.jsx";

export default function AddEmployee(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  

  const [newEmployee, setNewEmployee] = useState({
    id: STAFFS.length + 1,
    name: "",
    doB: "",
    salaryScale: 0,
    department: "Sale",
    annualLeave: 0,
    overTime: 0,
    image: '/assets/images/D.jpg'
  }); 

  const handleAdd = () => {
    props.getEmployee(newEmployee)
    handleClose();
    setNewEmployee({
      id: STAFFS.length + 1,
      name: "",
      doB: "",
      salaryScale: 0,
      department: "Sale",
      annualLeave: 0,
      overTime: 0,
      image: '/assets/images/D.jpg'
    });

    console.log(newEmployee,STAFFS)
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
        <Modal.Body>
          <Form>
            <div className="row">
              <Label htmlFor="name" md={4}>
                Tên
              </Label>
              <Col md={7}>
                <Input
                  onChange={(e) => setNewEmployee({ ...newEmployee,name: e.target.value })}
                  value={newEmployee.name}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Họ và tên"
                />
                {newEmployee.name}
              </Col>
            </div>
            <div className="row">
              <Label htmlFor="doB" md={4}>
                Ngày Sinh
              </Label>
              <Col md={7}>
                <Input
                  onChange={(e) => setNewEmployee({...newEmployee, doB: e.target.value })}
                  value={newEmployee.doB}
                  type="date"
                  id="doB"
                  name="doB"
                  placeholder=""
                />
                {newEmployee.doB}
              </Col>
            </div>
            <div className="row">
              <Label htmlFor="startDate" md={4}>
                Ngày vào công ty
              </Label>
              <Col md={7}>
                <Input
                  onChange={(e) =>
                    setNewEmployee({...newEmployee, startDate: e.target.value })
                  }
                  value={newEmployee.startDate}
                  type="date"
                  id="startDate"
                  name="startDate"
                  placeholder=""
                />
                {newEmployee.startDate}
              </Col>
            </div>
            <div className="row">
              <Label htmlFor="department" md={4}>
                Phòng ban
              </Label>
              <Col md={7}>
                <select
                  value={newEmployee.department}
                  onChange={(e) =>
                    setNewEmployee({...newEmployee, department: e.target.value })
                  }
                  style={{ width: "100%", borderRadius: "3px" }}
                >
                  <option>Sale</option>
                  <option>HR</option>
                  <option>Marketing</option>
                  <option>IT</option>
                  <option>Finance</option>
                </select>
              </Col>
            </div>
            <div className="row">
              <Label htmlFor="salaryScale" md={4}>
                Hệ số lương
              </Label>
              <Col md={7}>
                <Input
                  value={newEmployee.salaryScale}
                  onChange={(e) =>
                    setNewEmployee({...newEmployee, salaryScale: e.target.value })
                  }
                  type="number"
                  id="salaryScale"
                  name="salaryScale"
                  placeholder=""
                />
                {newEmployee.salaryScale}
              </Col>
            </div>
            <div className="row">
              <Label htmlFor="annualLeave" md={4}>
                Ngày nghỉ còn lại
              </Label>
              <Col md={7}>
                <Input
                  value={newEmployee.annualLeave}
                  onChange={(e) =>
                    setNewEmployee({...newEmployee, annualLeave: e.target.value })
                  }
                  type="number"
                  id="annualLeave"
                  name="annualLeave"
                  placeholder=""
                />
                {newEmployee.annualLeave}
              </Col>
            </div>
            <div className="row">
              <Label htmlFor="overTime" md={4}>
                Số ngày đã làm thêm
              </Label>
              <Col md={7}>
                <Input
                  value={newEmployee.overTime}
                  onChange={(e) => setNewEmployee({...newEmployee, overTime: e.target.value })}
                  type="number"
                  id="overTime"
                  name="overTime"
                  placeholder=""
                />
                {newEmployee.overTime}
              </Col>
            </div>
          </Form>
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
