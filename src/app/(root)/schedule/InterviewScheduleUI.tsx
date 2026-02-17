import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";

function InterviewScheduleUI() {
  const client = useStreamVideoClient();
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const interviews = useQuery(api.interview.getAllInterviews);
  const users = useQuery(api.users.getUsers);
  const createInterview = useMutation(api.interview.createInterview);
  return <div>hi schedule</div>;
}

export default InterviewScheduleUI;
