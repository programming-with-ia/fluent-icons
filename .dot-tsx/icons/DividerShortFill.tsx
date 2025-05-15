import type { SVGProps } from "react";
export default function DividerShortFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M11 5v14a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0" />
    </svg>
  );
}
