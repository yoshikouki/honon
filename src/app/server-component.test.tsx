import { describe, it } from "bun:test";
import { render, screen } from "@testing-library/react";

import { ServerComponent } from "./server-component";

describe("App", () => {
  it("should initialize with the correct initial state", () => {
    render(<ServerComponent message={"testMessage"} />);
    screen.getByText("S: testMessage");
  });
});
