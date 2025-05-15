import type { SVGProps } from "react";
export default function TableCellsMergeOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75H11v3H4.5zm8 10.25h7v1.25a1.75 1.75 0 0 1-1.75 1.75H12.5zm7-9h-7v-3h5.25c.966 0 1.75.784 1.75 1.75zm-8.5 9v3H6.25a1.75 1.75 0 0 1-1.75-1.75V16.5zM4.5 9h15v6h-15z"
      />
    </svg>
  );
}
