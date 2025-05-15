import type { SVGProps } from "react";
export default function ProhibitedMultipleFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M10.75 19.5a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5m0-2a6.72 6.72 0 0 1-4.014-1.322l9.442-9.442A6.75 6.75 0 0 1 10.75 17.5m4.014-12.178-9.442 9.442a6.75 6.75 0 0 1 9.441-9.441ZM20.5 10.75a9.75 9.75 0 0 1-9.75 9.75 9.7 9.7 0 0 1-3.053-.488A8.75 8.75 0 0 0 20.012 7.696a9.7 9.7 0 0 1 .488 3.054"
      />
    </svg>
  );
}
