import { render, screen } from '@testing-library/react';
import App from "./App"

describe("App", () => {
    it("test", () => {
        render(<App />)
        const formTitle = screen.getByText("App");
        expect(formTitle).toBeInTheDocument();
    })
})