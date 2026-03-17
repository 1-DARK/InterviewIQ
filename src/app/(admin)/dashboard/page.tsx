"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import toast from "react-hot-toast";
import { Id } from "../../../../convex/_generated/dataModel";
import LoaderUI from "@/components/LoaderUI";
import { groupInterviews } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

  if (!interviews || !users) return <LoaderUI />;

  const groupedInterviews = groupInterviews(interviews);

  return (
    <div className=" container mx-auto py-10">
      <div className="flex items-center mb-8">
        <Link href="/schedule">
          <Button>Schedule New Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardPage;
