"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function Line() {
  const option = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    fill: {
      type: "gradient",
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  return (
    <div className="p-2 flex flex-col h-fit border-[#dfdfdf] border rounded-md">
      <div className="text-[#777] font-semibold m-2">Line Chart</div>
      <ApexChart
        type="line"
        options={option}
        series={series}
        height={155}
        width={400}
      />
    </div>
  );
}
