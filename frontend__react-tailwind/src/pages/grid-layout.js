import React from "react";
import styled from "styled-components";

const Grid = styled.div`
    display: grid;
  grid-template-areas:
    "header header header"
    "aside main main"
    "footer footer footer";
`;

export default function GridLayout() {
  return (
    <Grid>
      <div style={{ gridArea: "header", background: "red" }}>Header</div>
      <div style={{ gridArea: "header", background: "red" }}>Header</div>
      <div style={{ gridArea: "header", background: "red" }}>Header</div>
      <div style={{ gridArea: "aside", background: "blue" }}> Sidebar </div>
      <div style={{ gridArea: "main", background: "yellow" }}> Main </div>
      <div style={{ gridArea: "main", background: "yellow" }}> Main </div>
      <div style={{ gridArea: "main", background: "yellow" }}> Main </div>
      <div style={{ gridArea: "footer", background: "brown" }}>Footer </div>
      <div style={{ gridArea: "footer", background: "brown" }}>Footer </div>
      <div style={{ gridArea: "footer", background: "brown" }}>Footer </div>
    </Grid>
  );
}
