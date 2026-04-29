import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog name", () => {
    render(<App />);
    const title = screen.getByText(/kelvin's Software Development Blog/i);
    expect(title).toBeInTheDocument();
});