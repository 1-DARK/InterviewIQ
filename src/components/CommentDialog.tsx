import { useState } from "react";
import { Id } from "../../convex/_generated/dataModel";

function CommentDialog({ interviewId }: { interviewId: Id<"interviews"> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("3");
  return <div>hi</div>;
}

export default CommentDialog;
