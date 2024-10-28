import React, { useState, ChangeEvent } from "react";
import {
  Table,
  Button,
  Checkbox,
  Typography,
  Space,
  Input,
  Modal,
  Form,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/lib/table";
import CreateTask from "../Form/components/task";

const { Text } = Typography;

interface Task {
  key: string;
  task: string;
  description: string;
  status: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [searchText, setSearchText] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [form] = Form.useForm();

  const handleDelete = (key: string): void => {
    setTasks(tasks.filter((task) => task.key !== key));
  };

  const handleUpdate = (key: string): void => {
    const taskToEdit = tasks.find((task) => task.key === key);
    if (taskToEdit) {
      setEditingTask(taskToEdit);
      form.setFieldsValue({
        task: taskToEdit.task,
        description: taskToEdit.description,
      });
      setIsModalVisible(true);
    }
  };

  const handleCompletionChange = (key: string): void => {
    setTasks(
      tasks.map((task) =>
        task.key === key ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleAddOrEditTask = (values: any) => {
    if (editingTask) {
      const updatedTasks = tasks.map((task) =>
        task.key === editingTask.key
          ? { ...task, task: values.task, description: values.description }
          : task
      );
      setTasks(updatedTasks);
    } else {
      // Add new task
      const newTask: Task = {
        key: String(tasks.length + 1),
        task: values.task,
        description: values.description,
        status: "Not Started",
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
    setIsModalVisible(false);
    form.resetFields();
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.task.toLowerCase().includes(searchText) ||
      task.description.toLowerCase().includes(searchText) ||
      task.status.toLowerCase().includes(searchText)
  );

  const columns: ColumnsType<Task> = [
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
      sorter: (a, b) => a.task.localeCompare(b.task),
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "Completed",
      key: "completed",
      render: (_, record) => (
        <Checkbox
          checked={record.completed}
          onChange={() => handleCompletionChange(record.key)}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleUpdate(record.key)}
          >
            Update
          </Button>
          <Button
            type="dashed"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.key)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search tasks"
          value={searchText}
          onChange={handleSearch}
          prefix={<SearchOutlined />}
          allowClear
          style={{ width: 300 }}
        />
        <Button
          type="primary"
          onClick={() => {
            setIsModalVisible(true);
            setEditingTask(null);
            form.resetFields();
          }}
          style={{ marginLeft: 8 }}
        >
          Add Task
        </Button>
      </Space>
      <Table<Task>
        dataSource={filteredTasks}
        columns={columns}
        rowKey="key"
        pagination={{ pageSize: 5 }}
      />
      <Modal
        title={editingTask ? "Edit Task" : "Add New Task"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <CreateTask
          onSubmit={handleAddOrEditTask}
          initialValues={
            editingTask
              ? {
                  name: editingTask?.task,
                  description: editingTask.description,
                }
              : undefined
          }
          taskId={editingTask ? editingTask.key : undefined} // Pass the task ID for editing
        />
      </Modal>
    </div>
  );
};

export default TaskList;
