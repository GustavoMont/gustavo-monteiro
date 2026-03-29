import { render, screen } from "@testing-library/react";
import { Analytics } from "@/components/analytics/Analytics";

jest.mock("@next/third-parties/google", () => ({
  GoogleAnalytics: jest.fn(({ gaId }: { gaId: string }) => (
    <div data-testid="google-analytics">{gaId}</div>
  )),
}));

describe("Analytics Component", () => {
  it("should not render GoogleAnalytics if gaId is missing", () => {
    render(<Analytics gaId={undefined} />);
    expect(screen.queryByTestId("google-analytics")).not.toBeInTheDocument();
  });

  it("should render GoogleAnalytics if gaId is present", () => {
    const gaId = "G-12345";
    render(<Analytics gaId={gaId} />);
    expect(screen.getByTestId("google-analytics")).toBeInTheDocument();
    expect(screen.getByText(gaId)).toBeInTheDocument();
  });
});
