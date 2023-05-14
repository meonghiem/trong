import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const handleClickView = async () => {
    try {
      // const response = await axios.get(`http://localhost:8001/api/exam/${props.idExam}`);
      // console.log(response);
      navigate(`/list_exams/exam/${props.idExam}`);
    } catch (error) {
      console.log(error);
    }
  };

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
            {props.endDate && (
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Ended - {props.endDate}
              </Typography>
            )}
            {props.Time && (
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Time - {props.Time}
              </Typography>
            )}
            {props.point && (
              // <Typography
              //   variant="subtitle2"
              //   color="success.main"
              //   component="div"
              // >
              //   {props.point} / 10
              // </Typography>
              <div>
                Point -{" "}
                <div style={{ color: "red", display: "inline-block" }}>
                  {props.point}/10
                </div>
              </div>
            )}
            {props.status && (
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Status : {props.status}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            {!props.point ? (
              <>
                <Button
                  size="small"
                  className="icon-button"
                  onClick={handleClickView}
                >
                  View
                </Button>
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
