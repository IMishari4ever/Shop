import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Notification = ({ open, setOpen, type }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          style={{
            backgroundColor: "coral",
            marginTop: "80px",
          }}
          severity={
            type === "copy"
              ? "info"
              : type === "remove"
              ? "error"
              : type === "remind"
              ? "warning"
              : "success"
          }
          variant="filled"
        >
          {type === "add"
            ? "تم الإضافة بنجاح"
            : type === "update"
            ? "تم التحديث بنجاح"
            : type === "remove"
            ? "تم الحذف بنجاح"
            : type === "remind"
            ? "Please select all things first."
            : "Copied to clipboard!"}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Notification;
