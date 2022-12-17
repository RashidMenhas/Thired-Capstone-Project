import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import HomePage from '../components/JSfiles/homepage';
import store from '../redux/configureStore';

it('It should render the homepage components correctly', () => {
  const homepage = render(
    <Router>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </Router>,
  );
  expect(homepage).toMatchSnapshot();
});
