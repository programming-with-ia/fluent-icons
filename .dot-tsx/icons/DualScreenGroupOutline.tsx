import type { SVGProps } from "react";
export default function DualScreenGroupOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.755 4.001v.002h7.498c.966 0 1.75.784 1.75 1.75v12.495a1.75 1.75 0 0 1-1.75 1.75h-8.998v-.002H3.756a1.75 1.75 0 0 1-1.75-1.75V5.751c0-.967.784-1.75 1.75-1.75h8.998Zm7.498 1.502h-7.498v12.995h7.498a.25.25 0 0 0 .25-.25V5.754a.25.25 0 0 0-.25-.25Zm-8.998-.002H3.757a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.498z"
      />
    </svg>
  );
}
