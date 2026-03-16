import useMeetingActions from "@/hooks/useMeetingActions";
import { Doc } from "../../convex/_generated/dataModel";
import { getMeetingStatus } from "@/lib/utils";
import { format } from "date-fns";

type Interview = Doc<"interviews">;
function MeetingCard({ interview }: { interview: Interview }) {
  const { joinMeeting } = useMeetingActions();
  const status = getMeetingStatus(interview);

  const formattedDate = format(
    new Date(interview.startTime),
    "EEEE, MMMM d · h:mm a",
  );
  return <div>hi</div>;
}

export default MeetingCard;
