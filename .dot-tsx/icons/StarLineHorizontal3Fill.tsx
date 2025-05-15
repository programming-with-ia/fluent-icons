import type { SVGProps } from "react";
export default function StarLineHorizontal3Fill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l1.687 3.425a2.25 2.25 0 0 0-.678 4.222 2.25 2.25 0 0 0 0 4 2.25 2.25 0 0 0-.767 3.352l-6.168 3.24c-.99.521-2.148-.32-1.96-1.423l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88zM14.5 16.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.747.747 0 0 1-.75-.75m0-4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        d="M14.5 8.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75"
      />
    </svg>
  );
}
