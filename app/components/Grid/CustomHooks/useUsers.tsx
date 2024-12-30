import queryClient from "../../../react-query-client";
import { UserData } from "@/app/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<UserData[], Error>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.error || "Failed to fetch users");
        return [];
      }
      return res.json();
    },
  });

  const { mutateAsync: addUser } = useMutation({
    mutationFn: async (newUser: UserData) => {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.error || "Failed to add user");
        return null;
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const { mutateAsync: deleteUser } = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch("/api/users", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.error || "Failed to delete user");
        return null;
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const { mutateAsync: updateUser } = useMutation({
    mutationFn: async (user: UserData) => {
      const res = await fetch("/api/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.error || "Failed to update user");
        return null;
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return {
    users,
    error,
    isLoading,
    addUser,
    deleteUser,
    updateUser,
  };
};
