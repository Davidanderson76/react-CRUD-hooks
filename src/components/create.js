import React, { useState } from "react";

import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios.post(`https://614a996207549f001755a967.mockapi.io/fakeData`, {
      firstName,
      lastName,
      checkbox,
    });
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>Name:</label>
        <input
          placeholder="Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Email:</label>
        <input
          placeholder="Email"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox label="Subscribe" onChange={(e) => setCheckbox(!checkbox)} />
      </Form.Field>
      <Button onClick={postData} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Create;
