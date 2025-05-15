import type { SVGProps } from "react";
export default function FlipHorizontalOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4.5 17.5a.75.75 0 0 1-.659-1.108l6.25-11.5a.75.75 0 0 1 1.409.358v11.5a.75.75 0 0 1-.75.75zm15.645-.367a.75.75 0 0 1-.645.367h-6.25a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 1.409-.358l6.25 11.5a.75.75 0 0 1-.014.741M14 8.201V16h4.239L14 8.2Z"
      />
    </svg>
  );
}
