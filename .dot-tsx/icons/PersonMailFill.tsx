import type { SVGProps } from "react";
export default function PersonMailFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11 15.5c0-.563.186-1.082.5-1.5H5.252a2.25 2.25 0 0 0-2.249 2.25v.919c0 .572.179 1.13.51 1.596C5.057 20.929 7.58 22 11 22h.05a2.5 2.5 0 0 1-.05-.5zm0-13.495a5 5 0 1 1 0 10 5 5 0 0 1 0-10m6.51 16.922-5.491-3.203A2 2 0 0 1 14 14h7a2 2 0 0 1 2 1.97z"
      />
      <path
        fill="currentColor"
        d="M17.737 19.94 23 17.108V21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4.13l5.248 3.062a.5.5 0 0 0 .489.009Z"
      />
    </svg>
  );
}
