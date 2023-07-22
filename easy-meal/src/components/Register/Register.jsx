import {  Form, Input } from 'antd';
import './Register.css';
import Button from '../Button/Button';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Register = () => (
  <Form
    className="form"
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    // style={{ maxWidth: 600 }}
    // initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off">
    <h3 className="form__title">Register</h3>

    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}>
      <Input className="form__imput" />
    </Form.Item>

    <Form.Item
      name="email"
      label="E-mail"
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}>
      <Input />
    </Form.Item>

    <Form.Item
      className="form__imput"
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}>
      <Input.Password />
    </Form.Item>

       <Button
          btnClass={'button_type_login'}
          btnText="Зарегистрироваться"
          btnType="submit"
          // onClick={}
        />
      <Button/>
  </Form>
);

export default Register;
