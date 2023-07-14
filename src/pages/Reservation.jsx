import React, { useState } from "react";
import uuid from "react-uuid";
import { flexbox } from "@mui/system";
import Stack from "@mui/system/Stack";
import Box from "@mui/material/Box";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Reservation = () => {
  const [value, setValue] = useState(dayjs());

  const selectDate = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "1px solid black",
          maxWidth: "37.5rem",
          padding: "0 1rem",
        }}
      >
        <Typography component="h6">예약가능날짜</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]} sx={{ padding: "0" }}>
            <DatePicker
              format="YYYY-MM-DD"
              // label="Controlled picker"
              value={value}
              onChange={(newValue) => selectDate(newValue)}
              sx={{ width: "355px" }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Typography component="h6">
          예약가능시간(14:00~15:00 점심시간)
        </Typography>
        <Grid justifyContent="center" container gap={1}>
          {TIMESLOT.map((parameter) => (
            <Grid key={uuid()} item>
              <Button variant="contained">
                {parameter.time}
                <br />
                {parameter.state}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Reservation;

const TIMESLOT = [
  { time: "10:00", state: "예약가능" },
  { time: "11:00", state: "예약가능" },
  { time: "12:00", state: "예약완료" },
  { time: "13:00", state: "예약가능" },
  { time: "14:00", state: "점심시간" },
  { time: "15:00", state: "예약가능" },
  { time: "16:00", state: "예약완료" },
  { time: "17:00", state: "예약완료" },
  { time: "18:00", state: "예약가능" },
  { time: "19:00", state: "예약가능" },
  { time: "20:00", state: "예약가능" },
  { time: "21:00", state: "예약가능" },
];
