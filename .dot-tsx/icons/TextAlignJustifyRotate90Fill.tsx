import type { SVGProps } from "react";
export default function TextAlignJustifyRotate90Fill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M6 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0z"
      />
    </svg>
  );
}
