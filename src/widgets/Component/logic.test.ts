import { getTextFromProps } from './logic';

test('renders learn react link', () => {
  const testString = getTextFromProps('Hello');
  expect(testString).toBe('This is Component text: Hello');
});
