import type { SVGProps } from "react";
export default function LineStyleFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M2 6a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1m0 12.5A1.5 1.5 0 0 1 3.5 17h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 18.5M10.75 5a1 1 0 1 0 0 2h2.5a1 1 0 1 0 0-2zM17 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"
      />
    </svg>
  );
}
