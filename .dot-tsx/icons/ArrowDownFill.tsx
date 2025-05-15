import type { SVGProps } from "react";
export default function ArrowDownFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19.716 13.704a1 1 0 1 0-1.425-1.403L13 17.67V4a1 1 0 0 0-2 0v13.665L5.715 12.3a1 1 0 0 0-1.425 1.403l6.823 6.925a1.25 1.25 0 0 0 1.78 0l6.823-6.925Z"
      />
    </svg>
  );
}
