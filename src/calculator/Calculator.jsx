import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleButtonClick = (value) => {
    setInput((prevInput) => (prevInput === "0" ? value : prevInput + value));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("0");
  };

  return (
    <Box
      sx={{
        mx: "auto",
        p: 3,
        m: 1,
        textAlign: "center",
        fontSize: "2.875rem",
        fontWeight: "700"
      }}
    >
      <Box
        sx={{
          mx: "auto",
          p: 3,
          m: 1,
          textAlign: "center",
          fontSize: "4.875rem",
          fontWeight: "700"
        }}
      >
        Calculator
      </Box>
      <Box
        sx={{
          mx: "auto",
          p: 3,
          m: 1,
          textAlign: "center",
          fontSize: "2.875rem",
          fontWeight: "700"
        }}
        className="display"
      >
        {input}
      </Box>
      <Box
        sx={{
          mx: "auto",
          p: 3,
          m: 0,
          textAlign: "center",
          fontSize: "2.875rem",
          fontWeight: "700"
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, ".", "=", "C"].map(
            (value, index) => (
              <Grid item xs={3} key={index}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    height: "80px", 
                    width: "75%", 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5rem" 
                  }}
                  onClick={() => {
                    if (typeof value === "number" || value === ".") {
                      handleButtonClick(value.toString());
                    } else if (value === "=") {
                      handleCalculate();
                    } else if (value === "C") {
                      handleClear();
                    } else {
                      handleButtonClick(value);
                    }
                  }}
                >
                  {value}
                </Button>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Calculator;
