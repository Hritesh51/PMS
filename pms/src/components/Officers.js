import React, { useState, useCallback } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Officers.css";
import { BarChart, Bar, Cell } from "recharts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function createData(
  name: String,
  calories: Number,
  fat: Number,
  carbs: Number,
  protein: Number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Officers = () => {
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
      <div className="tablecont">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Officers;
