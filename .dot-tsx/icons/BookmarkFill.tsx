import type { SVGProps } from "react";
export default function BookmarkFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6.19 21.854a.75.75 0 0 1-1.188-.61V6.25A3.25 3.25 0 0 1 8.252 3h7.499A3.25 3.25 0 0 1 19 6.249v14.996a.75.75 0 0 1-1.188.609l-5.811-4.181-5.812 4.18Z"
      />
    </svg>
  );
}
