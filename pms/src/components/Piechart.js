import React, { useState, useCallback } from "react";
import { BarChart, Bar, Cell } from "recharts";
import "./Piechart.css";

const data = [
  {
    name: "Total",
    uv: 400,
  },
  {
    name: "Officers",
    uv: 150,
  },
  {
    name: "Sailors",
    uv: 250,
  },
  {
    name: "Present",
    uv: 300,
  },
  {
    name: "TY Duty",
    uv: 50,
  },
  {
    name: "Leave",
    uv: 50,
  },
];

const Piechart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div class="piee">
      <BarChart width={390} height={370} data={data}>
        <Bar dataKey="uv" onClick={handleClick}>
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#FFFFFF" : "#46474A"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
      <p className="contentt">{`${activeItem.name}: ${activeItem.uv}`}</p>
    </div>
  );
};

export default Piechart;
