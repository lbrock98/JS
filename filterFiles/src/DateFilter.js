import React, { useState, useEffect } from 'react';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import Box from '@material-ui/core/Box';

export default function DateFilter() {

    //state variables for date picker
    const [dateOne, setDateOne] = React.useState(null);
    const [dateTwo, setDateTwo] = React.useState(null);

    return (
        <div style={{ display: 'inline-flex' }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    className="datePicker"
                    label="Start Date"
                    value={dateOne}
                    onChange={(newValue) => {
                        setDateOne(newValue);
                    }}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                        <Box sx={{
                            display: 'inline-flex', alignItems: 'center', marginLeft: '65px',
                            padding: '10px'
                        }}>
                            <input ref={inputRef} {...inputProps} />
                            {InputProps?.endAdornment}
                        </Box>
                    )}
                />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    className="datePicker"
                    label="End Date"
                    value={dateTwo}
                    onChange={(newValue) => {
                        setDateTwo(newValue);
                    }}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', padding: '10px' }}>
                            <input ref={inputRef} {...inputProps} />
                            {InputProps?.endAdornment}
                        </Box>
                    )}
                />
            </LocalizationProvider>
        </div>
    );
}