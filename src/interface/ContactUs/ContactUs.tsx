import React, { useState, useEffect, FC } from "react";
import { Drawer, Form, Input, Button, message } from "antd";
import { ReactComponent as CheckGroup } from "../../assets/images/sentMessage.svg";
import "antd/dist/antd.css";
import "./ContactUs.scss";
import useTranslations from "../../config/i18n/useTranslations";

type Props = {
  drawerIsShown: boolean,
  showDrawer: (val: boolean) => void
}

const ContactUs: FC<Props> = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [successMessageIsShown, showSuccessMessage] = useState(false);
  const [form] = Form.useForm();
  const msgs = useTranslations();

  useEffect(() => {
    showSuccessMessage(false);
    setVisible(props.drawerIsShown);
  }, [props.drawerIsShown]);

  const onClose = () => {
    props.showDrawer(false);
    setVisible(false);
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        showSuccessMessage(true);
        setTimeout(() => {
          form.resetFields();
          onClose();
        }, 3000);
      })
      .catch((errorInfo) => {
        message.error("Some thing went wrong");
      });
  };

  return (
    <div className="contact-us">
      <Drawer
        placement="right"
        onClose={onClose}
        closable={false}
        destroyOnClose={true}
        visible={visible}
      >
        {successMessageIsShown ? (
          <div className="successMessage">
            <div>
              <CheckGroup />
            </div>
            <div className="successMessage-title">
              <span>{msgs.contactUs.successTitle}</span>
            </div>
            <div className="successMessage-text">
              <span>{msgs.contactUs.success}</span>
            </div>
          </div>
        ) : (
          <div className="contact-us-wrapper">
            <div className="contact-us-info">
              <span>{msgs.contactUs.description}</span>
            </div>
            <div className="contact-us-title">
              <span>{msgs.contactUs.title}</span>
            </div>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: msgs.common.validations.required }]}
              >
                <Input placeholder="Type Full Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Your Email"
                rules={[{ required: true, message: msgs.common.validations.required }]}
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
                  { required: true, message: msgs.common.validations.required },
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
                  {msgs.common.cancel}
                </Button>
                <Button
                  className="send-btn"
                  onSubmit={handleSubmit}
                  type="primary"
                  htmlType="submit"
                >
                  {msgs.common.submit}
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </Drawer>
    </div>
  );
}


export default ContactUs;