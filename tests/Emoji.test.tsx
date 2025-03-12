import { render, screen } from "@testing-library/react";
import Emoji from "../src/components/Emoji";

describe("Emoji", () => {
  it("should not render anything for rating less than 3", () => {
    const { container } = render(<Emoji rating={1} />);
    expect(container.firstChild).toBeNull();

    const { container: container2 } = render(<Emoji rating={2} />);
    expect(container2.firstChild).toBeNull();
  });

  it("should render 'meh' image for rating 3", () => {
    render(<Emoji rating={3} />);
    const image = screen.getByTestId("mocked-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "meh");
    expect(image).toHaveAttribute("src", expect.stringContaining("meh"));
  });

  it("should render 'recommended' image for rating 4", () => {
    render(<Emoji rating={4} />);
    const image = screen.getByTestId("mocked-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "recommended");
    expect(image).toHaveAttribute("src", expect.stringContaining("thumbs-up"));
  });

  it("should render 'exceptional' image for rating 5", () => {
    render(<Emoji rating={5} />);
    const image = screen.getByTestId("mocked-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "exceptional");
    expect(image).toHaveAttribute("src", expect.stringContaining("bulls-eye"));
  });
});
