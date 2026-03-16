"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

function DashboardPage() {
  const users = useQuery(api.users.getUsers);
  return <div>Dash</div>;
}

export default DashboardPage;
