import type { SVGProps } from "react";
export default function TableCellsMergeFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.5 21h5.25A3.25 3.25 0 0 0 21 17.75V17h-8.5zM21 7v-.75A3.25 3.25 0 0 0 17.75 3H12.5v4zM11 3H6.25A3.25 3.25 0 0 0 3 6.25V7h8zM3 8.5v7h18v-7zM3 17v.75A3.25 3.25 0 0 0 6.25 21H11v-4z"
      />
    </svg>
  );
}
