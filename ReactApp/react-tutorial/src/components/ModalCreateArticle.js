import React, { Component } from "react";
import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ModalCreateArticle extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = { show: false };
    this.state = { artTitle: "" };
    this.state = { artContent: "" };
    this.state = { artImage: "" };
    this.state = { artComment: "" };
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

  sendData = () => {
    const { artTitle } = this.state;
    this.props.parentCallback(artTitle);
  };

  testFunction() {
    {
      this.handleClose();
    }
    {
      this.sendData();
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
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  onChange={(value) =>
                    this.setState({ artTitle: value.target.value })
                  }
                  value={this.state.artTitle}
                />
              </Form.Group>

              <label htmlFor="basic-url">Add article content</label>
              <InputGroup>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  onChange={(value) =>
                    this.setState({ artContent: value.target.value })
                  }
                  value={this.state.artContent}
                />
              </InputGroup>

              <label htmlFor="basic-url">Add image url</label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    https://homepages.cae.wisc.edu/~ece533/images/
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  onChange={(value) =>
                    this.setState({ artImage: value.target.value })
                  }
                  value={this.state.artImage}
                />
              </InputGroup>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Comment"
                  onChange={(value) =>
                    this.setState({ artComment: value.target.value })
                  }
                  value={this.state.artComment}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={this.handleClose}
              >
                Submit
              </Button>
              <Button variant="secondary" onClick={() => this.testFunction()}>
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
