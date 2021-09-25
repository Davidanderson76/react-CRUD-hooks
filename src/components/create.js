import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  return (
    <Form className="create-form">
      <Form.Field>
        <label>Name:</label>
        <input placeholder="Name" />
      </Form.Field>
      <Form.Field>
        <label>Email:</label>
        <input placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="Subscribe" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Create;
