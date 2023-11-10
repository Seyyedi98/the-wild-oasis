import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // Remove data from query cahce for security
      queryClient.removeQueries();

      // { replace: true }: erace the place that we were erlier. To fix back btn
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
