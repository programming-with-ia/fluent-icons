import type { SVGProps } from "react";
export default function DocumentFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
      />
      <path fill="currentColor" d="M13.5 2.5V8a.5.5 0 0 0 .5.5h5.5z" />
    </svg>
  );
}
