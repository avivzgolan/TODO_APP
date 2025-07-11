import { FC, useState } from "react";
import { Button, Flex, Input, Space } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Duty } from "../types/Duty";

interface DutyItemProps {
  duty: Duty;
  dutyIdSelectedForEdit: string | null;
  onEdit: (dutyIdSelectedForEdit: string | null) => void;
  onDelete: (id: string) => void;
  onEditSave: (duty: Duty) => void;
}

const DutyItem: FC<DutyItemProps> = ({
  duty,
  dutyIdSelectedForEdit,
  onEdit,
  onDelete,
  onEditSave,
}) => {
  const [name, setName] = useState(duty.name);

  return (
    <Flex style={{ width: "100%" }} align="center" justify="space-between">
      {dutyIdSelectedForEdit === duty.id ? (
        <Flex
          style={{ width: "100%" }}
          align="center"
          justify="space-between"
          gap={5}
        >
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            allowClear
          />
          <Space>
            <Button
              onClick={(): void => {
                onEdit(duty.id);
                onEditSave({
                  id: duty.id,
                  name,
                });
              }}
              icon={<SaveOutlined />}
              data-testid={`duty-item-save-button-${duty.id}`}
            />
            <Button
              onClick={() => onEdit(null)}
              icon={<StopOutlined />}
              data-testid={`duty-item-cancel-button-${duty.id}`}
            />
          </Space>
        </Flex>
      ) : (
        <Flex
          style={{ width: "100%" }}
          align="center"
          justify="space-between"
          gap={5}
        >
          <span>{duty.name}</span>
          <Space>
            <Button
              onClick={() => onEdit(duty.id)}
              icon={<EditOutlined />}
              data-testid={`duty-item-edit-button-${duty.id}`}
            />
            <Button
              onClick={() => onDelete(duty.id)}
              icon={<DeleteOutlined />}
              data-testid={`duty-item-delete-button-${duty.id}`}
            />
          </Space>
        </Flex>
      )}
    </Flex>
  );
};

export default DutyItem;
