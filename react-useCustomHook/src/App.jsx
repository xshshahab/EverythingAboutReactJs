import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import DataFetching from './components/DataFetching';
import MyForm from './components/MyForm';

const App = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                sx={{
                    '& .MuiTab-root': {
                        color: 'white',
                    },
                    '& .Mui-selected': {
                        color: 'primary.main',
                    }
                }}
            >
                <Tab label="Data Fetching" />
                <Tab label="Form" />
            </Tabs>
            <Box sx={{ padding: '16px' }}>
                {value === 0 && <DataFetching />}
                {value === 1 && <MyForm />}
            </Box>
        </Box>
    );
}

export default App;
