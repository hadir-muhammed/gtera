import React, { useState, useEffect } from "react";
import { Drawer, Form, Input, Button, message } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./ContactUs.css";

export default function ContactUs({ drawerIsShown, showDrawer }: any) {
  const [visible, setVisible] = useState(false);
  const [successMessageIsShown, showSuccessMessage] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setVisible(drawerIsShown);
  }, [drawerIsShown]);

  const onClose = () => {
    showDrawer(false);
    setVisible(false);
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        showSuccessMessage(true);
        setTimeout(() => {
          showSuccessMessage(false);
        }, 3000);
      })
      .catch((errorInfo) => {
        console.log(`errorInfo`, errorInfo);
        message.error("This is an error message");
      });
  };
  return (
    <div className="contact-us">
      <Drawer placement="right" onClose={onClose} visible={visible} width={540}>
        {successMessageIsShown ? (
          <div className="successMessage">
            <div>
              <CheckCircleOutlined />
            </div>
            <div className="successMessage-text">
              <span>
                Your message sent successfully and we will reply you very soon.
              </span>
            </div>
          </div>
        ) : (
          <div className="contact-us-wrapper">
            <div className="contact-us-info">
              <span>We are happy to contact with you.</span>
            </div>
            <div className="contact-us-title">
              <span>Send A Message</span>
            </div>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: "Full name is required" }]}
              >
                <Input placeholder="Type Full Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Your Email"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input placeholder="example@mail.com" />
              </Form.Item>
              <Form.Item label="Mobile Number (Optional)" name="mobileNumber">
                <Input placeholder="Type Number" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Mobile number is required" },
                ]}
              >
                <Input.TextArea placeholder="Type Your Message" />
              </Form.Item>
              <Form.Item className="btn-wrapper">
                <Button
                  className="cancel-btn"
                  type="text"
                  onClick={() => onClose()}
                >
                  Cancel
                </Button>
                <Button
                  className="send-btn"
                  onSubmit={handleSubmit}
                  type="primary"
                  htmlType="submit"
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </Drawer>
    </div>
  );
}
