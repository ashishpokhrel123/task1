import React, { useEffect } from "react";
import { Button, Form, notification } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import PMInput from "../../../../components/Form/PmInput";
import TaskService from "../../../../api/Task";

interface FormValues {
  id?: any;
  name: string;
  description: string;
}

interface CreateTaskProps {
  initialValues?: FormValues;
  taskId?: string;
}

const CreateTask: React.FC<CreateTaskProps> = ({ initialValues, taskId }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      let response;
      if (taskId) {
        response = await TaskService.updateTaskById({
          data,
          token: "your-token",
        });
        notification.success({
          message: response?.message,
        });
      } else {
        response = await TaskService.createTask(data);
        notification.success({
          message: response?.message,
        });
      }
      reset();
    } catch (error) {
      console.error("Error submitting task:", error);

      // Check if the error response has a message and display it
      const errorMessage =
        error?.response?.data?.message ||
        "There was an error submitting the task. Please try again.";

      notification.error({
        message: "Task Submission Failed",
        description: errorMessage,
      });
    }
  };

  return (
    <Form onFinish={handleSubmit(handleFormSubmit)} layout="vertical">
      <PMInput
        name="title"
        type="normal"
        control={control}
        label="Title"
        error={errors.name?.message}
        placeholder="Enter the title"
        required
        rules={{ required: "Title is required" }}
        register={register}
        parentClass="form-item"
      />

      <PMInput
        name="description"
        type="normal"
        control={control}
        label="Description"
        error={errors.description?.message}
        placeholder="Enter the description"
        required
        rules={{ required: "Description is required" }}
        register={register}
        parentClass="form-item"
      />

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {taskId ? "Update" : "Add"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask;
