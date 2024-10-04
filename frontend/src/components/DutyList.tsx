import { FC } from "react";
import { List } from "antd";
import { Duty } from "../types/Duty";
import DutyItem from "./DutyItem";

interface Props {
  duties: Duty[];
  dutyIdSelectedForEdit: string | null;
  onEdit: (dutyIdSelectedForEdit: string | null) => void;
  onDelete: (id: string) => void;
  onEditSave: (duty: Duty) => void;
  loading: boolean;
}

const DutyList: FC<Props> = ({
  duties,
  onDelete,
  onEditSave,
  dutyIdSelectedForEdit,
  onEdit,
  loading,
}) => {
  return (
    <List
      size="small"
      loading={loading}
      bordered
      dataSource={duties}
      pagination={{
        position: "bottom",
        align: "center",
        pageSize: 5,
      }}
      renderItem={(duty) => (
        <List.Item>
          <DutyItem
            key={duty.id}
            duty={duty}
            onDelete={onDelete}
            onEditSave={onEditSave}
            dutyIdSelectedForEdit={dutyIdSelectedForEdit}
            onEdit={onEdit}
          />
        </List.Item>
      )}
    />
  );
};

export default DutyList;
