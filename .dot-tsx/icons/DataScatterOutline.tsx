import type { SVGProps } from "react";
export default function DataScatterOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 3.75a.75.75 0 0 1 1.5 0V19.5h15.75a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75zM17 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
      />
      <path
        fill="currentColor"
        d="M6 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6 4.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1.5 3a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
      />
    </svg>
  );
}
