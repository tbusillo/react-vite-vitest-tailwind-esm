import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppRoutes } from '@components';
import { Router } from 'react-router-dom';

function go(): import('react-router-dom').Navigator {
  throw new Error('Mocked function');
}

describe('AppRoutes component', () => {
  it('renders a AppRoutes wrapping element', () => {
    render(
      <Router location={'/'} navigator={go()}>
        <AppRoutes />
      </Router>
    );

    screen.logTestingPlaygroundURL();
    expect(
      screen.getByRole('heading', {
        name: /test/i
      })
    ).toBeInTheDocument();
  });
});
