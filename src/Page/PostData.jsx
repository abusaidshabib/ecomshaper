import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://api-abusaidshabib.vercel.app/medicine/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("post successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form className="px-20 grid gap-5" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl">Post Medicine</h1>
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("manufacturer")}
        placeholder="manufacturer"
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("brand")}
        placeholder="brand"
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("generic")}
        placeholder="generic"
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("strength")}
        placeholder="strength"
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("description")}
        placeholder="description"
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("price")}
        placeholder="price"
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("useFor")}
        placeholder="useFor"
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("dar")}
        placeholder="dar"
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("lastdate")}
        placeholder="lastdate"
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("quantity")}
        placeholder="quantity"
      />
      <input
        className="outline-none w-full p-3 bg-blue-600 text-white placeholder:text-white capitalize text-lg rounded-md"
        {...register("revenue")}
        placeholder="revenue"
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

export default PostData;
