import type { SVGProps } from "react";
export default function TextIndentDecreaseRtlFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M15 16H6.5a1 1 0 0 0-.117 1.993L6.5 18H15a1 1 0 0 0 .117-1.993zH6.5zm6.707-4.707-2-2a1 1 0 0 0-1.497 1.32l.083.094L19.586 12l-1.293 1.293a1 1 0 0 0 1.32 1.497l.094-.083 2-2a1 1 0 0 0 .083-1.32zl-2-2zM15 11l-11.5-.001a1 1 0 0 0-.117 1.993L3.5 13H15a1 1 0 0 0 .117-1.993zl-11.5-.001zm0-5H6.5a1 1 0 0 0-.117 1.993L6.5 8H15a1 1 0 0 0 .117-1.993zH6.5z"
      />
    </svg>
  );
}
