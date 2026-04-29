import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import App from "./App";

expect.extend(matchers);

test("renders blog name", () => {
    render(<App />);
    const title = screen.getByText(/kelvin's Software Development Blog/i);
    expect(title).toBeTruthy();
});