import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Form } from "antd";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import "./utils/matchMedia.mock";
import DutyForm from "../components/DutyForm";
import { BACKEND_URL } from "../constants";

const FormWrapper = (props: any) => {
  const [form] = Form.useForm();

  return <DutyForm form={form} {...props} />;
};

let mock: MockAdapter;

beforeEach(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.restore();
});

test("calls onSubmit with valid data", async () => {
  mock.onPost(`${BACKEND_URL}/duties`).reply(200, { id: 1, name: "New Duty" });

  const onSubmitMock = jest.fn().mockResolvedValueOnce({});
  render(<FormWrapper onFinish={onSubmitMock} />);

  const input: HTMLInputElement =
    screen.getByPlaceholderText("Enter duty name");
  const submitButton = screen.getByTestId("duty-form-submit-btn");

  fireEvent.change(input, { target: { value: "New Duty" } });
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(onSubmitMock).toHaveBeenCalledWith(
      expect.objectContaining({ name: "New Duty" })
    );
  });
});

test("does not submit when name is empty", () => {
  const onSubmitMock = jest.fn();
  render(<FormWrapper onFinish={onSubmitMock} />);

  const submitButton = screen.getByTestId("duty-form-submit-btn");
  fireEvent.click(submitButton);

  expect(onSubmitMock).not.toHaveBeenCalled();
});
