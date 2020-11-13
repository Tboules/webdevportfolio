import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface PageButtonProps {
  children: React.ReactNode;
  path: string;
}

export const PageButton = ({ children, path }: PageButtonProps) => {
  return (
    <div style={{ marginTop: "10px", marginBottom: "40px" }}>
      <Link style={{ textDecoration: "none" }} to={path}>
        {children}
      </Link>
    </div>
  );
};
