import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      This page is about stuff
      <div>
        <Link to="/">Take me Home!</Link>
      </div>
    </div>
  );
}
