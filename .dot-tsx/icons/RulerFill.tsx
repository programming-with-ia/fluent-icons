import type { SVGProps } from "react";
export default function RulerFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M15.253 1.999c.966 0 1.75.783 1.75 1.75v16.503a1.75 1.75 0 0 1-1.75 1.75H8.75A1.75 1.75 0 0 1 7 20.252V3.749c0-.967.784-1.75 1.75-1.75zM12.25 8H8.5v1.5h3.75a.75.75 0 0 0 0-1.5m-1.923 3.248H8.5v1.5h1.827a.75.75 0 0 0 0-1.5M12.25 14.5H8.5V16h3.75a.75.75 0 0 0 0-1.5m-1.923 3H8.5V19h1.827a.75.75 0 0 0 0-1.5m0-12.502H8.5v1.5h1.827a.75.75 0 0 0 0-1.5"
      />
    </svg>
  );
}
