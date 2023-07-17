import * as React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs as MuiBreadCrumbs } from "@mui/material/";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { styled } from "@mui/material/styles";
import "./Breadcrumbs.scss";

const CustomBreadcrumb = styled(MuiBreadCrumbs)`
  & .MuiBreadcrumbs-separator {
    margin: 0 6px;
  }
`;

export function Breadcrumbs({ crumbs, homeLink }) {
  return (
    <div role="presentation">
      <CustomBreadcrumb
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="medium" />}
        id="custom-breadcrumb"
      >
        <Link
          underline="hover"
          href={homeLink}
          className="link"
          key="home"
        >
          <HomeIcon sx={{ mr: 0 }} color="primary" />
        </Link>
        {crumbs.map((crumb) => (
          <Link
            underline="hover"
            href={crumb.link}
            key={crumb.label}
            className={`link ${
              crumb.link && crumb.link !== ""
                ? "active-link"
                : "disabled-link"
            }`}
          >
            {crumb.icon}
            {crumb.label}
          </Link>
        ))}
      </CustomBreadcrumb>
    </div>
  );
}

Breadcrumbs.propTypes = {
  homeLink: PropTypes.string,
  crumbs: PropTypes.array.isRequired,
};

Breadcrumbs.defaultProps = {
  homeLink: "#",
};
