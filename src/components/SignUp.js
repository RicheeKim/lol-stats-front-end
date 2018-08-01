import React from "react";
import { Button, Form } from "semantic-ui-react";

const SignUp = () => (
  <div align="center">
    <Form>
      <Form.Field width={4}>
        <label>Email</label>
        <input placeholder="Email" />
      </Form.Field>
      <Form.Field width={4}>
        <label>Username</label>
        <input placeholder="Username" />
      </Form.Field>
      <Form.Field width={4}>
        <label>Password</label>
        <input placeholder="Password" />
      </Form.Field>

      <Button type="submit">Submit</Button>
    </Form>
  </div>
);

export default SignUp;
