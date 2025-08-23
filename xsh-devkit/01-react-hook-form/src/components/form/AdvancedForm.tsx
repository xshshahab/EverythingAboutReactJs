import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

const AdvancedForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormState>();

  const onSubmit: SubmitHandler<FormState> = (data) => {
    console.log("Data: ", data);
    reset();
  };

  return (
    <div className="w-full max-w-2xl p-6 mx-auto bg-gray-900 border border-gray-800 shadow-lg rounded-2xl">
      <h2 className="mb-6 text-xl font-semibold text-gray-100">
        Registration Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* First & Last Name in one line */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1 text-sm text-gray-300">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className="px-3 py-2 text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("firstName", {
                required: "First Name is required",
                minLength: {
                  value: 3,
                  message: "First Name must be at least 3 characters",
                },
              })}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-400">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-1 text-sm text-gray-300">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="px-3 py-2 text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("lastName", {
                required: "Last Name is required",
                minLength: {
                  value: 3,
                  message: "Last Name must be at least 3 characters",
                },
              })}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-400">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
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

        {/* City & State in one line */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="city" className="mb-1 text-sm text-gray-300">
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              className="px-3 py-2 text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("city", {
                required: "City is required",
                minLength: {
                  value: 2,
                  message: "City must be at least 2 characters",
                },
              })}
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-400">{errors.city.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="state" className="mb-1 text-sm text-gray-300">
              State
            </label>
            <input
              type="text"
              id="state"
              placeholder="Enter your state"
              className="px-3 py-2 text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("state", {
                required: "State is required",
                minLength: {
                  value: 2,
                  message: "State must be at least 2 characters",
                },
              })}
            />
            {errors.state && (
              <p className="mt-1 text-sm text-red-400">
                {errors.state.message}
              </p>
            )}
          </div>
        </div>

        {/* Zip & Country in one line */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="zip" className="mb-1 text-sm text-gray-300">
              Zip Code
            </label>
            <input
              type="text"
              id="zip"
              placeholder="Enter your zip code"
              className="px-3 py-2 text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("zip", {
                required: "Zip code is required",
                pattern: {
                  value: /^[0-9]{5,6}$/,
                  message: "Zip code must be 5 or 6 digits",
                },
              })}
            />
            {errors.zip && (
              <p className="mt-1 text-sm text-red-400">{errors.zip.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="country" className="mb-1 text-sm text-gray-300">
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="Enter your country"
              className="px-3 py-2 text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("country", {
                required: "Country is required",
                minLength: {
                  value: 3,
                  message: "Country must be at least 3 characters",
                },
              })}
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-400">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>

        {/* Complete Address */}
        <div className="flex flex-col">
          <label
            htmlFor="completeLocation"
            className="mb-1 text-sm text-gray-300"
          >
            Complete Address
          </label>
          <textarea
            id="completeLocation"
            placeholder="Enter your full address"
            rows={3}
            className="px-3 py-2 text-gray-100 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("completeLocation", {
              required: "Complete location is required",
              minLength: {
                value: 10,
                message: "Address must be at least 10 characters",
              },
            })}
          />
          {errors.completeLocation && (
            <p className="mt-1 text-sm text-red-400">
              {errors.completeLocation.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 text-white transition duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AdvancedForm;
