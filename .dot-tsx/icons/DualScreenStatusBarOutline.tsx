import type { SVGProps } from "react";
export default function DualScreenStatusBarOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m12.748 4.001-.001.002h7.498c.967 0 1.75.784 1.75 1.75v12.495a1.75 1.75 0 0 1-1.75 1.75h-8.997l-.001-.002H3.75A1.75 1.75 0 0 1 2 18.246V5.751c0-.967.784-1.75 1.75-1.75zm7.497 1.502h-7.497v12.995h7.497a.25.25 0 0 0 .25-.25V5.754a.25.25 0 0 0-.25-.25Zm-8.997-.002H3.75a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.498zm7.502.999a.75.75 0 0 1 0 1.5h-4.502a.75.75 0 0 1 0-1.5z"
      />
    </svg>
  );
}
