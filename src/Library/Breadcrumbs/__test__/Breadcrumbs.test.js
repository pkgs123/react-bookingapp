import { render, screen } from "@testing-library/react";
import { Breadcrumbs } from "../Breadcrumbs";
const crumbs = [
  {
    label: "level",
    link: "#",
  },
  { label: "level 1", link: "/testlink1" },
  { label: "level 2", link: "/testlink2" },
  { label: "level 3" },
];

test("Should load Breadcrumbs", async () => {
  render(<Breadcrumbs crumbs={crumbs} />);
  crumbs.map((el) =>
    expect(screen.getByText(el.label)).toBeInTheDocument()
  );
});
