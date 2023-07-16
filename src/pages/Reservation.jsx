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

const Reservation = () => {
  const [dateValue, setDateValue] = useState(dayjs());
  const [timeData, setTimeData] = useState([]);
  const [timeValue, setTimeValue] = useState("");

  const selectDate = (newValue) => {
    setDateValue(newValue);
    /*
    fetch("URL주소", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: newValue.$d }),
    })
      .then((response) => {
        if (response.ok) {
          // POST 요청이 성공적으로 처리되었을 때 실행되는 코드
          response => response.json()
          console.log("Reservation request sent successfully!");
        } else {
          // POST 요청이 실패했을 때 실행되는 코드
          console.log("Reservation request failed.");
        }
      })
      .then(data => {
        setTimeData(data);
      });
      .catch((error) => {
        // 네트워크 오류 등의 예외 처리
        console.error(
          "Error occurred while sending the reservation request:",
          error
        );
      });
    */
    console.log("날짜 선택", newValue.$d);
  };

  const selectTime = (e) => {
    setTimeValue(e.target.value);
    console.log("시간 선택", e.target.value);
    console.log("시간 선택", e);
  };

  const sendInfo = () => {
    console.log("예약완료", timeValue);
  };

  return (
    <Box>
      <Typography component="h6">예약가능날짜</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]} sx={{ padding: "0" }}>
          <DatePicker
            format="YYYY-MM-DD"
            // label="Controlled picker"
            value={dateValue}
            onChange={(newValue) => selectDate(newValue)}
            sx={{ width: "355px" }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Typography component="h6">예약가능시간(14:00~15:00 점심시간)</Typography>
      <Grid container gap={1}>
        {TIMESLOT.map((data) => (
          <Grid key={uuid()} item>
            <Button
              variant="contained"
              disabled={!(data.state === "예약가능")}
              value={data.time}
              onClick={(e) => selectTime(e)}
              sx={timeValue === data.time ? { border: "1px solid red" } : {}}
            >
              {data.time}
              <br />
              {data.state}
            </Button>
          </Grid>
        ))}
        {/* {timeData.map((data) => (
          <Grid key={uuid()} item>
            <Button variant="contained">
              {data.time}
              <br />
              {data.state}
            </Button>
          </Grid>
        ))} */}
      </Grid>
      <Button variant="contained" onClick={() => sendInfo()}>
        예약완료
      </Button>
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
