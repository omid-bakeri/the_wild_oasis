/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Form from "../../ui/Form.jsx";
import Textarea from "../../ui/Textarea.jsx";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabins } from "../../services/apiCabins.js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

import FileInput from "../../ui/FileInput.jsx";
import { useState } from "react";
import CreateCabin from "./CreateCabin.js";
// import AddCabin from "./AddCabin.jsx";
import Modal from "../../ui/Modal.jsx";
import { Input } from "postcss";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({ isOpenModal, setIsOpenModal }) {
  const { register, handleSubmit, reset, getValues } = useForm();

  const { isCreating, createMutate } = CreateCabin({ setIsOpenModal });

  function handleMaxCapacityCheck(value) {
    setCapacity(value);
  }

  function onSubmit(data) {
    createMutate({ ...data, image: data.image[0] });
  }

  function onError() {
    toast.error("Please fill in all the fields that have *");
  }

  const [capacity, setCapacity] = useState();
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit, onError)} method="post">
        <FormRow>
          <div className="flex justify-start items-center gap-2">
            <Label htmlFor="name">Cabin name</Label>
            <span className="text-3xl text-red-500">*</span>
          </div>
          <input
            {...register("name", {
              required: "This field is required",
            })}
            id="name"
            type="text"
            className="border-slate-400 border-2 
        px-4 py-3 rounded-sm "
          />
        </FormRow>

        <FormRow>
          <div className="flex justify-start items-center gap-2">
            <Label htmlFor="maxCapacity">Maximum capacity</Label>
            <span className="text-3xl text-red-500">*</span>
          </div>

          <input
            value={capacity}
            onChange={(e) => handleMaxCapacityCheck(e.target.value)}
            defaultValue={0}
            {...register("maxCapacity", {
              required: "This field is required",
            })}
            type="number"
            className="border-slate-400 border-2 
              px-4 py-3 rounded-sm "
          />
        </FormRow>

        <FormRow>
          <div className="flex justify-start items-center gap-2">
            <Label htmlFor="regularPrice">Regular price</Label>
            <span className="text-3xl text-red-500">*</span>
          </div>

          <input
            {...register("regularPrice", {
              required: "This field is required",
            })}
            type="text"
            className="border-slate-400 border-2 
        px-4 py-3 rounded-sm "
          />
        </FormRow>

        <FormRow>
          <div className="flex justify-start items-center gap-2">
            <Label htmlFor="discount">Discount</Label>
            <span className="text-3xl text-red-500">*</span>
          </div>

          <input
            {...register("discount", {
              required: "This field is required",
            })}
            type="text"
            className="border-slate-400 border-2 
        px-4 py-3 rounded-sm "
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="description">Description for website</Label>
          <Textarea
            {...register("description")}
            type="number"
            id="description"
            defaultValue=""
          />
        </FormRow>

        <FormRow>
          <div className="flex justify-start items-center gap-2">
            <Label htmlFor="image">Cabin photo</Label>
            <span className="text-3xl text-red-500">*</span>
          </div>

          <FileInput
            name="image"
            id="image"
            accept="image/*"
            type="file"
            {...register("image", {
              required: "this fiels is required",
            })}
          />
        </FormRow>

        <FormRow>
          <button
            type="submit "
            disabled={isCreating}
            className="bg-[#4338ca]
           text-white px-8 py-3 select-none text-[1.8rem] rounded-lg"
          >
            {isCreating ? "please wait" : "Add new cabin"}
          </button>
          <button
            onClick={() => setIsOpenModal(false)}
            className="cursor-pointer bg-gray-400
           text-white select-none px-8 py-3 text-[1.8rem] 
           rounded-lg"
          >
            Cancel
          </button>
        </FormRow>
      </Form>
    </>
  );
}

export default CreateCabinForm;
