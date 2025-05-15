import type { SVGProps } from "react";
export default function MoreVerticalOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5m0 6a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5M10.25 18a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"
      />
    </svg>
  );
}
