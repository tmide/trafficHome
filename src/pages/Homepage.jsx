import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/button";
import { CircleChevronRight } from "lucide-react";
import PedestrianActivity from "@/components/PedestrianActivity";
import { VehicleWaitChart } from "@/components/VehichleWaitChart";
import LiveCam from "@/components/LiveCam";
import LaneCharts from "@/components/LaneChartsCard";
import LaneChartsCard from "@/components/LaneChartsCard";
import MiddleBottomLower from "@/components/MiddleBottomLower";
import HeatMap from "@/components/HeatMap";

const Homepage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 lg:h-screen overflow-hidden">
      {/* LEFT SECTION  */}
      <section className="basis-1/4 flex-1 flex flex-col space-y-6 items-center">
        {/* logo  */}
        <Link href="/">
          <span className="text-white text-4xl font-extrabold">LOGO</span>
        </Link>

        {/* buttons  */}
        <div className="flex flex-col space-y-9">
          <Button className="bg-secondary text-primary text-lg px-5 hover:bg-hoverbg hover:text-white">
            Control Room
            <CircleChevronRight className="bg-hoverbg rounded-full text-white !size-5" />
          </Button>
          <Button className="bg-secondary text-primary text-lg px-5 hover:bg-hoverbg hover:text-white">
            Dashboard
            <CircleChevronRight className="bg-hoverbg rounded-full text-white !size-5" />
          </Button>
          <Button className="bg-secondary text-primary text-lg px-5 hover:bg-hoverbg hover:text-white">
            Login
            <CircleChevronRight className="bg-hoverbg rounded-full text-white !size-5" />
          </Button>
          <Button className="bg-secondary text-primary text-lg px-5 hover:bg-hoverbg hover:text-white">
            Logout
            <CircleChevronRight className="bg-hoverbg rounded-full text-white !size-5" />
          </Button>
        </div>

        {/* Pedestrian Activity  */}
        <PedestrianActivity />

        {/* Vehicle wait time chart  */}
        <VehicleWaitChart />
      </section>

      {/* MIDDLE SECTION  */}
      <section className="basis-3/5 flex-1 flex flex-col space-y-5 items-center ">
        <LiveCam />
        <LaneChartsCard />
        <MiddleBottomLower />
      </section>

      {/* RIGHT SECTION  */}
      <section className="basis-1/5 flex-1">
        <HeatMap />
      </section>
    </div>
  );
};

export default Homepage;
