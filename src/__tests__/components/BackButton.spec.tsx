import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import BackButton from "components/BackButton";

describe("back button test suit", () => {
  it("render back button correctly", () => {
    render(
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>
    );

    const backButtonElement = screen.getByRole("button", { name: "Back" });

    expect(backButtonElement).toBeInTheDocument();
  });
});
