import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ModalDelete extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  acceptDelete() {
    {
      this.props.deleteAction();
    }
    {
      this.handleClose();
    }
  }

  render() {
    return (
      <>
        <Button
          variant="primary"
          className="DeleteBtn"
          onClick={this.handleShow}
        >
          Delete article
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.nameArticleData}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to remove this article?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={() => this.acceptDelete()}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalDelete;
