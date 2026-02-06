import {
  CallingState,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";

function MeetingRoom() {
  const router = useRouter();
  const [layout, setLayout] = useState<"grid" | "speaker">("speaker");
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState(); // use to check for join or not

  if (callingState !== CallingState.JOINED) {
    return (
      <div className="h-96 flex items-center justify-center">
        <LoaderIcon className="size-6 animate-spin" />
      </div>
    );
  }
  return (
    <div className="h-[calc(100vh-4rem-1px)]">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={300} className="relative">
          <div className="absolute inset-0">
            {layout === "grid" ? <PaginatedGridLayout /> : <SpeakerLayout />}
            {showParticipants && (
              <div className="absolute right-0 top-0 h-full w-75 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <CallParticipantsList
                  onClose={() => setShowParticipants(false)}
                />
              </div>
            )}
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel>hi</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default MeetingRoom;
