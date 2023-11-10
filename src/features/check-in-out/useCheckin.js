/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  //  mutate: checkin and isLoading is data recieved from mutationFn | But here I think it calles mutationFn
  // We pass booking id and breakfast to update booking. It updates status and isPaid in db.
  // Then ...breakfast is an obj.
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    // to pass more than one parameter, use {}
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    // data is exach data returned from mutation fucntion
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      // { active: true } meand invalidate all the queries that currently active on the page.
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error("There was an error while checking in"),
  });

  return { checkin, isCheckingIn };
}
