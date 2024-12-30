import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserData } from "@/app/types";
import UserForm from "../Form/UserForm";

interface AddUserDialogProps {
  onAddUser: (newUser: UserData) => Promise<string | null>;
}

const AddUserDialog: React.FC<AddUserDialogProps> = ({ onAddUser }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
          + Add User
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md w-full z-50 mx-auto sm:mx-0">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
        </DialogHeader>
        <UserForm
          onSubmit={async (data) => {
            const error = await onAddUser(data);
            return error;
          }}
          onCancel={() => setIsDialogOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
