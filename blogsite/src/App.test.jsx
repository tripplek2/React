import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders blog name", () => {
    render(<App />);
    const title = screen.getByText(/kelvin's Software Development Blog/i);
    expect(title).toBeInTheDocument();
});