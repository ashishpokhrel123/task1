import React, { useEffect, useRef } from "react";
import { Alert, Button, Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { updateUserDetails } from "../../../../../store/userSlice";
import { isValidEmail } from "../../../../../helper/helper";
import AuthService from "../../../../../api/Auth";

interface ILogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<any>(null);

  const { handleSubmit, control } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginHandler = async (data: ILogin) => {
    try {
      const formattedData = { ...data, email: data.email.toLowerCase() };
      const response = await AuthService.login(formattedData);
      if (response) {
        dispatch(updateUserDetails(formattedData));
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-200 p-6 rounded shadow-lg max-w-md w-full">
        <h4 className="text-xl mb-5 text-center">Login</h4>
        <form onSubmit={handleSubmit(loginHandler)}>
          <Space size="large" direction="vertical" className="w-full">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required!",
                validate: (email) =>
                  isValidEmail(email) ||
                  "The email you’ve entered is incorrect. Please, try again.",
              }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    autoComplete="new-password"
                    placeholder="Email*"
                    type="text"
                    {...field}
                    ref={inputRef}
                  />
                  {error && (
                    <div className="mt-1 mb-4">
                      <Alert
                        message={
                          <span className="text-red-400">{error.message}</span>
                        }
                        type="error"
                      />
                    </div>
                  )}
                </>
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required!" }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input.Password
                    autoComplete="new-password"
                    placeholder="Password*"
                    {...field}
                  />
                  {error && (
                    <div className="mt-1 mb-4">
                      <Alert
                        message={
                          <span className="text-red-400">{error.message}</span>
                        }
                        type="error"
                      />
                    </div>
                  )}
                </>
              )}
            />
            <Button
              size="large"
              className="w-full bg-blue-500 text-white"
              htmlType="submit"
            >
              Login
            </Button>
          </Space>
        </form>
      </div>
    </div>
  );
};

export default Login;
