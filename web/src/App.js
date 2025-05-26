// export default App;
import React from 'react';
import { Container, CssBaseline, Typography, AppBar, Toolbar } from '@mui/material';
import VehicleList from './components/VehicleList';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Fleet Status Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <VehicleList />
      </Container>
    </Provider>
  );
}
