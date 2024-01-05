"use client";
import dynamic from "next/dynamic";

const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function Area() {
  const option = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return (
    <div className="p-2 flex flex-col h-fit border-[#dfdfdf] border rounded-md">
      <div className="text-[#777] font-semibold m-2">Area Graph</div>
      <Charts
        type="area"
        options={option}
        series={series}
        height={155}
        width={400}
      />
    </div>
  );
}
