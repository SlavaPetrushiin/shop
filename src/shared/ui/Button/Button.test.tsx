
import {render, screen} from "@testing-library/react";
import {Button, ThemeButton} from "shared/ui/Button/Button";

describe("Test Button component", () => {
    it("Test render Button component", () => {
        render(<Button />);
        expect(screen.getByTestId("custom-button")).toBeInTheDocument();
    });

    it("Test clear theme", () => {
        render(<Button theme={ThemeButton.CLEAR} />);
        expect(screen.getByTestId("custom-button")).toHaveClass("clear");
    });
});
