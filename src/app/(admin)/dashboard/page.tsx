"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import toast from "react-hot-toast";
import { Id } from "../../../../convex/_generated/dataModel";

function DashboardPage() {
  const users = useQuery(api.users.getUsers);
  const interviews = useQuery(api.interview.getAllInterviews);
  const updateStatus = useMutation(api.interview.updateInterviewStatus);

  const handleStatusUpdate = async (
    interviewId: Id<"interviews">,
    status: string,
  ) => {
    try {
      await updateStatus({ id: interviewId, status });
      toast.success(`Interview marked as ${status}`);
    } catch (error) {
      toast.error("Failed to update status");
    }
  };
  return <div>Dash</div>;
}

export default DashboardPage;
