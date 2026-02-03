"use client";

import { useUser } from "@clerk/nextjs";
import { StreamVideoClient } from "@stream-io/node-sdk";
import { ReactNode, useEffect, useState } from "react";

const StreamClientProvider = ({ children }: { children: ReactNode }) => {
  const [streamVideoClient, setStreamVideoClient] =
    useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!user || !isLoaded) return;
  }, [user, isLoaded]);
};

export default StreamClientProvider;
