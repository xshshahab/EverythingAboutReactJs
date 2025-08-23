import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";

interface FormValidate {
  name: string;
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValidate>();

  const onSubmit: SubmitHandler<FormValidate> = (data) => {
    console.log("Data: ", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 mx-auto space-y-6 bg-gray-900 border border-gray-800 shadow-lg min-w-md rounded-2xl"
    >
      {/* Heading */}
      <h2 className="text-xl font-semibold text-white">Login Form</h2>

      {/* Name */}
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="mb-1 text-sm font-medium text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="px-3 py-2 text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="mb-1 text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your valid email"
          className="px-3 py-2 text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="mb-1 text-sm font-medium text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="px-3 py-2 text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        disabled={isSubmitting}
        className="w-full py-2 text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </Button>
    </form>
  );
};

export default Form;
