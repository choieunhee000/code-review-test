import React from "react";
import { render, act } from "@testing-library/react";
import CyberBackground from "@/components/CyberBackground";

// Mock canvas context methods
const mockGetContext = jest.fn();
const mockFillRect = jest.fn();
const mockFillText = jest.fn();

const mockCtx = {
  fillStyle: "",
  font: "",
  fillRect: mockFillRect,
  fillText: mockFillText,
};

// Mock requestAnimationFrame / cancelAnimationFrame
let rafCallbacks: Array<(time: number) => void> = [];
let rafIdCounter = 0;

beforeEach(() => {
  rafCallbacks = [];
  rafIdCounter = 0;
  mockGetContext.mockReturnValue(mockCtx);

  jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
    const id = ++rafIdCounter;
    rafCallbacks.push(cb);
    return id;
  });
  jest.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
  jest.spyOn(window, "addEventListener");
  jest.spyOn(window, "removeEventListener");

  // Mock HTMLCanvasElement.getContext
  HTMLCanvasElement.prototype.getContext = mockGetContext;
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("CyberBackground", () => {
  it("renders a canvas element", () => {
    const { container } = render(<CyberBackground />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });

  it("applies fixed positioning class and pointer-events-none", () => {
    const { container } = render(<CyberBackground />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toHaveClass("fixed");
    expect(canvas).toHaveClass("inset-0");
    expect(canvas).toHaveClass("pointer-events-none");
  });

  it("sets zIndex to 1 via inline style", () => {
    const { container } = render(<CyberBackground />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toHaveStyle({ zIndex: 1 });
  });

  it("sets opacity to 0.2 via inline style", () => {
    const { container } = render(<CyberBackground />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toHaveStyle({ opacity: 0.2 });
  });

  it("initializes canvas width and height to window dimensions", () => {
    Object.defineProperty(window, "innerWidth", { value: 1024, configurable: true });
    Object.defineProperty(window, "innerHeight", { value: 768, configurable: true });

    const { container } = render(<CyberBackground />);
    const canvas = container.querySelector("canvas") as HTMLCanvasElement;
    expect(canvas.width).toBe(1024);
    expect(canvas.height).toBe(768);
  });

  it("registers a resize event listener on mount", () => {
    render(<CyberBackground />);
    expect(window.addEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
  });

  it("calls requestAnimationFrame on mount", () => {
    render(<CyberBackground />);
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  it("removes the resize event listener on unmount", () => {
    const { unmount } = render(<CyberBackground />);
    unmount();
    expect(window.removeEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
  });

  it("calls cancelAnimationFrame on unmount", () => {
    const { unmount } = render(<CyberBackground />);
    unmount();
    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });

  it("resets canvas size on window resize", () => {
    render(<CyberBackground />);

    // Find the resize handler that was registered
    const resizeCalls = (window.addEventListener as jest.Mock).mock.calls.filter(
      ([event]) => event === "resize"
    );
    expect(resizeCalls.length).toBeGreaterThan(0);

    const resizeHandler = resizeCalls[0][1];

    // Change window dimensions and trigger resize
    Object.defineProperty(window, "innerWidth", { value: 1920, configurable: true });
    Object.defineProperty(window, "innerHeight", { value: 1080, configurable: true });

    act(() => {
      resizeHandler();
    });

    // After resize, init() should have been called again and canvas resized
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    expect(canvas.width).toBe(1920);
    expect(canvas.height).toBe(1080);
  });

  it("does not render if canvas context is unavailable", () => {
    mockGetContext.mockReturnValue(null);
    // Should not throw even if ctx is null
    expect(() => render(<CyberBackground />)).not.toThrow();
  });

  it("draw loop throttles: skips frames when elapsed time < 55ms", () => {
    render(<CyberBackground />);
    const initialCallCount = mockFillRect.mock.calls.length;

    // Trigger a draw call with time = 0 (first frame sets last=0)
    act(() => {
      if (rafCallbacks[0]) rafCallbacks[0](0);
    });

    // Trigger another draw call with time = 10ms (< 55ms threshold)
    act(() => {
      if (rafCallbacks[1]) rafCallbacks[1](10);
    });

    // fillRect should not have been called since elapsed < 55ms
    expect(mockFillRect.mock.calls.length).toBe(initialCallCount);
  });

  it("draw loop renders when elapsed time >= 55ms", () => {
    render(<CyberBackground />);

    // First draw call: sets last = 0 and draws
    act(() => {
      if (rafCallbacks[0]) rafCallbacks[0](0);
    });
    const afterFirstDraw = mockFillRect.mock.calls.length;

    // Second draw call after 100ms: should draw again
    act(() => {
      if (rafCallbacks[1]) rafCallbacks[1](100);
    });

    expect(mockFillRect.mock.calls.length).toBeGreaterThan(afterFirstDraw);
  });
});