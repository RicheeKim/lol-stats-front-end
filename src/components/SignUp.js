import React from "react";
import { Button, Form } from "semantic-ui-react";

const SignUp = () => (
  <Form>
    <Form.Field>
      <label>Email</label>
      <input placeholder="Email" />
    </Form.Field>
    <Form.Field>
      <label>Username</label>
      <input placeholder="Username" />
    </Form.Field>
    <Form.Field>
      <label>password</label>
      <input placeholder="password" />
    </Form.Field>

    <Button type="submit">Submit</Button>
  </Form>
);

export default SignUp;
