import React from 'react';
import './styles.css';
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Link
} from 'react-router-dom';
import { Container } from '@material-ui/core';
import MenuList from './MenuList';
import Home from './Home';
import {
  createMuiTheme,
  ThemeProvider,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import Orders from './Orders';
import { TableChart, Notes } from '@material-ui/icons';
import { SnackbarProvider } from 'notistack';

export default function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Router>
          <Container style={{ paddingBottom: '80px' }}>
            <Route exact path='/' component={Home} />
            <Route path='/tables/:tableId' component={MenuList} />
            <Route path='/orders' component={Orders} />
          </Container>
          <BottomNav />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
};

const BottomNav = withRouter(({ location }) => {
  const path = location.pathname.toLowerCase();
  const paths = ['/', '/orders'];
  const [value, setValue] = React.useState(paths.indexOf(path) || 0);
  const onChange = (ev, newVal) => {
    setValue(newVal);
  };
  return (
    <BottomNavigation
      onChange={onChange}
      value={value}
      showLabels
      style={styles.stickToBottom}
    >
      <BottomNavigationAction
        component={Link}
        to='/'
        label='Tables'
        icon={<TableChart />}
      />
      <BottomNavigationAction
        component={Link}
        to='/orders'
        label='Orders'
        icon={<Notes />}
      />
    </BottomNavigation>
  );
});
