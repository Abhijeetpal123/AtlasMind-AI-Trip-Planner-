"use client";
import TripOverview from "@/app/create-new-trip/_components/tripoverview";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { toPng } from "html-to-image";
import { use, useState } from "react";

export default function ViewTrip({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = use(params);
  const [shareLink, setShareLink] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const tripData = useQuery(
    api.tripDetail.GetUserId,
    tripId ? { tripId: tripId } : "skip",
  );
  const ShareTrip = useMutation(api.trip.ShareTrip);

  const trip = Array.isArray(tripData) ? tripData[0] : tripData;

  // ✅ handleShare restored
  const handleShare = async () => {
    const token = await ShareTrip({ tripId });
    const link = `${window.location.origin}/share/${token}`;
    setShareLink(link);
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById("trip-content");
    if (!element) return;

    const jsPDF = (await import("jspdf")).default;

    const imgData = await toPng(element, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: "#ffffff",
    });

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const img = new Image();
    img.src = imgData;
    await new Promise((resolve) => (img.onload = resolve));

    const imgWidthPx = img.width;
    const imgHeightPx = img.height;

    const pageHeightPx = (imgWidthPx * pdfHeight) / pdfWidth;

    let remainingHeight = imgHeightPx;
    let offsetY = 0;
    let pageIndex = 0;

    while (remainingHeight > 0) {
      if (pageIndex > 0) pdf.addPage();

      const sliceHeight = Math.min(pageHeightPx, remainingHeight);
      const yPos = -(offsetY * pdfHeight) / pageHeightPx;

      pdf.addImage(imgData, "PNG", 0, yPos, pdfWidth, (imgHeightPx * pdfWidth) / imgWidthPx);

      offsetY += sliceHeight;
      remainingHeight -= sliceHeight;
      pageIndex++;
    }

    pdf.save(`${trip?.tripDetail?.destination}-trip.pdf`);
  };

  // ✅ Loading guard restored
  if (!trip)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading Your Trip....✈️</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
      <div className="mb-6 flex gap-3">
        <button
          onClick={handleShare} 
          className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-all cursor-pointer"
        >
          {copied ? "✅ Copied" : "🔗 Share Trip"}
        </button>
        <button
          onClick={handleDownloadPDF}
          className="bg-[#1a1a2e] text-white px-5 py-2.5 rounded-lg hover:bg-[#2d2d4e] transition-all cursor-pointer"
        >
          📄 Download PDF
        </button>
        {shareLink && (
          <a
            target="_blank"
            href={shareLink}
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-indigo-600 hover:underline truncate"
          >
            {shareLink}
          </a>
        )}
      </div>

      <div id="trip-content">
        <TripOverview trip_plan={trip?.tripDetail} />
      </div>
    </div>
  );
}