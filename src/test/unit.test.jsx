import { render, screen } from '@testing-library/react';
import MySearch from './MySearchButton';

test('renders Search component', async () => {

  // Render the component
  render(<MySearch onSearch={() => {}} />);

  // Check if the component is rendered
  const searchInput = screen.getByTestId(1);
  expect(searchInput).toBeInTheDocument();
});

test('checks if the placeholder is correct', async () => {

  // Render the component
  render(<MySearch onSearch={() => {}} />);

  // Check that the placeholder is present
  const inputElement = screen.getByPlaceholderText('Enter repository name');

  expect(inputElement).toBeInTheDocument();
});
