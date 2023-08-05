import React from "react";
import {
  Box,
  Text,
  Center,
  Flex,
  Select,
  GridItem,
  Grid,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-picker/dist/DatePicker.css";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import Slots from "./Slots";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
function SelectDataandTime() {
  const navigate = useNavigate();
  const [post, setPost] = React.useState(null);

  //API CALL
  useEffect(() => {
    axios({
      method: "get", //you can set what request you want to be
      url: "http://api.internship.appointy.com:8000/v1/durations",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIzLTA4LTEwVDAwOjAwOjAwWiIsInVzZXJfaWQiOjMwMDF9.8pZMhoqZdBLqOKT0V7perD4vkoA347idSHVLaCcdefs",
      },
    }).then((response: any) => {
      setPost(response);
    }).catch((error)=>{
        console.log(error)
    })
  }, []);
  console.log(post);


  const [startDate, setStartDate] = useState<any>(new Date());
  return (
    <div>
      <Box bg={"#F6F6F6"} w="100%" h="100vh">
        <Flex justifyContent={"center"} pt="10%">
          <Flex direction={"column"} bg={"white"} w="50%" h={"60vh"} p="50px">
            <Text as="b" color="black" fontSize={"2xl"} paddingLeft={"0px"}>
              SELECT DATE TO OPEN CALENDAR
            </Text>
            <Flex pt="5">
              <Box width={"30%"}>
                <Text as="b">
                  {" "}
                  <DatePicker
                    fixedHeight
                    autoFocus
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </Text>{" "}
              </Box>
              <Text
                as="b"
                fontSize={"2xl"}
                justifyContent={"center"}
                alignItems="center"
                width={"70%"}
                paddingTop={"100px"}
              >
                Proceed to Check Slots
              </Text>
            </Flex>
            <Box
              display={"flex"}
              justifyContent={"right"}
              alignItems={"bottom"}
              paddingTop={"135px"}
            >
              <Button
                onClick={() => navigate("/slots")}
                colorScheme="teal"
                size="md"
                width={"10%"}
                justifyContent={"right"}
              >
                Next
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

export default SelectDataandTime;
