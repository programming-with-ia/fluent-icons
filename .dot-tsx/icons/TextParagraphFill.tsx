import type { SVGProps } from "react";
export default function TextParagraphFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.25 12.25A4.25 4.25 0 0 1 16.5 8h4.75a.75.75 0 0 1 0 1.5H21v11.75a.75.75 0 0 1-1.5 0V9.5h-1v11.75a.75.75 0 0 1-1.5 0V16.5h-.5a4.25 4.25 0 0 1-4.25-4.25M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm8.755 5H3a1 1 0 1 0 0 2h8.256a5.2 5.2 0 0 1 .5-2Z"
      />
      <path
        fill="currentColor"
        d="M12.027 15H3a1 1 0 1 0 0 2h11.261a5.27 5.27 0 0 1-2.234-2"
      />
    </svg>
  );
}
