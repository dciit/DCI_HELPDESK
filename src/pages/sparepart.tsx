import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function Sparepart() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 3;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(activeStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        console.log(activeStep);
    };
    
    

    const label = { inputProps: { 'aria-label': 'QTY' } };
    //   useEffect(() => {
    //    alert(activeStep);

    //    if(activeStep == 0){

    //    }
    //    else if(activeStep == 1){

    //    }else{

    //    }

    //   }, [activeStep]);

    //   const Nextpage = (_step:number) => {
    //     let step = activeStep;
    //     return (
    //       <>

    //       </>
    //     );
    //   };

    function getGreeting(_step: number) {
        if (_step == 0) {
            return (
                // <Box
                //     sx={{
                //         // display: "flex",
                //         "& > *": {
                //             m: 1,
                //             gap:3,
                //         },
                //     }}
                // >
                <>
                <div className="w-100">
                  <button className="w-80 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">เมาส์</button>
                  <br/>
                  <button className="w-80 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">คีย์บอร์ด</button>
                  </div>

              
                  
              
     <FormControl>
     <div className="text-left p-1 flex flex-col gap-1">
                  <span className="text-[3em] text-sky-500">จำนวน</span>
                  </div>
      {/* <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 50,
          },
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="1 ชิ้น"  />
        <FormControlLabel value="2" control={<Radio />} label="2 ชิ้น" />
        <FormControlLabel value="3" control={<Radio />} label="3 ชิ้น" />
        
      </RadioGroup> */}

    </FormControl>
    
                </>
               
                      
                  
                // </Box>
            );
        } else if (_step == 1) {
            return <h1>STEP2</h1>;
        } else {
            return <h1>STEP3</h1>;
        }
    }

  return (
    <>
      <div className="size-full">
        {/* <Box sx={{ maxWidth: 500, flexGrow: 1 }}> */}
        {/* <Paper
          square
          elevation={0}
          sx={{
            textAlign: "left",
            fontSize: "h6.fontSize",
            fontFamily: "Monospace",
          }}
        > */}
               {/* <Typography
            sx={{
              textAlign: "left",
              fontSize: "h2.fontSize",
              fontFamily: "Times New Roman",
              // background: "#1976d2",
              color: "#1976d2",
              m: 3,
            }}
          >
            เลือกอุปกรณ์ IT
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "h4.fontSize",
              fontFamily: "Times New Roman",
              // background: "#1976d2",
              color: "#1976d2",
              m: 3,
            }}
          >
            เลือกอุปกรณ์ IT
          </Typography> */}
          <div className="p-6 flex flex-col gap-1">
          <span className="text-[3em] text-sky-500 ">เบิกอุปกรณ์ IT</span>
          <span className="text-gray-500 text-[14px]">เลือกอุปกรณ์ที่ต้องการจะเบิก</span>
          <br/>
          <div className="text-center">
            {getGreeting(activeStep)}
          </div>
          </div>
          
          <br/>
        {/* </Paper> */}

                

                <MobileStepper
                    variant="text"
                    steps={maxSteps}
                    position="bottom"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="medium"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
                {/* </Box> */}
            </div>
        </>
    );
}

export default Sparepart;
