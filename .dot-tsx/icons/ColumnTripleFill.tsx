import type { SVGProps } from "react";
export default function ColumnTripleFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6.237 3c.967 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 6.237 21h-2.5a1.75 1.75 0 0 1-1.75-1.75V4.75a1.75 1.75 0 0 1 1.607-1.743L3.737 3zm14.026 0c.967 0 1.75.784 1.75 1.75v14.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75V4.75c0-.966.784-1.75 1.75-1.75zm-7.026 0c.967 0 1.75.784 1.75 1.75v14.5a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75V4.75c0-.966.784-1.75 1.75-1.75z"
      />
    </svg>
  );
}
