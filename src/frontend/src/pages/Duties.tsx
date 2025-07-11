import { useEffect, useState } from "react";
import { Card, Flex, Form, FormProps } from "antd";
import DutyForm from "../components/DutyForm";
import DutyList from "../components/DutyList";
import { Duty } from "../types/Duty";
import { dutyRepository } from "../repositories/duty";

export const Duties = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [duties, setDuties] = useState<Duty[]>([]);
  const [dutyIdSelectedForEdit, setDutyIdSelectedForEdit] = useState<
    string | null
  >(null);

  useEffect(() => {
    const fetchDuties = async () => {
      try {
        const { data: duties } = await dutyRepository.get<Duty[]>("");
        if (duties) {
          setDuties(duties);
        }
      } catch (error) {
        console.error("Failed to fetch duties:", error);
      }
    };
    setLoading(true);
    fetchDuties().finally(() => setLoading(false));
  }, []);

  const handleAddDuty = (newDuty: Duty) => {
    setDuties((prevDuties) => [...prevDuties, newDuty]);
  };

  const handleDeleteDuty = async (id: string) => {
    try {
      await dutyRepository.delete(`/${id}`);
      setDuties((prevDuties) => prevDuties.filter((duty) => duty.id !== id));
    } catch (error) {
      console.error("Failed to delete duty:", error);
    }
  };

  const handleEditDuty = async (duty: Duty) => {
    try {
      const { data: updatedDuty } = await dutyRepository.put(`/${duty.id}`, {
        name: duty.name,
      });
      const updatedDutyIndex = duties.findIndex(
        (duty) => duty.id === updatedDuty.id
      );
      if (updatedDutyIndex >= 0) {
        setDuties((prevState) => [
          ...prevState.slice(0, updatedDutyIndex),
          updatedDuty,
          ...prevState.slice(updatedDutyIndex + 1),
        ]);
        setDutyIdSelectedForEdit(null);
      } else {
        throw new Error("Duty not found");
      }
    } catch (error) {
      console.error("Failed to update duty:", error);
    }
  };

  const handleFinish: FormProps["onFinish"] = async ({ name }) => {
    try {
      const { data: newDuty } = await dutyRepository.post("", { name });
      handleAddDuty(newDuty);
      form.resetFields();
    } catch (error) {
      console.error("Failed to add duty:", error);
    }
  };

  return (
    <Flex style={{ height: "100vh" }} justify="center" align="center" vertical>
      <Card title="Duty List" style={{ width: 400 }}>
        <Flex vertical gap={25}>
          <DutyForm form={form} onFinish={handleFinish} />
          <DutyList
            loading={loading}
            duties={duties}
            onDelete={handleDeleteDuty}
            onEditSave={(duty) => {
              handleEditDuty(duty);
            }}
            dutyIdSelectedForEdit={dutyIdSelectedForEdit}
            onEdit={setDutyIdSelectedForEdit}
          />
        </Flex>
      </Card>
    </Flex>
  );
};
