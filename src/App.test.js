import React from 'react';
import { render, getByText } from '@testing-library/react';
import App from './App';

test('Test 1 Basic Text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Unit/i);
  expect(linkElement).toBeInTheDocument();
});


test("test 2 Testing Text",()=>{
  const resp=render(<App />);
  const linkElement=resp.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test("test 3 Testing PlaceHolder",()=>{
  const resp=render(<App />);
  const linkElement=resp.getByPlaceholderText(/name/i);
  expect(linkElement).toBeInTheDocument();
});