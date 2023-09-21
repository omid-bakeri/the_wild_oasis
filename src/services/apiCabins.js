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
  const { data, error } = await supabase
    .from("cabins")
    .insert([elementData])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted.");
  }
  return data;
}
