// Snack Component - https://material-ui.com/components/snackbars/
// import { Snackbar } from "@material-ui/core";
// import MuiAlert from "@material-ui/lab/Alert";
// import { CryptoState } from "../CryptoContext";
import {Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
import {setalert} from "../Store and slices/AlertSlice";
import Alert from '@mui/material/Alert';

const Alertm = () => {
  // const { alert, setAlert } = CryptoState();
  const dispatch = useDispatch();

const getalert=useSelector((state)=>state.AlertSlice)
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(setalert({ open: false }));
  };

  return (
    <Snackbar
      open={getalert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <Alert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={getalert.type}
      >
        {getalert.message}
      </Alert>
    </Snackbar>
    
  );
};

export default Alertm;