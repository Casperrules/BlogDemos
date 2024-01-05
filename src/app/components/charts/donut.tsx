"use client";
import dynamic from "next/dynamic";

const Charts = dynamic(() => import("react-apexcharts"), { ssr: false });

export function Donut() {
  const options = {
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
  };

  return (
    <div className="p-2 flex flex-col h-fit w-fit border-[#dfdfdf] border rounded-md">
      <div className="text-[#777] font-semibold m-2">Donut Chart</div>
      {
        <Charts
          options={options}
          series={[12, 2, 2, 13, 31]}
          type="donut"
          width={305}
          height={300}
        />
      }
    </div>
  );
}
