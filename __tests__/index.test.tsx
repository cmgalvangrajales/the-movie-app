import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { NextIntlProvider } from "next-intl";
import { AppThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/app/[locale]/page";
import messages from "@/messages/en.json";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

// Some antd components may no load the matchMedia while testing so her we're mocking them
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Home", () => {
  const locale = "en";
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockImplementationOnce(() => ({
    route: "/",
    query: { locale: locale },
  }));

  it("renders the footer text", async () => {
    render(
      <NextIntlProvider messages={messages} locale={locale}>
        <AppThemeProvider>
          <Home />
        </AppThemeProvider>
      </NextIntlProvider>
    );

    await waitFor(() => {
      const footer = screen.getByText(
        "©2023 Created by Carlos Maximiliano Galvan Grajales"
      );
      expect(footer).toBeInTheDocument();
    });
  });
});
