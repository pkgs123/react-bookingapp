import React from "react";
import {
  waitFor,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import CustomTabs from "../Tab";
import { HashRouter } from "react-router-dom";

describe("Test Tab Component", () => {
  const tabs = [
    {
      label: "Tab1",
      Component: <div>Tab1Data</div>,
    },
    {
      label: "Tab2",
      Component: <div>Tab2Data</div>,
    },
    {
      label: "Tab3",
      Component: (
        <div>
          <h1>Tab3Data</h1>
        </div>
      ),
    },
  ];

  it("Rendering Tab component", () => {
    const onMockChange = jest.fn();
    render(
      <HashRouter>
        <CustomTabs
          tabs={tabs}
          onChange={onMockChange}
        ></CustomTabs>
      </HashRouter>
    );
  });

  test("should have new tab  data", async () => {
    render(
      <HashRouter>
        <CustomTabs tabs={tabs}></CustomTabs>
      </HashRouter>
    );

    const activeTab = screen.getByTestId("tabTestId");

    fireEvent.click(activeTab);
    await waitFor(() => {
      expect(screen.getByText("Tab1")).toBeInTheDocument();
    });
  });

  test("should not have tab1  data", async () => {
    render(
      <HashRouter>
        <CustomTabs tabs={tabs}></CustomTabs>
      </HashRouter>
    );

    const activeTab = screen.getByTestId("tabTestId");

    fireEvent.click(activeTab);
    await waitFor(() => {
      expect(screen.queryByText("tab1")).toBeNull();
    });
  });

  test("should not have tab2  data", async () => {
    const onMockChange = jest.fn();
    render(
      <HashRouter>
        <CustomTabs
          tabs={tabs}
          onChange={onMockChange()}
        ></CustomTabs>
      </HashRouter>
    );

    const activeTab = screen.getByTestId("tabTestId");

    fireEvent.click(activeTab);
    await waitFor(() => {
      expect(screen.queryByText("tab2")).toBeNull();
    });
  });

  it("activates second tab when clicking on it", () => {
    const { getByText } = render(
      <HashRouter>
        <CustomTabs tabs={tabs}></CustomTabs>
      </HashRouter>
    );
    const Tab1 = getByText("Tab1").closest("button");
    const Tab2 = getByText("Tab2").closest("button");
    expect(Tab1).toHaveAttribute("aria-selected", "true");
    expect(Tab2).toHaveAttribute("aria-selected", "false");
    fireEvent.click(Tab2);
    expect(Tab1).toHaveAttribute("aria-selected", "false");
    expect(Tab2).toHaveAttribute("aria-selected", "true");
  });
});
