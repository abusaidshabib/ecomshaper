import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateData = () => {
  const { data } = useLoaderData();
  console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://api-abusaidshabib.vercel.app/medicine/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("update successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="px-40 grid gap-5" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl">Post Medicine</h1>
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("manufacturer")}
        placeholder="manufacturer"
        defaultValue={data?.manufacturer}
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("brand")}
        placeholder="brand"
        defaultValue={data?.brand}
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("generic")}
        placeholder="generic"
        defaultValue={data?.generic}
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("strength")}
        placeholder="strength"
        defaultValue={data?.strength}
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("description")}
        placeholder="description"
        defaultValue={data?.description}
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("price")}
        placeholder="price"
        defaultValue={data?.price}
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("useFor")}
        placeholder="useFor"
        defaultValue={data?.useFor}
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("dar")}
        placeholder="dar"
        defaultValue={data?.dar}
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("lastdate")}
        placeholder="lastdate"
        defaultValue={data?.lastdate}
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("quantity")}
        placeholder="quantity"
        defaultValue={data?.quantity}
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("revenue")}
        placeholder="revenue"
        defaultValue={data?.revenue}
      />
      <p>{errors.firstName?.message}</p>
      <input
        className="bg-blue-900 text-white py-5 rounded-md hover:bg-blue-800"
        type="submit"
      />
      <ToastContainer />
    </form>
  );
};

export default UpdateData;
