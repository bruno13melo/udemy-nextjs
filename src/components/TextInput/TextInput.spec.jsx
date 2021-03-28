import { render, screen } from "@testing-library/react";

import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando'} />);


  })
})