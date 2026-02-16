"use client";

import useGetCalls from "@/hooks/useGetCalls";

function RecordingPage() {
  const { calls, isLoading } = useGetCalls();
  return <div>record</div>;
}

export default RecordingPage;
