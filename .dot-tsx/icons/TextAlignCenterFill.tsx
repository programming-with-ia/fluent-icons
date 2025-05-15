import type { SVGProps } from "react";
export default function TextAlignCenterFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m2 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m-3-7a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"
      />
    </svg>
  );
}
