import { PricingTable } from "@clerk/nextjs";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50/50 px-4 py-20 ">
      <div className=" text-center mb-12 space-y-4">
        <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
          {" "}
          💎 Simple Pricing
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] tracking-tight">
          {" "}
          Choose Your Plan
        </h1>
        <p className="text-gray-500  text-base mx-auto max-w-md leading-relaxed">
          Start Free, upgrade when you're ready. No Hidden Fees{" "}
        </p>
      </div>

      {/*  Pricing Table */}
      <div className="max-w-3xl mx-auto">
        <PricingTable />
      </div>

      <div className="flex items-center justify-center gap-6 mt-10 text-xs text-gray-400">
        <span> ✅ No Credit Card Required </span>
        <span>✅ Cancel Anytime </span>
        <span> ✅Free Forever Plan</span>
      </div>
    </div>
  );
}
