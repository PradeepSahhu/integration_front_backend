"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [value, setValue] = useState({
    name: "",
    age: "",
    section: "",
    uid: "",
    place: "",
  });
  // http://localhost:3000/api/v1/users/
  const handleSubmit = async () => {
    const res = await axios({
      method: "post",
      url: `http://localhost:3000/api/v1/users/addUser`,
      data: value,
    });
    console.log(res);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setValue({
      ...value,
      [name]: val,
    });
    console.log(value);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mt-[20rem]">
        <form className="gap-y-10 flex-col flex mt-8 text-black">
          <input
            onChange={handleChange}
            name="name"
            className="px-3 py-2 rounded-xl focus:border-none focus:outline-yellow-400"
          />
          <input
            onChange={handleChange}
            name="age"
            className="px-3 py-2 rounded-xl focus:border-0"
          />
          <input
            onChange={handleChange}
            name="section"
            className="px-3 py-2 rounded-xl focus:border-0"
          />
          <input
            onChange={handleChange}
            name="uid"
            className="px-3 py-2 rounded-xl focus:border-0"
          />
          <input
            onChange={handleChange}
            name="place"
            className="px-3 py-2 rounded-xl focus:border-0"
          />
        </form>

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-xl bg-red-600 mt-10 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
