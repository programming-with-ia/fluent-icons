import type { SVGProps } from "react";
export default function ToggleLeftFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17 7a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7zm-9.75 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      />
    </svg>
  );
}
