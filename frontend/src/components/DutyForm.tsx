import { FC } from "react";
import { Button, Form, FormInstance, FormProps, Input, Space } from "antd";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";

interface DutyFormProps {
  form: FormInstance;
  onFinish: (values: FormProps["onFinish"]) => void;
}

const DutyForm: FC<DutyFormProps> = ({ form, onFinish }) => {
  return (
    <Form
      form={form}
      layout="inline"
      onFinish={onFinish}
      data-testid="duty-form"
    >
      <Space.Compact style={{ width: "100%" }}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Duty cannot be empty!" }]}
          className="duty-name-field"
          style={{ flexGrow: 1 }}
        >
          <Input
            placeholder="Enter duty name"
            prefix={<UnorderedListOutlined />}
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          icon={<PlusOutlined />}
          data-testid="duty-form-submit-btn"
        />
      </Space.Compact>
    </Form>
  );
};

export default DutyForm;
