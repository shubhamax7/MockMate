import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";
import { ThemeProvider } from "@/lib/theme";

describe("App routing and home page", () => {
  it("renders the landing page with main heading and CTA", () => {
    render(
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>,
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Practice the interview\. Understand your performance\. Improve with evidence\./i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /start a mock interview/i })[0],
    ).toBeInTheDocument();
  });
});
