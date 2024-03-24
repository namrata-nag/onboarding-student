import * as React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import photo from "../../assets/photo.JPG";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function profile(params) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: 5,
        padding: 2,
        bgcolor: "background.paper",
        boxShadow: 1,
        margin: 1,
        flexGrow: 1,
      }}
    >
      <Box textAlign="center">
        <Typography textAlign="center">
          <Box
            textAlign="center"
            width={"inherit"}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar alt="Remy Sharp" sx={{ width: 200, height: 200 }} />
          </Box>
          <Box>
            <p>Namrata Nag</p>
            <p>@nnag</p>
          </Box>
        </Typography>
      </Box>
      <Box textAlign="left" ml={2}>
        <p> Account setting</p>
        <p> Onbording status: In Progress</p>
        <p>
          {" "}
          <BorderLinearProgress variant="determinate" value={50} />
        </p>
      </Box>
    </Box>
  );
}

export default profile;
