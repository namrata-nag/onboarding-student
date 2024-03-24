import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import ChecklistTab from "./tabs.js";
import Box from "@mui/material/Box";

export default function CheckboxLabels(params) {
  let list = params.list || [
    {
      task: "Complete orientation checkins with your supervisor",
      isRequired: true,
      isChecked: false,
      contact: ["abc@utdallas.com", "admission@utdallas.com"],
      link: "https://www.utdallas.edu/admissions/apply/",
    },
    {
      task: "Complete orientation checkins with your supervisor",
      isRequired: true,
      isChecked: false,
      contact: ["abc@utdallas.com", "admission@utdallas.com"],
      link: "https://www.utdallas.edu/admissions/apply/",
    },
    {
      task: "Complete orientation checkins with your supervisor",
      isRequired: true,
      isChecked: false,
      contact: ["abc@utdallas.com", "admission@utdallas.com"],
      link: "https://www.utdallas.edu/admissions/apply/",
    },
    {
      task: "Complete orientation checkins with your supervisor",
      isRequired: true,
      isChecked: false,
      contact: ["abc@utdallas.com", "admission@utdallas.com"],
      link: "https://www.utdallas.edu/admissions/apply/",
    },
    {
      task: "Complete orientation checkins with your supervisor",
      isRequired: true,
      isChecked: false,
      contact: ["abc@utdallas.com", "admission@utdallas.com"],
      link: "https://www.utdallas.edu/admissions/apply/",
    },
    {
      task: "Complete orientation checkins with your supervisor",
      isRequired: true,
      isChecked: false,
      contact: ["abc@utdallas.com", "admission@utdallas.com"],
      link: "https://www.utdallas.edu/admissions/apply/",
    },
  ];
  return list.length === 0 ? (
    <Typography>You are all done</Typography>
  ) : (
    <Box sx={{ m: 1 }}>
      <ChecklistTab />
      <FormGroup>
        {list.map((item) => (
          <FormControlLabel
            control={
              <Checkbox>
                <Box sx={{ display: "flex" }}>
                  <Box> {item.task} </Box>
                  <Box>{item.isRequired ? "Required" : "Not Required"} </Box>
                  <Box>
                    {" "}
                    {item.link ? (
                      <a href={item.link}> Link to page</a>
                    ) : (
                      ""
                    )}{" "}
                  </Box>
                  <Box>
                    {item.contact.map((c) => {
                      return <div>{c}</div>;
                    })}
                  </Box>
                </Box>
              </Checkbox>
            }
            label={item.task}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
