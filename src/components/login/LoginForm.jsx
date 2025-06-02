import React from 'react';
import { Form, Input, Button, Checkbox, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import loginBackground from '../../assets/login.webp'

const { Title, Text } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Card 
        className="w-full max-w-md"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          border: 'none',
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Title level={3} style={{ marginBottom: 8 }}>BNPL</Title>
          <Text type="secondary">Vui lòng nhập thông tin tài khoản</Text>
        </div>

        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Tên đăng nhập" 
              size="large"
            />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Mật khẩu"
              size="large"
            />
          </Form.Item>
          
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>

            <a style={{ float: 'right' }} href="#">
              Quên mật khẩu?
            </a>
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              size="large"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Text type="secondary">
            Chưa có tài khoản?{' '}
            <a href="#">Đăng ký ngay</a>
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;