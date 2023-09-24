/* eslint-disable no-unused-vars */
import styled from "styled-components";

import Form from "../../ui/Form.jsx";
import Input from "../../ui/Input";
import useSetting from "./useSetting.js";
import Spinner from "../../ui/Spinner.jsx";
import { toast } from "react-hot-toast";
import updateSetting from "./updateSetting.js";
// import { Button } from "../../ui/Button.jsx";

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

function UpdateSettingsForm() {
  const { isLoading, error, settingData } = useSetting();

  const { isSaving, updateSettings } = updateSetting();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    toast.error("Error please check the internet");
  }

  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    BreakfastPrice,
  } = settingData;

  // console.log(settingData);

  function handleUpdateSettings(value, field) {
    // console.log(value);

    if (!value) {
      console.log("Error");
    }

    updateSettings({ [field]: value });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <label className="font-semibold text-2xl">Minimum Nights/Booking</label>
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) =>
            handleUpdateSettings(e.target.value, "minBookingLength")
          }
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <label className="font-semibold text-2xl">Maximum Nights/Booking</label>
        <Input
          type="number"
          onBlur={(e) =>
            handleUpdateSettings(e.target.value, "maxGuestsPerBooking")
          }
          id="max-nights"
          defaultValue={maxBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <label className="font-semibold text-2xl">Maximum guests/Booking</label>
        <Input
          onBlur={(e) =>
            handleUpdateSettings(e.target.value, "maxGuestsPerBooking")
          }
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <label className="font-semibold text-2xl">Breakfast Price</label>
        <Input
          onBlur={(e) => handleUpdateSettings(e.target.value, "BreakfastPrice")}
          type="number"
          id="breakfast-price"
          defaultValue={BreakfastPrice}
        />
      </FormRow>
      {/* <button
        type="submit "
        className="bg-[#4338ca] mt-2
           text-white px-8 py-3 text-[1.8rem] rounded-lg"
      >
        Save
      </button> */}
    </Form>
  );
}

export default UpdateSettingsForm;
