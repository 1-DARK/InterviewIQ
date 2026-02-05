import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const useGetCallById = (id: string | string[] | undefined) => {
  const [call, setCall] = useState<Call>();
  const [isCallLoading, setIsCallLoading] = useState(false);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client) return;
    const getCall = async () => {
      setIsCallLoading(true);
      try {
        const { calls } = await client.queryCalls({
          // get current call id
          filter_conditions: {
            id,
          },
        });
        if (calls.length > 0) setCall(calls[0]);
      } catch (error) {
        console.log(error);
        setCall(undefined);
      } finally {
        setIsCallLoading(false);
      }
    };

    getCall();
  }, [client, id]);

  return { call, isCallLoading };
};

export default useGetCallById;
