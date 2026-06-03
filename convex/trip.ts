import { v } from "convex/values";
import { mutation, query } from "./_generated/server";


export const ShareTrip = mutation({
    args: { tripId: v.string() },
    handler: async (ctx, args) => {
        // generate unique share token
        const shareToken = Math.random().toString(36).substring(2, 15)

        //Update Tripdetail Table 
        const trip = await ctx.db
            .query("TripDetailTable")
            .filter((q) => q.eq(q.field("tripId"), args.tripId))
            .first()

        if (!trip) throw new Error("Trip not Found ")

        // Add new Field
        await ctx.db.patch(trip._id, {
            isPublic: true,
            shareToken: shareToken,

        });
        return shareToken;
    }
})

export const GetPublicTrip = query({
    args: { shareToken: v.string() },
    handler: async (ctx, args) => {
        //fetch trip from sharetoken 
        const trip = await ctx.db
            .query("TripDetailTable")
            .filter((q) => q.eq(q.field("shareToken"), args.shareToken))
            .first();

        if (!trip || !trip.isPublic) throw new Error("Trip not found or Not Public")
 return trip;
    }
})