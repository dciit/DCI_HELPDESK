import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ButtonGroup from "@mui/material/ButtonGroup";

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
                <Box
                    sx={{
                        display: "flex",
                        "& > *": {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="Vertical button group"
                        variant="contained"
                    >
                        <Button key="one">One</Button>,<Button key="two">Two</Button>,
                        <Button key="three">Three</Button>,
                    </ButtonGroup>
                </Box>
            );
        } else if (_step == 1) {
            return <h1>STEP2</h1>;
        } else {
            return <h1>STEP3</h1>;
        }
    }

    return (
        <>
            <div className="bg-auto bg-no-repeat bg-center">
                {/* <Box sx={{ maxWidth: 500, flexGrow: 1 }}> */}
                <Paper
                    square
                    elevation={0}
                    sx={{
                        textAlign: "center",
                        fontSize: "h6.fontSize",
                        fontFamily: "Monospace",
                    }}
                >
                    <h2>เบิกอุปกรณ์ IT</h2>
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
                    </Typography>
                </Paper>

                <div>{getGreeting(activeStep)}</div>

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
