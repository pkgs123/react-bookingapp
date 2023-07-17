import React from "react";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { CustomTimeline } from "../Timeline";

const timelineData = {
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

        status: "accepted",

        caseId: "25082099",
      },
    ],

    Apr: [
      {
        pid: 5464654654,

        address: "Land Use Consultation – Dormitory | GKE",

        proposed: "Proposed AWD for 20 workers ",

        date: "29 December 2022",

        status: "accpted",

        caseId: "25082099",
      },
    ],
  },
};

const genericData = {
  2022: {
    Dec: [
      {
        label: 89,
        date: "uyuuyi – Dormitory | GKE",
      },
      {
        label: 8904,
        date: "looin – Dormitory | GKE",
      },
    ],

    Apr: [
      {
        label: 5464654654,
        date: "Land Use Consultation – Dormitory | GKE",
      },
    ],
  },
};

describe("Custom Timeline Component Testing", () => {
  it("Snapshot Testing", () => {
    expect(
      render(
        <CustomTimeline
          timelineData={genericData}
          isHistoricTimeline={false}
        />
      )
    ).toMatchSnapshot();
  });

  it("genericData data Testing", () => {
    render(
      <CustomTimeline
        timelineData={genericData}
        isHistoricTimeline={false}
      />
    );
  });

  it("Historic data Testing", () => {
    render(
      <CustomTimeline
        timelineData={timelineData}
        isHistoricTimeline={true}
      />
    );
  });

  it("Click event testing", () => {
    render(
      <CustomTimeline
        timelineData={timelineData}
        isHistoricTimeline={true}
      />
    );
    const year = screen.getByTestId("yearTestId");
    fireEvent.click(year);
    expect(
      screen.queryByText("rejected")
    ).toBeInTheDocument();
  });
});
