import React from "react";
import { CustomTimeline } from "./Timeline";
import "./Timeline.scss";

export default {
  title: "Components/Timeline",
  component: CustomTimeline,
};

const Template = (args) => <CustomTimeline {...args}/>;

export const Timeline_Historical = Template.bind({});
Timeline_Historical.args = {
  timelineData : {
    2022: {
      Dec: [
        {
          pid: 56,
  
          address: "Land Use Consultation – Dormitory | GKE",
  
          proposed: "Proposed AWD for 20 workers ",
  
          date: "29 December 2022",
  
          status: "rejected",
  
          caseId: "25082099",
        },
        {
          pid: 5464654654,
  
          address: "Land Use Consultation – Dormitory | GKE",
  
          proposed: "Proposed AWD for 20 workers ",
  
          date: "29 December 2022",
  
          status: "rejected",
  
          caseId: "25082099",
        },
      ],
  
      Apr: [
        {
          pid: 5464654654,
  
          address: "Land Use Consultation – Dormitory | GKE",
  
          proposed: "Proposed AWD for 20 workers ",
  
          date: "29 December 2022",
  
          status: "rejected",
  
          caseId: "25082099",
        },
      ],
    },
    2021: {
      Dec: [
        {
          pid: 5464654654,
  
          address: "Land Use Consultation – Dormitory | GKE",
  
          proposed: "Proposed AWD for 20 workers ",
  
          date: "29 December 2022",
  
          status: "rejected",
  
          caseId: "25082099",
        },
      ],
  
      Apr: [
        {
          pid: 5464654654,
  
          address: "Land Use Consultation – Dormitory | GKE",
  
          proposed: "Proposed AWD for 20 workers ",
  
          date: "29 December 2022",
  
          status: "rejected",
  
          caseId: "25082099",
        },
      ],
    },
  },
  isHistoricTimeline:true,


}

export const Timeline_Generic = Template.bind({});
Timeline_Generic .args = {
  timelineData: {
    2022: {
      Dec: [
        {
          label: "Routed To Poic",
          date: "29 December 2022",
        },
        {
          label: "Routed To Poic",
          date: "29 December 2022",
        },
      ],
  
      Apr: [
        {
          label: "Routed To Poic",
          date: "29 December 2022",
        },
        {
          label: "Routed To Poic",
          date: "29 December 2022",
        },
      ],
    },
    
  },
  isHistoricTimeline:false


}
