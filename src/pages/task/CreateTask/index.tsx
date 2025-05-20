import { Controller, useForm } from "react-hook-form";
import { Modal } from "../../../components/Modal";
import { Input } from "../../../components";
import {
  Form,
  InputContainer,
  SubTitle,
  Title,
  TitleContainer,
} from "./styles";

interface CreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateTask({ isOpen, onClose }: CreateTaskProps) {
  const { control } = useForm();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form>
        <TitleContainer>
          <Title>Criar tarefa</Title>
          <SubTitle>Antes de continuar, faça seu Login.</SubTitle>
        </TitleContainer>
        <InputContainer>
          <Controller
            name="title"
            control={control}
            render={({ field: { name, value, onChange } }) => (
              <Input
                placeholder="Title"
                name={name}
                value={value}
                onChange={onChange}
                width="400px"
              />
            )}
          />
        </InputContainer>
      </Form>
    </Modal>
  );
}
