import type { SVGProps } from "react";
export default function TextColorAccentFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3.501 17a2 2 0 0 1 2-2H17.5a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2H5.501a2 2 0 0 1-2-2z"
      />
    </svg>
  );
}
