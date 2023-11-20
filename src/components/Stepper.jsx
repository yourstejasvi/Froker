import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Hand from "../Assets/hand.png";

import "../Css/Stepper.css"

const steps = ['Owner Information','Business Information', 'Bank details'];


// Step 1: Create a form component for Owner Information
function OwnerInformationForm({ ownerInfo, handleInputChange }) {

  const handleChange = (event) =>{
    const {name, value} = event.target;
    handleInputChange('ownerInfo')(name, value);
  };
 
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
        
      }}
      noValidate
      autoComplete="off"
    >
        <div className='stepper--bgbox'>
        <TextField
          required
          id="name"
          name="name"
          label="Full name"
          value={ownerInfo.name}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          required
          id="email"
          name="email"
          label="Email address"
          value={ownerInfo.email}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          required
          id="mobile"
          name="mobile"
          label="Mobile number"
          value={ownerInfo.mobile}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          required
          id="permanent_address"
          name="permanent_address"
          label="Permanent address"
          value={ownerInfo.permanent_address}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          required
          id="aadhar"
          name="aadhar"
          label="Aadhar card no."
          value={ownerInfo.aadhar}
          onChange={handleChange}
          variant="filled"
        />
        </div>
        <img src={Hand} className='stepper--hand' />

    </Box>
  );
}

// Step 2: Create a form component for Bussiness Information
function BussinessInformationForm({bussinessInfo, handleInputChange }) {

  const handleChange = (event) =>{
    const {name, value} = event.target;
    handleInputChange('bussinessInfo')(name, value);
  };
  
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className='stepper--bgbox'>
        <TextField
          required
          id="BussinessName"
          name="BussinessName"
          label="Name of your bussiness"
          value={bussinessInfo.BussinessName}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          required
          id="mail"
          name="mail"
          label="Official mail of your bussiness"
          value={bussinessInfo.mail}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          required
          id="registrationDate"
          name="registrationDate"
          label="Date of registration"
          value={bussinessInfo.registrationDate}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          required
          id="address"
          name="address"
          label="Bussiness address"
          value={bussinessInfo.address}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          required
          id="FCCAI_no"
          name="FCCAI_no"
          label="FCCAI number"
          value={bussinessInfo.FCCAI_no}
          onChange={handleChange}
          variant="filled"
        />
        </div>
        <img src={Hand} className='stepper--hand' />

    </Box>
  );
}

// Step 3: Create a form component for Bank Information
function BankInformationForm({bankInfo, handleInputChange}) {

  const handleChange = (event) =>{
    const {name, value} = event.target;
    handleInputChange('bankInfo')(name, value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className='stepper--bgbox'>
        <TextField
          required
          id="BankName"
          name="BankName"
          label="Name of your bank"
          value={bankInfo.BankName}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          required
          id="IIFC_code"
          name="IIFC_code"
          label="IIFC code"
          value={bankInfo.IIFC_code}
          onChange={handleChange}
          variant="filled"
        />
        <img src={Hand} className='stepper--hand-bankform' />
       
        </div>

    </Box>
  );
}

export default function HorizontalNonLinearStepper() {


  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

   // Conditionally render the form component based on the activeStep
   const renderFormComponent = () => {
    switch (activeStep) {
      case 0:
        return <OwnerInformationForm ownerInfo={ownerInfo} handleInputChange={handleInputChange} />;
      case 1:
        return <BussinessInformationForm bussinessInfo={bussinessInfo} handleInputChange={handleInputChange} />;
      case 2:
        return <BankInformationForm bankInfo={bankInfo} handleInputChange={handleInputChange} />;
      default:
        return null;
    }
  };

  const [ownerInfo, setOwnerInfo] = useState({
    // Define form fields and their initial values here
    name: '',
    email: '',
    mobile: '',
    permanent_address: '',
    aadhar: '',
  });

  const [bussinessInfo, setBussinessInfo] = useState({
    // Define form fields and their initial values here
    BussinessName: '',
    mail: '',
    registrationDate: '',
    address: '',
    FCCAI_no: '',
  });

  const [bankInfo, setBankInfo] = useState({
    // Define form fields and their initial values here
    BankName:'',
    IIFC_code:'',
  });

   // Function to handle input changes for all form components
   const handleInputChange = (formName) => (event) => {
    const { name, value } = event.target;
    switch (formName) {
      case 'ownerInfo':
        setOwnerInfo({
          ...ownerInfo,
          [name]: value,
        });
        break;
      case 'bussinessInfo':
        setBussinessInfo({
          ...bussinessInfo,
          [name]: value,
        });
        break;
      case 'bankInfo':
        setBankInfo({
          ...bankInfo,
          [name]: value,
        });
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="warning" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button variant='contained' color='warning' onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                variant='contained'
                color="warning"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button variant='contained' color='warning' onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  
                  <Button variant='contained' color='warning' onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>  
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
      {/* Conditionally render the form component based on the activeStep */}
      {renderFormComponent()}
    </Box>
  );
}
