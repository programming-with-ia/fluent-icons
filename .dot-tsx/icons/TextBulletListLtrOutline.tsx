import type { SVGProps } from "react";
export default function TextBulletListLtrOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3.25 17.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m3.5.5h14.5a.75.75 0 0 1 .102 1.494l-.102.006H6.75a.75.75 0 0 1-.102-1.493zh14.5zm-3.5-7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m3.5.5h14.5a.75.75 0 0 1 .102 1.494L21.25 13H6.75a.75.75 0 0 1-.102-1.493zh14.5zm-3.5-7a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.499Zm3.5.5h14.5a.75.75 0 0 1 .102 1.494l-.102.006H6.75a.75.75 0 0 1-.102-1.493zh14.5z"
      />
    </svg>
  );
}
