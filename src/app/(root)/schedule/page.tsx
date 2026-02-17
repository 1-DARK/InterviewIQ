"use client";
import InterviewScheduleUI from "@/components/InterviewScheduleUI";
import LoaderUI from "@/components/LoaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const { isInterviewer, isLoading } = useUserRole();

  if (isLoading) return <LoaderUI />;
  if (!isInterviewer) return router.push("/");
  return <InterviewScheduleUI />;
}

export default page;
