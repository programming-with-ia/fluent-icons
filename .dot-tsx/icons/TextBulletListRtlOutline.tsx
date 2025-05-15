import type { SVGProps } from "react";
export default function TextBulletListRtlOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.75 17.5a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.494l.102.006h14.5a.75.75 0 0 0 .102-1.493zm3.5-7a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.494L2.75 13h14.5a.75.75 0 0 0 .102-1.493zm3.5-7a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.494l.102.006h14.5a.75.75 0 0 0 .102-1.493z"
      />
    </svg>
  );
}
