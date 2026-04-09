import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "@/app/layout";

// Mock child components to isolate layout tests
jest.mock("@/components/Navbar", () => {
  const MockNavbar = () => <nav data-testid="navbar" />;
  MockNavbar.displayName = "MockNavbar";
  return MockNavbar;
});

jest.mock("@/components/CyberBackground", () => {
  const MockCyberBackground = () => <div data-testid="cyber-background" />;
  MockCyberBackground.displayName = "MockCyberBackground";
  return MockCyberBackground;
});

jest.mock("@/components/CyberCharacter", () => {
  const MockCyberCharacter = () => <div data-testid="cyber-character" />;
  MockCyberCharacter.displayName = "MockCyberCharacter";
  return MockCyberCharacter;
});

// Mock globals.css import
jest.mock("@/app/globals.css", () => ({}));

describe("layout.tsx - metadata export", () => {
  it("has the correct title", () => {
    expect(metadata.title).toBe("ShopHub // CYBER MARKET");
  });

  it("has the correct description", () => {
    expect(metadata.description).toBe("Next-gen shopping. Zero compromises.");
  });

  it("does not use the old title", () => {
    expect(metadata.title).not.toBe("ShopHub — Modern Shopping Mall");
  });

  it("does not use the old description", () => {
    expect(metadata.description).not.toBe("Discover quality products at great prices.");
  });
});

describe("RootLayout - structure", () => {
  it("renders without crashing", () => {
    expect(() =>
      render(<RootLayout>{"content"}</RootLayout>)
    ).not.toThrow();
  });

  it("renders CyberBackground component", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    expect(screen.getByTestId("cyber-background")).toBeInTheDocument();
  });

  it("renders CyberCharacter component", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    expect(screen.getByTestId("cyber-character")).toBeInTheDocument();
  });

  it("renders Navbar component", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders children inside main element", () => {
    render(<RootLayout>{"hello world"}</RootLayout>);
    const main = document.querySelector("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveTextContent("hello world");
  });

  it("main element has min-h-screen and relative classes", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    const main = document.querySelector("main");
    expect(main).toHaveClass("min-h-screen");
    expect(main).toHaveClass("relative");
  });

  it("main element has zIndex of 3 to appear above background effects", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    const main = document.querySelector("main");
    expect(main).toHaveStyle({ zIndex: 3 });
  });

  it("renders a footer element", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    expect(document.querySelector("footer")).toBeInTheDocument();
  });

  it("footer has cyber panel background class", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    const footer = document.querySelector("footer");
    expect(footer).toHaveClass("bg-cyber-panel");
  });

  it("footer has cyber border class", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    const footer = document.querySelector("footer");
    expect(footer).toHaveClass("border-cyber-border");
  });

  it("footer has zIndex of 3 to appear above background effects", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    const footer = document.querySelector("footer");
    expect(footer).toHaveStyle({ zIndex: 3 });
  });

  it("footer contains the current year in copyright text", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    const currentYear = new Date().getFullYear().toString();
    const footer = document.querySelector("footer");
    expect(footer).toHaveTextContent(currentYear);
  });

  it("footer contains 'ShopHub' brand text", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    const footer = document.querySelector("footer");
    expect(footer).toHaveTextContent("ShopHub");
  });

  it("footer contains 'v2.0.87' version text", () => {
    render(<RootLayout>{"content"}</RootLayout>);
    const footer = document.querySelector("footer");
    expect(footer).toHaveTextContent("v2.0.87");
  });

  it("CyberBackground appears before CyberCharacter in DOM order", () => {
    const { container } = render(<RootLayout>{"content"}</RootLayout>);
    const bg = screen.getByTestId("cyber-background");
    const char = screen.getByTestId("cyber-character");
    const allNodes = Array.from(container.querySelectorAll("[data-testid]"));
    const bgIndex = allNodes.indexOf(bg);
    const charIndex = allNodes.indexOf(char);
    expect(bgIndex).toBeLessThan(charIndex);
  });

  it("CyberCharacter appears before Navbar in DOM order", () => {
    const { container } = render(<RootLayout>{"content"}</RootLayout>);
    const char = screen.getByTestId("cyber-character");
    const navbar = screen.getByTestId("navbar");
    const allNodes = Array.from(container.querySelectorAll("[data-testid]"));
    const charIndex = allNodes.indexOf(char);
    const navbarIndex = allNodes.indexOf(navbar);
    expect(charIndex).toBeLessThan(navbarIndex);
  });
});