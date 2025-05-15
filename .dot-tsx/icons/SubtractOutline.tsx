import type { SVGProps } from "react";
export default function SubtractOutline({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3.755 12.5h16.492a.75.75 0 0 0 0-1.5H3.755a.75.75 0 0 0 0 1.5"
      />
    </svg>
  );
}
