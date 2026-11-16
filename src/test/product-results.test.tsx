import { useState } from "react";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Business, Today, Reimagined, Proof } from "@/components/microsite/Sections";
import { ariat } from "@/config/accounts/ariat";

afterEach(cleanup);
function SearchSections() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Today active={active} setActive={setActive} />
      <Reimagined active={active} setActive={setActive} />
    </>
  );
}
describe("Ariat evidence and real Boot Barn results", () => {
  it.each(ariat.queries)("synchronizes $id without hypothetical product cards", (q) => {
    const { container } = render(<SearchSections />);
    const today = within(container.querySelector("#today")! as HTMLElement);
    const acs = within(container.querySelector("#with-acs")! as HTMLElement);
    fireEvent.click(today.getByRole("button", { name: `“${q.query}”` }));
    expect(acs.getByRole("button", { name: `“${q.query}”` })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(today.getByRole("img")).toHaveAttribute("src", q.screenshot);
    expect(acs.getByRole("img")).toHaveAttribute("src", q.acsScreenshot);
    expect(today.getByText(q.merchandising!)).toBeInTheDocument();
    expect(acs.getByText(q.resultSummary!)).toBeInTheDocument();
    expect(container.querySelector("[data-product-card]")).toBeNull();
    fireEvent.click(acs.getByRole("button", { name: /captured search results/ }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
  });
  it("shows the three requested customer examples", () => {
    render(<Proof />);
    expect(screen.getByText("West Marine")).toBeInTheDocument();
    expect(screen.getByText("PacSun")).toBeInTheDocument();
    expect(screen.getByText("Ann Taylor")).toBeInTheDocument();
    expect(screen.queryByText("Boot Barn")).toBeNull();
  });
  it("preserves calculator defaults and reset behavior", () => {
    const { container } = render(<Business />);
    const result = container.querySelector("[data-revenue-result]")!;
    expect(result).toHaveTextContent("+$7.2M");
    fireEvent.change(
      screen.getByRole("slider", {
        name: "Expected search revenue per visitor (RPV) uplift slider",
      }),
      { target: { value: "20" } },
    );
    expect(result).toHaveTextContent("+$12.0M");
    fireEvent.click(screen.getByRole("button", { name: "Reset to defaults" }));
    expect(result).toHaveTextContent("+$7.2M");
    expect(
      screen.getByText("Illustrative financial assumptions — pending Ariat-specific validation."),
    ).toBeInTheDocument();
  });
});
