import * as React from "react";
import { Notifications } from "./Notifications";

export default {
  title: "Library/Notifications",
  argTypes: {
    containerWidth: { control: "text" },
    width: { control: "text" },
    lines: { control: "number" },
    isOpen: {
      type: "select",
      options: [true, false],
    },
  },
};

const Template = (args) => <Notifications {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  containerWidth: "360px",
  width: "360px",
  lines: 2,
  isOpen: true,
  notifications: [
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
    {
      notificationId: 13,
      notification:
        "Hi, Notification 5 pull requests need your attention",
      read: false,
      createdDate: "2023-04-04T02:40:36.22",
      createdBy: "SYSTEM",
      lastModifiedDate: null,
      lastModifiedBy: null,
    },
  ],
};
