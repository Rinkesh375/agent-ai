import { streamVideo } from "@/lib/stream-video";

export async function connectAgentToCall(meetingId: string, agent: any) {
  const call = streamVideo.video.call("default", meetingId);

  const realTimeClient = await streamVideo.video.connectOpenAi({
    call,
    openAiApiKey: process.env.OPEN_AI_KEY!,
    agentUserId: agent.id,
  });

  realTimeClient.updateSession({
    instructions: agent.instructions,
  });

  return realTimeClient;
}