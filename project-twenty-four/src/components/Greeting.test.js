import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting compnent", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    //screen.getByText('Hellow World', {exact: false}) -> exact true, false
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
});
