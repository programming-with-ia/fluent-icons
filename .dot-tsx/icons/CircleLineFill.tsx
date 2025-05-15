import type { SVGProps } from "react";
export default function CircleLineFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4.062 11h15.876a8.001 8.001 0 0 0-15.876 0m15.876 2H4.062a8.001 8.001 0 0 0 15.876 0M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
      />
    </svg>
  );
}
