import type { SVGProps } from "react";
export default function TextColumnOneWideOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3.75 5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zM3 13.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M3.75 17a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z"
      />
    </svg>
  );
}
