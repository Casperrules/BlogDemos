"use client";
import { Donut } from "../charts/donut";
import { Line } from "../charts/line";
import Area from "../charts/mixed";
import Mixed from "../charts/bar-graph";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-between w-full p-2">
      <div>
        <Mixed />
      </div>
      <div className="flex justify-between my-2">
        <Donut />
        <Line />
        <Area />
      </div>
    </div>
  );
}
