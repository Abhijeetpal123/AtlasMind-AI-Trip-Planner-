import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const CreateTripDetail = mutation({
  args: {
    tripId: v.string(),
    uid: v.id("users"),
    tripDetail: v.any(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("TripDetailTable", {
      tripDetail: args.tripDetail,
      tripId: args.tripId,
      uid: args.uid,
    });
  },
});

export const GetUserTrips = query({
  args: { uid: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("TripDetailTable")
      .filter((q) => q.eq(q.field("uid"), args.uid))
      .collect();
  }
})


export const GetUserId = query({
  args: { tripId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("TripDetailTable")
      .filter((q) => q.eq(q.field("tripId"), args.tripId))
      .first()
  }
})