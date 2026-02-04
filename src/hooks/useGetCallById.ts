import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useState } from "react";

const useGetCallById = (id: string) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(false);

  const client = useStreamVideoClient();
};

export default useGetCallById;
