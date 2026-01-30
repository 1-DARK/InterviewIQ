import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const addComment = mutation({
  // mutation for  write operation on database
  args: {
    interviewId: v.id("interviews"),
    content: v.string(),
    rating: v.number(),
  },
  handler: async (ctx, args) => {
    const identify = await ctx.auth.getUserIdentity();
    if (!identify) throw new Error("User is not authenticated");

    return await ctx.db.insert("comments", {
      interviewId: args.interviewId,
      content: args.content,
      rating: args.rating,
      interviewerId: identify.subject,
    });
  },
});
