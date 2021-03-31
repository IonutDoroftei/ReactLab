import React, { Component } from "react";
import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ModalCreateArticle extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleShow() {
    this.setState({
      show: true,
    });
  }

  render() {
    return (
      <>
        <Button
          variant="primary"
          className="DeleteBtn"
          onClick={this.handleShow}
        >
          Create a new article
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title> {this.props.nameArticleData} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Article title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" />
              </Form.Group>

              <label htmlFor="basic-url">Add article content</label>
              <InputGroup>
                <FormControl as="textarea" aria-label="With textarea" />
              </InputGroup>

              <label htmlFor="basic-url">Add image url</label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    https://homepages.cae.wisc.edu/~ece533/images/
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Comment</Form.Label>
                <Form.Control type="text" placeholder="Comment" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="secondary" onClick={this.handleClose}>
                No
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ModalCreateArticle;
