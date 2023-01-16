import React from 'react';
import { render, screen } from '@testing-library/react';
import { Component } from './Component';

test('renders learn react link',() => {
  render(<Component text="Hello" />);
  expect(screen.getByText('This is Component text: Hello')).not.toBeNull();
});
