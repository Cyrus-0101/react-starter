import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from '../../src/App';

describe('App', () => {
  it('Renders h1 content', () => {
    // Arrange
    render(<WrappedApp />);

    // Act

    // Assert
    expect(
      // Accessibility Testing
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Home');
    expect(
      // Accessibility Testing
      screen.getByText('Welcome to the home page!'),
    ).toBeInTheDocument();
  });
  it('Renders 404', () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>,
    );

    // Act

    // Assert
    expect(
      // Accessibility Testing
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('404');
  });
});
