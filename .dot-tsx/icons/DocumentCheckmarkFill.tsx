import type { SVGProps } from "react";
export default function DocumentCheckmarkFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.498V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zm-1.5 15a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L5.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"
      />
    </svg>
  );
}
