import React from "react";
import { LaneCharts } from "./LaneChart";

const LaneChartsCard = () => {
  return (
    <div className="h-56 flex flex-col bg-card w-full items-center justify-center p-4 rounded-xl border-2 border-card-outline text-secondary overflow-hidden">
      <LaneCharts />
    </div>
  );
};

export default LaneChartsCard;
