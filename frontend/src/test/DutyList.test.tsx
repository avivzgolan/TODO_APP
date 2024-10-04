import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "./utils/matchMedia.mock";
import DutyList from "../components/DutyList";

const mockDuties = [
  { id: "1", name: "Duty One" },
  { id: "2", name: "Duty Two" },
];

test("DutyList renders correctly with multiple duties", () => {
  render(
    <DutyList
      onEdit={jest.fn()}
      dutyIdSelectedForEdit={null}
      loading={false}
      duties={mockDuties}
      onEditSave={jest.fn()}
      onDelete={jest.fn()}
    />
  );
  expect(screen.getByText(mockDuties[0].name)).toBeInTheDocument();
  expect(screen.getByText(mockDuties[1].name)).toBeInTheDocument();
});

test("DutyList renders an empty message if no duties are present", () => {
  render(
    <DutyList
      onEdit={jest.fn()}
      dutyIdSelectedForEdit={null}
      loading={false}
      duties={[]}
      onEditSave={jest.fn()}
      onDelete={jest.fn()}
    />
  );
  expect(screen.getByText("No data")).toBeInTheDocument();
});

test("calls the onEditSave handler when clicking Edit button", () => {
  const setDutyIdSelectedForEditMock = jest.fn();

  render(
    <DutyList
      onEdit={setDutyIdSelectedForEditMock}
      dutyIdSelectedForEdit={null}
      loading={false}
      duties={mockDuties}
      onEditSave={jest.fn()}
      onDelete={jest.fn()}
    />
  );

  const editButton = screen.getByTestId(
    `duty-item-edit-button-${mockDuties[0].id}`
  );
  fireEvent.click(editButton);

  expect(setDutyIdSelectedForEditMock).toHaveBeenCalledTimes(1);
});
