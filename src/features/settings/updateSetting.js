/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { toast } from "react-hot-toast";

export default function updateSetting() {
  const queryClient = useQueryClient();
  const { isLoading: isSaving, mutate: updateSettings } = useMutation({
    mutationFn: updateSettingApi,
    mutationKey: "setting",

    onSuccess: () => {
      toast.success("Setting successfully updated.");
      queryClient.invalidateQueries({
        queryKey: ["setting"],
      });
    },

    onError: () => {
      toast.error("Can not updated setting please try again");
    },
  });

  return { isSaving, updateSettings };
}
