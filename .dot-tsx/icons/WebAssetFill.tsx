import type { SVGProps } from "react";
export default function WebAssetFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18.75 3A3.25 3.25 0 0 1 22 6.25v11.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75V6.25A3.25 3.25 0 0 1 5.25 3zm-1.502 3.5h-10.5a.75.75 0 1 0 0 1.5h10.5a.75.75 0 0 0 0-1.5"
      />
    </svg>
  );
}
