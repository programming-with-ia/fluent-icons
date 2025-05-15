import type { SVGProps } from "react";
export default function TextAlignCenterRotate270Fill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6 4a1 1 0 0 0-1 1v14a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1m12 2a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1m-7-3a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0z"
      />
    </svg>
  );
}
