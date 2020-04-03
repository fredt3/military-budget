import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">The Military Budget App</h1>
        <p className="lead">
          Welcome to the Military Budget App! This tool was developed to assist
          service members make the most out of their paychecks!
        </p>
        <hr className="my-2" />
        <p>
          Our products are completely free. Click below to get started making
          your future financially sound!
        </p>
        <p className="lead">
          <Button color="primary">Get Started!</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
