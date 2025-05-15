import type { SVGProps } from "react";
export default function TextBulletListTreeFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M7.5 15.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4 .5h9.503a1 1 0 0 1 .117 1.993l-.117.007H11.5a1 1 0 0 1-.116-1.994zm-8-5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4 .5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.993zm-4-5.493a1.5 1.5 0 1 1 0 2.999 1.5 1.5 0 0 1 0-3ZM7.5 6h13.503a1 1 0 0 1 .117 1.993L21.003 8H7.5a1 1 0 0 1-.116-1.993z"
      />
    </svg>
  );
}
