import { FormButton } from "../components/ReusableComponents";

import user from "@testing-library/user-event";
import React from "react";
import { render } from "@testing-library/react";

describe("<FormButton /> test suite", () => {
  test("button text is determined by props", () => {
    // for this first assertion, we'll simply ensure that the button's text is determined by the props passed to it
    // we'll also ensure that the className defaults to primary where none is passed as props
    const { getByText, rerender } = render(
      <FormButton buttonText="Click Here" />
    );
    const button = getByText(/click here/i);
    expect(button.textContent).toBe("Click Here");
    expect(button.className).toBe("primary");
    expect(button.textContent).toBe("Click Here");
    expect(button.className).toBe("primary");
    expect(button.textContent).toBe("Click Here");
    rerender(<FormButton buttonText="Click There" />);
    expect(button.textContent).toBe("Click There");
  });
});
