import type { SVGProps } from "react";
export default function PersonMailOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11 15.5c0-.563.186-1.082.5-1.5H5.252a2.25 2.25 0 0 0-2.249 2.25v.577c0 .892.319 1.756.899 2.435 1.566 1.834 3.952 2.74 7.098 2.74h.05A2.5 2.5 0 0 1 11 21.5v-.999c-2.738 0-4.704-.745-5.958-2.213a2.25 2.25 0 0 1-.539-1.461v-.578a.75.75 0 0 1 .75-.749zm0-13.495a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m6.51 15.422-5.491-3.203A2 2 0 0 1 14 14h7a2 2 0 0 1 2 1.97z"
      />
      <path
        fill="currentColor"
        d="M17.737 19.94 23 17.108V21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4.13l5.248 3.062a.5.5 0 0 0 .489.009Z"
      />
    </svg>
  );
}
