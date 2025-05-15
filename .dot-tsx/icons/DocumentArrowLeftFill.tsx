import type { SVGProps } from "react";
export default function DocumentArrowLeftFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.498V4a2 2 0 0 1 2-2z"
      />
      <path
        fill="currentColor"
        d="M13.5 2.5V8a.5.5 0 0 0 .5.5h5.5zm-1.5 15a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.5.5a.5.5 0 0 0 0-1H4.707l1.647-1.646a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L4.707 18z"
      />
    </svg>
  );
}
