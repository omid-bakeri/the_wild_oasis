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

function CreateCabinForm({ setShowCreateCabin }) {
  function handleCancelCreateCabin() {
    setShowCreateCabin(false);
  }
  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      toast.success("cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });

      navigate("/");
    },
    onError: (err) => toast.err(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }
  return (
    <>
      <div
        className="flex justify-center 
      p-4 items-center absolute
     gap-3 top-0 bottom-0"
      >
        <Form onSubmit={handleSubmit(onSubmit)} method="post">
          <FormRow>
            <Label htmlFor="name">Cabin name</Label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="border-slate-400 border-2 
        px-4 py-3 rounded-sm "
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="maxCapacity">Maximum capacity</Label>
            {/* <Input type="number" id="maxCapacity" /> */}
            <input
              {...register("maxCapacity")}
              type="number"
              className="border-slate-400 border-2 
        px-4 py-3 rounded-sm "
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="regularPrice">Regular price</Label>
            {/* <Input type="number" id="regularPrice" /> */}
            <input
              {...register("regularPrice")}
              type="text"
              className="border-slate-400 border-2 
        px-4 py-3 rounded-sm "
            />
          </FormRow>

          <FormRow>
            <Label htmlFor="discount">Discount</Label>
            <input
              {...register("discount")}
              type="text"
              className="border-slate-400 border-2 
        px-4 py-3 rounded-sm "
            />
            {/* <Input type="number" id="discount" defaultValue={0} /> */}
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
            <Label htmlFor="image">Cabin photo</Label>
            <input
              {...register("image")}
              type="file"
              className="border-slate-400 border-2 
        px-4 py-3 rounded-sm "
            />
          </FormRow>

          <FormRow>
            {/* type is an HTML attribute! */}
            {/* <Button variation="secondary" type="reset"> */}
            <button
              onClick={() => handleCancelCreateCabin()}
              className="bg-slate-400
           text-white px-8 py-3 text-[1.8rem] rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit "
              disabled={isCreating}
              className="bg-[#4338ca]
           text-white px-8 py-3 text-[1.8rem] rounded-lg"
            >
              Add new cabin
            </button>
          </FormRow>
        </Form>
      </div>
    </>
  );
}

export default CreateCabinForm;
