import type { SVGProps } from "react";
export default function ShareScreenPersonFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h6.868A4.3 4.3 0 0 1 12 19v-.5a2.5 2.5 0 0 1 2.5-2.5h.95a3.75 3.75 0 1 1 6.291-3H22V7.25A3.25 3.25 0 0 0 18.75 4zM21.5 17a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4s-5-2.029-5-4v-.5a1.5 1.5 0 0 1 1.5-1.5zM18 10.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5"
      />
    </svg>
  );
}
