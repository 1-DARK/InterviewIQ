"use client";
import LoaderUI from "@/components/LoaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const { isInterviewer, isLoading } = useUserRole();

  if (isLoading) return <LoaderUI />;
  return <div>schedule</div>;
}

export default page;
