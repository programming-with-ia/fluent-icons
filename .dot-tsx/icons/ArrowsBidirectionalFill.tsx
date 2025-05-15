import type { SVGProps } from "react";
export default function ArrowsBidirectionalFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M15.001 8.999H9.004l.001-2.25a.75.75 0 0 0-1.268-.542l-5.503 5.25a.75.75 0 0 0 0 1.086l5.504 5.25.082.068a.75.75 0 0 0 1.185-.611V15H15v2.25a.75.75 0 0 0 1.269.542l5.497-5.25a.75.75 0 0 0 0-1.085l-5.497-5.25a.75.75 0 0 0-1.268.543z"
      />
    </svg>
  );
}
