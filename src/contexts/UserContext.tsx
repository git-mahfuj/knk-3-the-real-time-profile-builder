"use client";

import { User } from "lucide-react";
import React, { createContext, useContext, useState } from "react";

interface LinkType {
  platform: string;
  url: string;
}
interface UserType {
  name?: string;
  email?: string;
  bio?: string;
  image?: {
    file: File;
    url: string;
  };
  links?:LinkType[

  ]
}
type UserContextType = {
  user: UserType | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserType | undefined>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};
