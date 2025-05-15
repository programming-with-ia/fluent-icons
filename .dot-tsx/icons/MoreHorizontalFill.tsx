import type { SVGProps } from "react";
export default function MoreHorizontalFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </svg>
  );
}
