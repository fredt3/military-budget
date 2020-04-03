import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Container } from "reactstrap";

class Budget extends Component {
  render() {
    return (
      <div sm="12" md={{ size: 6, offset: 3 }}>
        <Container>
          <Form>
            <FormGroup>
              <Label for="rankSelect">Rank</Label>
              <Input type="select" name="select" id="rankSelect">
                <option>E-1</option>
                <option>E-2</option>
                <option>E-3</option>
                <option>E-4</option>
                <option>E-5</option>
                <option>E-6</option>
                <option>E-7</option>
                <option>E-8</option>
                <option>E-9</option>
                <option>W-1</option>
                <option>W-2</option>
                <option>W-3</option>
                <option>W-4</option>
                <option>W-5</option>
                <option>O-1</option>
                <option>O-1E</option>
                <option>O-2</option>
                <option>O-2E</option>
                <option>O-3</option>
                <option>O-3E</option>
                <option>O-4</option>
                <option>O-5</option>
                <option>O-6</option>
                <option>O-7</option>
                <option>O-8</option>
                <option>O-9</option>
                <option>O-10</option>
              </Input>
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="yearSelect">Years of Service</Label>
              <Input type="select" name="select" id="yearSelect">
                <option>2 or less</option>
                <option>Over 2</option>
                <option>Over 3</option>
                <option>Over 4</option>
                <option>Over 6</option>
                <option>Over 8</option>
                <option>Over 10</option>
                <option>Over 12</option>
                <option>Over 14</option>
                <option>Over 16</option>
                <option>Over 18</option>
                <option>Over 20</option>
                <option>Over 22</option>
                <option>Over 24</option>
                <option>Over 26</option>
                <option>Over 28</option>
                <option>Over 30</option>
                <option>Over 32</option>
                <option>Over 34</option>
                <option>Over 36</option>
                <option>Over 38</option>
                <option>Over 40</option>
              </Input>
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="yearSelect">Zip Code</Label>
              <Input placeholder="Enter Zip Code" type="number" />
            </FormGroup>
            <br />
            <FormGroup tag="fieldset">
              <legend>Dependents?</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="dependentsYes" /> Yes
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="dependentsNo" />
                  No
                </Label>
              </FormGroup>
            </FormGroup>
          </Form>
        </Container>
        <br />
      </div>
    );
  }
}

export default Budget;
