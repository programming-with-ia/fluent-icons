import type { SVGProps } from "react";
export default function ShareScreenStopOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M2 6.25A2.25 2.25 0 0 1 4.25 4h15.5A2.25 2.25 0 0 1 22 6.25v11.5A2.25 2.25 0 0 1 19.75 20H4.25A2.25 2.25 0 0 1 2 17.75zm2.25-.75a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M8.22 8.215a.75.75 0 0 1 1.06 0l2.72 2.72 2.725-2.716a.75.75 0 0 1 1.06 1.062l-2.724 2.715 2.724 2.724a.75.75 0 1 1-1.06 1.06L12 13.057 9.28 15.78a.75.75 0 0 1-1.06-1.06l2.72-2.724-2.72-2.72a.75.75 0 0 1 0-1.06Z"
      />
    </svg>
  );
}
