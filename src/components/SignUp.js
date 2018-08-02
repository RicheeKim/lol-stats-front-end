import React from "react";
import { Button, Form } from "semantic-ui-react";

const SignUp = () => (
  <div align="center">
    <Form>
      <Form.Field width={4}>
        <label>E-mail address</label>
        <input placeholder="E-mail address" />
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
