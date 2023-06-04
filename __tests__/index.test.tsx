import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/app/[locale]/page";
import { NextIntlProvider } from "next-intl";
import "@testing-library/jest-dom";
import { AppThemeProvider } from "@/contexts/ThemeContext";
import messages from "@/messages/en.json";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

describe("Home", () => {
  const locale = "en";
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  useRouter.mockImplementationOnce(() => ({
    route: "/",
    query: { locale: locale },
  }));

  it("renders the coming soon text", async () => {
    render(
      <NextIntlProvider messages={messages} locale={locale}>
        <AppThemeProvider>
          <Home />
        </AppThemeProvider>
      </NextIntlProvider>
    );

    await waitFor(() => {
      const heading = screen.getByText("Movie catalog coming soon");
      expect(heading).toBeInTheDocument();
    });
  });
});
