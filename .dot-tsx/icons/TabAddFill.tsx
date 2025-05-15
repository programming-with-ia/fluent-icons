import type { SVGProps } from "react";
export default function TabAddFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.022a6.5 6.5 0 0 0-2-.848V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5.174c.17.72.46 1.395.848 2H6a3 3 0 0 1-3-3z"
      />
      <path
        fill="currentColor"
        d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.503a.5.5 0 1 1 0 1h-2.502Z"
      />
    </svg>
  );
}
