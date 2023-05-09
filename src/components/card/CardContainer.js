import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// type CardContainerProps{
//   img: String
//   name: String
//   idExam: String
//   startDate: String
//   endDate: String
//   status : String
// }

export default function CardContainer(props) {
  // const { imgUrl, name, idExam, startDate, endDate, status } = props;
  return (
    <div>
      <Card sx={{ display: "flex", borderRadius: "16px" }}>
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image={props.imgUrl}
          alt="Photo of the exam"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {props.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              ID : {props.idExam}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Start time : {props.startDate}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              End time : {props.endDate}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Status : {props.status}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" className="icon-button">Start</Button>
          </CardActions>
        </Box>
      </Card>
    </div>
  );
}
