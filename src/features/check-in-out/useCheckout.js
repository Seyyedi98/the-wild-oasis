/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  //  mutate: checkin is mutationFn
  // We pass booking id and breakfast to update booking. It updates status and isPaid in db.
  // Then ...breakfast is an obj.
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    // to pass more than one parameter, use {}
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    // data is exach data returned from mutation fucntion
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      // { active: true } meand invalidate all the queries that currently active on the page.
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while checking out"),
  });

  return { checkout, isCheckingOut };
}
