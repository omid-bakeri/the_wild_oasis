/* eslint-disable no-unused-vars */
import { toast } from "react-hot-toast";
import supabase from "./supabase.js";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be Loaded.");
  }
  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted.");
  }
  return data;
}

export async function createCabins(elementData) {
  // 1. create cabin

  const imageName = `${elementData.image.name}`.replaceAll("/", "");

  // url
  const imageUrl = `https://osbxuuhbjdwzxezghtga.supabase.co/storage/v1/object/public/cabin-images/${imageName}`;

  // 2. upload image

  //https://osbxuuhbjdwzxezghtga.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  // true
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, elementData.image);

  // true

  const { data, error } = await supabase
    .from("cabins")
    .insert({ ...elementData, image: imageUrl });

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted.");
  }

  // 3. delete the cabin if image not uploaded

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    toast.error("error can not upload image !");
  }

  return data;
}
