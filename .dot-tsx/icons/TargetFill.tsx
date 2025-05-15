import type { SVGProps } from "react";
export default function TargetFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      <path
        fill="currentColor"
        d="M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      />
      <path
        fill="currentColor"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
      />
    </svg>
  );
}
