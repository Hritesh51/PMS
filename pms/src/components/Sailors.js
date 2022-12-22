import React, { useState, useCallback } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Sailors.css";
import { BarChart, Bar, Cell } from "recharts";

const data = [
  {
    name: "Total",
    uv: 500,
  },
  {
    name: "Present",
    uv: 400,
  },
  {
    name: "Leave",
    uv: 50,
  },
  {
    name: "TY Duty",
    uv: 50,
  },
];

const Sailors = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="card_main">
      <div className="carddm">
        <div>
          <div className="cardd">
            <Card sx={{ minHeight: 95, minWidth: 250 }}>
              <CardActionArea>
                <CardContent className="cardcontentt">
                  <Typography gutterBottom variant="h5" component="div">
                    TOTAL
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    500 Officers
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="cardd">
            <Card sx={{ minHeight: 95, minWidth: 250 }}>
              <CardActionArea>
                <CardContent className="cardcontentt">
                  <Typography gutterBottom variant="h5" component="div">
                    PRESENT
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    400 Officers
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div>
          <div className="cardd">
            <Card sx={{ minHeight: 95, minWidth: 250 }}>
              <CardActionArea>
                <CardContent className="cardcontentt">
                  <Typography gutterBottom variant="h5" component="div">
                    TY DUTY
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    50 Officers
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="cardd">
            <Card sx={{ minHeight: 95, minWidth: 250 }}>
              <CardActionArea>
                <CardContent className="cardcontentt">
                  <Typography gutterBottom variant="h5" component="div">
                    LEAVE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    50 Officers
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div className="pieee">
          <BarChart width={390} height={150} data={data}>
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
      </div>
      <div></div>
    </div>
  );
};

export default Sailors;
