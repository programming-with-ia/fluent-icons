import type { SVGProps } from "react";
export default function TextBulletListRtlFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.504 16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-4 .5H3a1 1 0 0 0-.117 1.993L3 19h13.503a1 1 0 0 0 .117-1.993L16.503 17Zm4-6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-4 .5H3a1 1 0 0 0-.117 1.993L3 13h13.503a1 1 0 0 0 .117-1.993L16.503 11Zm4-6.492a1.5 1.5 0 1 0 0 2.999 1.5 1.5 0 0 0 0-3Zm-4 .493H3a1 1 0 0 0-.117 1.993L3 7.001h13.503a1 1 0 0 0 .117-1.994l-.117-.006Z"
      />
    </svg>
  );
}
