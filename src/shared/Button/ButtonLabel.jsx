import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ButtonLabel({
  buttonVariant,
  buttonLabel,
  handleCLick,
  setDefaultlValue,
  setSize = "medium",
  loginType=true
}) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant={buttonVariant}
        onClick={handleCLick}
        defaultValue={setDefaultlValue}
        size={setSize}
        sx={{
            fontSize:"1.2em",
            width: loginType?"20em":"15em",
            backgroundColor:"#ebad00",
            color:"black"
        }}
      >
        {buttonLabel}
      </Button>
    </Stack>
  );
}
