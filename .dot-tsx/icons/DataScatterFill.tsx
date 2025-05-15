import type { SVGProps } from "react";
export default function DataScatterFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 3.75a.75.75 0 0 1 1.5 0V19.5h15.75a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75zM14 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
      />
      <path
        fill="currentColor"
        d="M9 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6m6 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
      />
    </svg>
  );
}
