import React from "react";
import { render, screen, act } from "@testing-library/react";
import Navbar from "@/components/Navbar";

// Mock useCartStore
jest.mock("@/store/cartStore", () => ({
  useCartStore: jest.fn(),
}));

// Mock ShoppingCartIcon
jest.mock("@/components/icons", () => ({
  ShoppingCartIcon: ({ className }: { className?: string }) => (
    <svg data-testid="shopping-cart-icon" className={className} />
  ),
}));

// Mock next/link
jest.mock("next/link", () => {
  const MockLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

const { useCartStore } = jest.requireMock("@/store/cartStore");

function setupScrollY(value: number) {
  Object.defineProperty(window, "scrollY", { value, configurable: true, writable: true });
}

beforeEach(() => {
  useCartStore.mockReturnValue(0);
  setupScrollY(0);
  jest.spyOn(window, "addEventListener");
  jest.spyOn(window, "removeEventListener");
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Navbar - structure", () => {
  it("renders a header element", () => {
    render(<Navbar />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders the SHOP logo text", () => {
    render(<Navbar />);
    expect(screen.getByText("SHOP")).toBeInTheDocument();
  });

  it("renders the HUB logo text", () => {
    render(<Navbar />);
    expect(screen.getByText("HUB")).toBeInTheDocument();
  });

  it("renders the '// MKT' suffix span", () => {
    render(<Navbar />);
    expect(screen.getByText("// MKT")).toBeInTheDocument();
  });

  it("renders the SYS:ONLINE system status text", () => {
    render(<Navbar />);
    expect(screen.getByText("SYS:ONLINE")).toBeInTheDocument();
  });

  it("renders a Products navigation link", () => {
    render(<Navbar />);
    const productsLinks = screen.getAllByRole("link");
    const productsLink = productsLinks.find((link) =>
      link.textContent?.includes("Products")
    );
    expect(productsLink).toBeInTheDocument();
    expect(productsLink).toHaveAttribute("href", "/products");
  });

  it("renders a Cart link pointing to /cart", () => {
    render(<Navbar />);
    const cartLink = screen.getAllByRole("link").find((link) =>
      link.getAttribute("href") === "/cart"
    );
    expect(cartLink).toBeInTheDocument();
  });

  it("renders the shopping cart icon", () => {
    render(<Navbar />);
    expect(screen.getByTestId("shopping-cart-icon")).toBeInTheDocument();
  });
});

describe("Navbar - scroll behavior", () => {
  it("registers a scroll event listener on mount", () => {
    render(<Navbar />);
    expect(window.addEventListener).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
      { passive: true }
    );
  });

  it("removes the scroll event listener on unmount", () => {
    const { unmount } = render(<Navbar />);
    unmount();
    expect(window.removeEventListener).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
  });

  it("initially renders with non-scrolled (bg-cyber-panel) class", () => {
    render(<Navbar />);
    const header = screen.getByRole("banner");
    expect(header.className).toContain("bg-cyber-panel");
    expect(header.className).not.toContain("bg-cyber-bg/90");
  });

  it("applies scrolled classes when scrollY > 24", () => {
    render(<Navbar />);
    const header = screen.getByRole("banner");

    // Find the scroll event handler and trigger it
    const scrollCalls = (window.addEventListener as jest.Mock).mock.calls.filter(
      ([event]) => event === "scroll"
    );
    const scrollHandler = scrollCalls[0][1];

    act(() => {
      setupScrollY(25);
      scrollHandler();
    });

    expect(header.className).toContain("bg-cyber-bg/90");
    expect(header.className).toContain("backdrop-blur-md");
    expect(header.className).toContain("border-cyber-cyan/50");
  });

  it("keeps non-scrolled classes when scrollY <= 24", () => {
    render(<Navbar />);
    const header = screen.getByRole("banner");

    const scrollCalls = (window.addEventListener as jest.Mock).mock.calls.filter(
      ([event]) => event === "scroll"
    );
    const scrollHandler = scrollCalls[0][1];

    act(() => {
      setupScrollY(24);
      scrollHandler();
    });

    expect(header.className).not.toContain("bg-cyber-bg/90");
    expect(header.className).toContain("bg-cyber-panel");
    expect(header.className).toContain("border-cyber-cyan/25");
  });

  it("applies scrolled boxShadow style when scrolled", () => {
    render(<Navbar />);
    const header = screen.getByRole("banner");

    const scrollCalls = (window.addEventListener as jest.Mock).mock.calls.filter(
      ([event]) => event === "scroll"
    );
    const scrollHandler = scrollCalls[0][1];

    act(() => {
      setupScrollY(30);
      scrollHandler();
    });

    expect(header).toHaveStyle({
      boxShadow: "0 4px 30px #00e5ff0a, 0 1px 0 #00e5ff33",
    });
  });

  it("applies non-scrolled boxShadow style when not scrolled", () => {
    render(<Navbar />);
    const header = screen.getByRole("banner");
    expect(header).toHaveStyle({ boxShadow: "0 1px 0 #00e5ff1a" });
  });

  it("reverts to non-scrolled state when scrollY goes back to <= 24", () => {
    render(<Navbar />);
    const header = screen.getByRole("banner");

    const scrollHandler = (window.addEventListener as jest.Mock).mock.calls.find(
      ([event]) => event === "scroll"
    )[1];

    act(() => {
      setupScrollY(50);
      scrollHandler();
    });
    expect(header.className).toContain("bg-cyber-bg/90");

    act(() => {
      setupScrollY(10);
      scrollHandler();
    });
    expect(header.className).toContain("bg-cyber-panel");
    expect(header.className).not.toContain("bg-cyber-bg/90");
  });
});

describe("Navbar - cart badge", () => {
  it("does not show cart badge when totalItems is 0", () => {
    useCartStore.mockReturnValue(0);
    render(<Navbar />);
    const cartLink = screen.getAllByRole("link").find(
      (link) => link.getAttribute("href") === "/cart"
    )!;
    // Badge span should not be present
    const badge = cartLink.querySelector(".bg-cyber-magenta");
    expect(badge).not.toBeInTheDocument();
  });

  it("shows cart badge with exact count when totalItems is 1", () => {
    useCartStore.mockReturnValue(1);
    render(<Navbar />);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("shows cart badge with exact count when totalItems is 9", () => {
    useCartStore.mockReturnValue(9);
    render(<Navbar />);
    expect(screen.getByText("9")).toBeInTheDocument();
  });

  it("shows '9+' badge when totalItems is 10", () => {
    useCartStore.mockReturnValue(10);
    render(<Navbar />);
    expect(screen.getByText("9+")).toBeInTheDocument();
  });

  it("shows '9+' badge when totalItems is 100", () => {
    useCartStore.mockReturnValue(100);
    render(<Navbar />);
    expect(screen.getByText("9+")).toBeInTheDocument();
  });

  it("badge has cyber magenta background class", () => {
    useCartStore.mockReturnValue(3);
    const { container } = render(<Navbar />);
    const badge = container.querySelector(".bg-cyber-magenta");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("3");
  });

  it("badge has neon pink box shadow style for 3 items", () => {
    useCartStore.mockReturnValue(3);
    const { container } = render(<Navbar />);
    const badge = container.querySelector(".bg-cyber-magenta");
    expect(badge).toHaveStyle({ boxShadow: "0 0 8px #ff0090" });
  });
});