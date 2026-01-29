import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("Missing CLERK_WEBHOOK_SECRET env variable");
    }

    const svix_id = request.headers.get("svix-id"); // unique ID of the webhook event
    const svix_signature = request.headers.get("svix-signature"); // when the event was sent
    const svix_timestamp = request.headers.get("svix-timestamp"); // cryptographic signature

    if (!svix_id || !svix_signature || !svix_timestamp) {
      return new Response("No svix headers found", {
        status: 400,
      });
    }
  }),
});
