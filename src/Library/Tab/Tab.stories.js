import React from "react";
import CustomTabs from "./Tab";
import "./Tab.scss";

export default {
  title: "Components/Tab",
  component: CustomTabs,
};

const Template = (args) => <CustomTabs {...args} />;

export const TabDemo = Template.bind({});

TabDemo.args = {
  className: "mytabs",
  tabs: [
    {
      label: "Tab 1",
      Component: <div>Hello, I am tab 1</div>,
    },
    {
      label: "Tab 2",
      Component: <div>Hello, I am tab 2</div>,
    },
    {
      label: "Tab 3",
      Component: (
        <div>
          <h1>Tab with heading</h1>
          <p>Hello I am a tab with a heading</p>
        </div>
      ),
    },
  ],
};
