import type { SVGProps } from "react";
export default function DocumentOnePageOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17.75 2.001a2.25 2.25 0 0 1 2.245 2.096L20 4.25v15.498a2.25 2.25 0 0 1-2.096 2.245l-.154.005H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75V4.251a2.25 2.25 0 0 1 2.096-2.245l.154-.005zm0 1.5H6.25a.75.75 0 0 0-.743.648l-.007.102v15.498c0 .38.282.694.648.743l.102.007h11.5a.75.75 0 0 0 .743-.648l.007-.102V4.251a.75.75 0 0 0-.648-.743z"
      />
      <path
        fill="currentColor"
        d="M7 15.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m0-8A.75.75 0 0 1 7.75 7h8.5a.75.75 0 1 1 0 1.5h-8.5A.75.75 0 0 1 7 7.75m0 4a.75.75 0 0 1 .75-.75h8.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75"
      />
    </svg>
  );
}
