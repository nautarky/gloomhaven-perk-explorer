import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ClassSelectForm from "../ClassSelectForm";

beforeEach(() => {
  jest.resetAllMocks();
});

afterEach(() => {
  cleanup();
});

test("test setup works (noop test)", () => {
  render(<ClassSelectForm />);
});
