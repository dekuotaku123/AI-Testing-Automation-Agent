"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Provider({ children }: { children: React.ReactNode }) {
  // Get client-side auth state from Clerk
  const { user, isSignedIn } = useUser();
  const [userDetail, setuserDetail] = useState<any>();

  useEffect(() => {
    // Only call the database if the user is actively signed in
    if (isSignedIn && user) {
      CreateNewUser();
    }
  }, [isSignedIn, user]);

  const CreateNewUser = async () => {
    try {
      const result = await axios.post("/api/users", {});
      console.log("result:", result.data);
      setuserDetail(result.data?.user);
    } catch (error) {
      console.error("Error syncing user to database:", error);
    }
  };

  return (
    <UserDetailContext value={{ userDetail, setuserDetail }}>
      <div>{children}</div>
    </UserDetailContext>
  );
}

export default Provider;
