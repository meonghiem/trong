import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import SkipNextIcon from "@mui/icons-material/SkipNext";

// type CardContainerProps{
//   img: String
//   name: String
//   maHp: String
//   endDate: String
// }
export default function CardContainer(props) {
  // const theme = useTheme();
  // const { imgUrl, name, maHp, endDate } = props;
  return (
    <div style={{ border: "1px solid gray", borderRadius: "5px" }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={props.imgUrl}
          alt="Live from space album cover"
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
              {props.maHp}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Ended - {props.endDate}
            </Typography>
            {props.point && (
              // <Typography
              //   variant="subtitle2"
              //   color="success.main"
              //   component="div"
              // >
              //   {props.point} / 10
              // </Typography>
              <div style={{ color: "red" }}>{props.point}/10</div>
            )}
          </CardContent>
          {/* <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box> */}
          <CardActions>
            {!props.point ? (
              <>
                <Button size="small">Share</Button>
                <Button size="small">Start</Button>
              </>
            ) : (
              <>
                <Button size="small" color="primary">
                  View Detail Result
                </Button>
              </>
            )}
          </CardActions>
        </Box>
      </Card>
    </div>
  );
}
