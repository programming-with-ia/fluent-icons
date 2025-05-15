import type { SVGProps } from "react";
export default function CloudFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6.087 9.75a5.752 5.752 0 0 1 11.326 0h.087a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8z"
      />
    </svg>
  );
}
