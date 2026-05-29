"use client";

import { useMutation } from "convex/react";
import Header from "./_components/Header";
import { api } from "@/convex/_generated/api";
import { useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/useDetailContext";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const createUser = useMutation(api.user.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>();

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      createNewUser();
    }
  }, [user]);

  const createNewUser = async () => {
    if (!user) return;

    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress ?? "",
      imageUrl: user?.imageUrl ?? "",
      name: user?.fullName ?? "",
    });
    setUserDetail(result);
    // console.log(result);
  };

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>
        <Header />
        {children}
      </div>
    </UserDetailContext.Provider>
  );
}

export const useUserDetail = () => {
  return useContext(UserDetailContext);
};
