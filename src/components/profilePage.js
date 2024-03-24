import Profile from "./profile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AlignItemsList from "./list";
// import MediaControlCard from "./components/resources";
export default function profilePage() {
  const events = [
    {
      details: "Orientation",
      time: "2 pm",
    },
    {
      details: "Workshop",
      time: "3 pm",
    },
    {
      details: "Dean Meetup",
      time: "5 pm",
    },
    {
      details: "Netwprking and snacks",
      time: "7 pm",
    },
  ];

  const due = [
    { days: 2, task: "Payment" },
    { days: 2, task: "Transcript upload" },
    { days: 3, task: "Course signup" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "100vw",
        flexGrow: 1,
        mb: 1,
        flexwrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexGrow: 2, width: "25%" }}>
        <Profile />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 3,
          width: "70%",
          mr: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <Box
            sx={{
              borderRadius: 5,
              padding: 2,
              bgcolor: "background.paper",
              boxShadow: 1,
              margin: 1,
            }}
          >
            <p>Welcome Namrata!</p>
            <p>
              Getting onboarding can be overwhelming. So, we have put together
              the onbording checklist, resources and many more to help you with
              your onboarding process. If you are stuck just contact us and we
              will be there for your help.
            </p>
          </Box>
          <Box
            sx={{
              borderRadius: 5,
              padding: 2,
              bgcolor: "background.paper",
              boxShadow: 1,
              margin: 1,
              flexGrow: 1,
            }}
          >
            <Button variant="outlined" startIcon={<AddIcon />}>
              Add Favourite
            </Button>
            <AlignItemsList />
            {/* {events.map((event) => (
              <Box
                sx={{
                  display: "flex",
                  mt: 1,
                  justifyContent: "space-between",
                }}
              >
                <Box> {event.time} </Box>
                <Box> {event.details} </Box>
              </Box>
            ))} */}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <Box
            sx={{
              borderRadius: 5,
              padding: 2,
              bgcolor: "background.paper",
              boxShadow: 1,
              margin: 1,
              flexGrow: 1,
            }}
          >
            <h3>Event</h3>
            {events.map((event) => (
              <Box
                sx={{
                  display: "flex",
                  mt: 1,
                  justifyContent: "space-between",
                }}
              >
                <Box> {event.time} </Box>
                <Box> {event.details} </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              borderRadius: 5,
              padding: 2,
              bgcolor: "background.paper",
              boxShadow: 1,
              margin: 1,
              flexGrow: 1,
            }}
          >
            <h3>Schedule</h3>
            {due.map((d) => (
              <Box
                sx={{
                  display: "flex",
                  mt: 1,
                  justifyContent: "space-between",
                }}
              >
                <Box> Due in {d.days} days</Box>
                <Box> {d.task} </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
