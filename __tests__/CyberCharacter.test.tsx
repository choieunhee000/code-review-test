import React from "react";
import { render, screen } from "@testing-library/react";
import CyberCharacter from "@/components/CyberCharacter";

describe("CyberCharacter", () => {
  it("renders without crashing", () => {
    expect(() => render(<CyberCharacter />)).not.toThrow();
  });

  it("renders the outer container div", () => {
    const { container } = render(<CyberCharacter />);
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv.tagName).toBe("DIV");
  });

  it("container is fixed positioned on the right side", () => {
    const { container } = render(<CyberCharacter />);
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveClass("fixed");
    expect(outerDiv).toHaveClass("right-0");
  });

  it("container has pointer-events-none and select-none for non-interactive overlay", () => {
    const { container } = render(<CyberCharacter />);
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveClass("pointer-events-none");
    expect(outerDiv).toHaveClass("select-none");
  });

  it("container is hidden by default and only visible on xl breakpoint", () => {
    const { container } = render(<CyberCharacter />);
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveClass("hidden");
    expect(outerDiv).toHaveClass("xl:block");
  });

  it("container has correct z-index of 2", () => {
    const { container } = render(<CyberCharacter />);
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveStyle({ zIndex: 2 });
  });

  it("container has opacity of 0.78", () => {
    const { container } = render(<CyberCharacter />);
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveStyle({ opacity: 0.78 });
  });

  it("container has width of 170px", () => {
    const { container } = render(<CyberCharacter />);
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveStyle({ width: "170px" });
  });

  it("renders exactly two SVG elements", () => {
    const { container } = render(<CyberCharacter />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs).toHaveLength(2);
  });

  it("warrior SVG has correct viewBox of '0 0 200 430'", () => {
    const { container } = render(<CyberCharacter />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs[0]).toHaveAttribute("viewBox", "0 0 200 430");
  });

  it("drone SVG has correct viewBox of '0 0 120 60'", () => {
    const { container } = render(<CyberCharacter />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs[1]).toHaveAttribute("viewBox", "0 0 120 60");
  });

  it("warrior SVG has correct width of 170", () => {
    const { container } = render(<CyberCharacter />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs[0]).toHaveAttribute("width", "170");
  });

  it("drone SVG has correct width of 120", () => {
    const { container } = render(<CyberCharacter />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs[1]).toHaveAttribute("width", "120");
  });

  it("defines SVG filter with id 'gc-warrior' for cyan glow", () => {
    const { container } = render(<CyberCharacter />);
    const gcFilter = container.querySelector("filter#gc-warrior");
    expect(gcFilter).toBeInTheDocument();
  });

  it("defines SVG filter with id 'gm-warrior' for magenta glow", () => {
    const { container } = render(<CyberCharacter />);
    const gmFilter = container.querySelector("filter#gm-warrior");
    expect(gmFilter).toBeInTheDocument();
  });

  it("floating group has cyberFloat animation style", () => {
    const { container } = render(<CyberCharacter />);
    const floatingGroup = container.querySelector("g");
    expect(floatingGroup).toHaveStyle({ animation: "cyberFloat 5s ease-in-out infinite" });
  });

  it("drone SVG has cyberDroneFloat animation style", () => {
    const { container } = render(<CyberCharacter />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs[1]).toHaveStyle({ animation: "cyberDroneFloat 3.5s ease-in-out infinite" });
  });

  it("drone SVG has 'mx-auto mt-4' class for centered positioning below warrior", () => {
    const { container } = render(<CyberCharacter />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs[1]).toHaveClass("mx-auto");
    expect(svgs[1]).toHaveClass("mt-4");
  });

  it("warrior SVG defs has feGaussianBlur with stdDeviation 2.5 for cyan glow filter", () => {
    const { container } = render(<CyberCharacter />);
    const gcFilter = container.querySelector("filter#gc-warrior");
    const blur = gcFilter?.querySelector("feGaussianBlur");
    expect(blur).toBeInTheDocument();
    expect(blur).toHaveAttribute("stdDeviation", "2.5");
  });

  it("warrior SVG defs has feGaussianBlur with stdDeviation 3.5 for magenta glow filter", () => {
    const { container } = render(<CyberCharacter />);
    const gmFilter = container.querySelector("filter#gm-warrior");
    const blur = gmFilter?.querySelector("feGaussianBlur");
    expect(blur).toBeInTheDocument();
    expect(blur).toHaveAttribute("stdDeviation", "3.5");
  });

  it("renders hologram scan line rect with cyberScan animation", () => {
    const { container } = render(<CyberCharacter />);
    const scanRect = Array.from(container.querySelectorAll("rect")).find(
      (el) => el.getAttribute("style")?.includes("cyberScan")
    );
    expect(scanRect).toBeInTheDocument();
  });

  it("renders drone body polygon element", () => {
    const { container } = render(<CyberCharacter />);
    const svgs = container.querySelectorAll("svg");
    const dronePolygon = svgs[1].querySelector("polygon");
    expect(dronePolygon).toBeInTheDocument();
  });
});