import {
  CallControls,
  CallingState,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { LayoutListIcon, LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

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
            {/* video layout */}
            {layout === "grid" ? <PaginatedGridLayout /> : <SpeakerLayout />}
            {/* show participants */}
            {showParticipants && (
              <div className="absolute right-0 top-0 h-full w-75 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <CallParticipantsList
                  onClose={() => setShowParticipants(false)}
                />
              </div>
            )}
          </div>
          {/* video controls */}
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 flex-wrap justify-center px-4">
                <CallControls onLeave={() => router.push("/")} />
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" className="size-10">
                        <LayoutListIcon className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel>hi</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default MeetingRoom;
