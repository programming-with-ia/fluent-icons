import type { SVGProps } from "react";
export default function DataFunnelFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19.248 7.504a2.752 2.752 0 1 0 0-5.504H4.75a2.752 2.752 0 0 0 0 5.504zm-2 7a2.752 2.752 0 1 0 0-5.504H6.75a2.752 2.752 0 0 0 0 5.504zM17 18.752A2.75 2.75 0 0 0 14.248 16H9.75a2.752 2.752 0 0 0 0 5.504h4.498A2.75 2.75 0 0 0 17 18.752"
      />
    </svg>
  );
}
