import type { SVGProps } from "react";
export default function TextSortDescendingOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4.75 2a.75.75 0 1 0 0 1.5h3.387l-4.02 6.349A.75.75 0 0 0 4.75 11H9.5a.75.75 0 0 0 0-1.5H6.113l4.02-6.349A.75.75 0 0 0 9.5 2zm2.322 10a.75.75 0 0 0-.704.477l-3.317 8.5a.75.75 0 0 0 1.398.545l.79-2.022h3.555l.754 2.013a.75.75 0 0 0 1.405-.526l-3.184-8.5A.75.75 0 0 0 7.072 12m-.02 2.85L8.232 18H5.823l1.23-3.15Zm4.168 1.37a.75.75 0 0 1 1.06 0l3.22 3.22V2.75a.75.75 0 0 1 1.5 0v16.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06"
      />
    </svg>
  );
}
