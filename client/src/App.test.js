  
import React from 'react';
import { render } from '@testing-library/react'
import App from './App';
import SuperWoman from './components/SuperWoman';


test("displays What is styling", () => {
   const { getByText } = render(<App />);
  getByText(/What is styling/i);
});

test('displays country p tag', () => {
  const player = { name: "Megan Rapinoe", country: "United States", searches: 99 };
  const { getByText } = render(<SuperWoman {...player}/>);
 getByText(/megan/i);
 getByText(/united/i);
 getByText(/searches: 99/i);
});


test('loads data from server and renders it', () => {
  const { findByText } = render(<App />);
  findByText(/megan/i);
  findByText(/united/i);
  findByText(/searches: 99/i);
});

test('loads data from server and renders it 2', () => {
  const { findByText } = render(<App />);
  findByText(/rose lav/i);
});