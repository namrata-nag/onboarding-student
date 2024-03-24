import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import orientation from "../../assets/orientation.png";
import health from "../../assets/health.jpeg";
import studentOrg from "../../assets/student-org.jpeg";
import technology from "../../assets/technology.jpeg";
import campus from "../../assets/campus.jpeg";
import courses from "../../assets/courses.jpeg";

import { CardActionArea } from "@mui/material";

export default function MediaControlCard() {
  const theme = useTheme();
  const resources = [
    { logo: orientation, title: "Orientation" },

    { logo: courses, title: "Courses" },
    { logo: health, title: "Health" },
    { logo: studentOrg, title: "Student organisation" },
    { logo: technology, title: "Technology" },
    { logo: campus, title: "Campus" },
  ];

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {resources.map((resource) => (
        <Box sx={{ boxshadow: 3, borderRadius: 2, m: 2 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={resource.logo}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

// <Card sx={{ display: "flex" }}>
//         <CardMedia
//           component="img"
//           sx={{ width: 151 }}
//           image={resource.logo}
//           alt="Live from space album cover"
//         />
//         <Box sx={{ display: "flex", flexDirection: "column" }}>
//           <CardContent sx={{ flex: "1 0 auto" }}>
//             <Typography component="div" variant="h5">
//               Live From Space
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               color="text.secondary"
//               component="div"
//             >
//               Mac Miller
//             </Typography>
//           </CardContent>
//           <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
//             <IconButton aria-label="previous">
//               {theme.direction === "rtl" ? (
//                 <SkipNextIcon />
//               ) : (
//                 <SkipPreviousIcon />
//               )}
//             </IconButton>
//             <IconButton aria-label="play/pause">
//               <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//             </IconButton>
//             <IconButton aria-label="next">
//               {theme.direction === "rtl" ? (
//                 <SkipPreviousIcon />
//               ) : (
//                 <SkipNextIcon />
//               )}
//             </IconButton>
//           </Box>
//         </Box>
//       </Card>

// export default function ActionAreaCard() {
//   return (

//   );
// }
