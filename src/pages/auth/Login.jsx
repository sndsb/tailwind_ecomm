import React from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const validationSchema = yup.object({
  phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{8,12}$/, "Phone number must be between 8 and 12 digits")
});

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    
  };

  return (
    <div className="max-container w-full max-w-xs padding-y">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            {...register('phone_number')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Phone Number"
          />
          {errors.phone_number && (
            <p className="text-red-500 text-xs italic">{errors.phone_number.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Siging in' : 'Sign in' }
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;
