import type { SVGProps } from "react";
export default function DualScreenHeaderOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m12.748 4.001-.001.002h7.498c.967 0 1.75.784 1.75 1.75v12.495a1.75 1.75 0 0 1-1.75 1.75h-8.997l-.001-.002H3.75A1.75 1.75 0 0 1 2 18.246V5.751c0-.967.784-1.75 1.75-1.75zm7.747 2.998h-7.748v11.5h7.498a.25.25 0 0 0 .25-.25zm-9.248 0H3.5v11.247c0 .138.112.25.25.25h7.498L11.247 7Z"
      />
    </svg>
  );
}
