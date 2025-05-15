import type { SVGProps } from "react";
export default function TextBulletListLtrFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3.5 16.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4 .5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.993zh13.503zm-4-6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4 .5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.993zh13.503zm-4-6.492a1.5 1.5 0 1 1 0 2.999 1.5 1.5 0 0 1 0-3ZM7.5 5h13.503a1 1 0 0 1 .117 1.993L21.003 7H7.5a1 1 0 0 1-.116-1.994zh13.503z"
      />
    </svg>
  );
}
