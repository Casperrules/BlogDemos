"use client";

import dynamic from "next/dynamic";

const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Mixed() {
  const option = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997],
    },
  };

  const series = [
    {
      name: "series1",
      type: "line",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      type: "column",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "series3",
      type: "line",
      data: [23, 11, 22, 27, 13, 22, 37],
    },
  ];

  return (
    <div className="p-2 flex flex-col h-fit border-[#dfdfdf] border rounded-md">
      <div className="text-[#777] font-semibold m-2">Some Title for Chart</div>
      <Charts
        type="line"
        options={option}
        series={series}
        height={360}
        width={"100%"}
      />
    </div>
  );
}
