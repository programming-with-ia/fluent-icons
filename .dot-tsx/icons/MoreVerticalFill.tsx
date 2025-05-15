import type { SVGProps } from "react";
export default function MoreVerticalFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-2 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
      />
    </svg>
  );
}
