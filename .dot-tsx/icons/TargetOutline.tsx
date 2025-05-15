import type { SVGProps } from "react";
export default function TargetOutline({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M11.998 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      <path
        fill="currentColor"
        d="M5.998 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6-4.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"
      />
      <path
        fill="currentColor"
        d="M1.996 12c0-5.524 4.478-10.002 10.002-10.002S22 6.476 22 12s-4.478 10.002-10.002 10.002S1.996 17.524 1.996 12m10.002-8.502a8.502 8.502 0 1 0 0 17.004 8.502 8.502 0 0 0 0-17.004"
      />
    </svg>
  );
}
