import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Navbar from '../components/JSfiles/header';

it('It should render the component Correctly', () => {
  const header = render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(header).toMatchSnapshot();
});
