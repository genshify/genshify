import { Button } from "@mui/material";
import { useContext } from "react";
import { SnowContext } from "../../contexts/PrimoContext";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

export function SnowToggle() {
  const { snow, setSnow } = useContext(SnowContext);
  return (
    <Button 
    sx={{ m: 1,
      bgcolor:snow ? "primary.dark" : "primary.main",
      "&:hover": {
        background: "background.default",
      },
     }}    
      onClick={() => setSnow(!snow)}
      startIcon={snow ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    >
      Primo shower for good luck!!
    </Button>
  );
}
