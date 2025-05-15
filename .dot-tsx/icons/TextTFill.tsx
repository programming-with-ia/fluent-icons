import type { SVGProps } from "react";
export default function TextTFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4.75 5a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V6H13v12h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V6H6.75v1a1 1 0 0 1-2 0z"
      />
    </svg>
  );
}
