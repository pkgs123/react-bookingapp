import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Notifications } from "../Notifications";

const notifications = [
  {
    notificationId: 14,
    notification:
      "Hi, Notification 6 pull requests need your attention",
    read: true,
    createdDate: "2023-04-04T02:40:39.457",
    createdBy: "SYSTEM",
    lastModifiedDate: "2023-04-05T12:54:04.147",
    lastModifiedBy: "Spider",
  },
];

describe("Notifications", () => {
  it("should load Notifications", () => {
    render(
      <Notifications
        isOpen={true}
        notifications={notifications}
        onClick={jest.fn()}
      />
    );
    expect(
      screen.getByText("Hi, Notification 6 pull requests need your attention")
    ).toBeInTheDocument();
    expect(
      screen.getByText("SYSTEM")
    ).toBeInTheDocument();
  });
  it("click HandleEvent", () => {
    render(<Notifications
      isOpen={true}
      notifications={notifications}
      onClick={jest.fn()}
    />);
    const button = screen.getByTestId("itemButton");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
