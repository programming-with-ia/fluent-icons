import type { SVGProps } from "react";
export default function PersonNoteOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11 15c0-.35.06-.687.17-1H4.253a2.25 2.25 0 0 0-2.249 2.249v.578c0 .892.319 1.756.899 2.435 1.566 1.834 3.952 2.74 7.098 2.74q.596 0 1.156-.044A3 3 0 0 1 11 21v-.535q-.482.036-1 .036c-2.738 0-4.704-.746-5.958-2.213a2.25 2.25 0 0 1-.539-1.462v-.577a.75.75 0 0 1 .75-.75H11zM10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M12 15a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2zm2.5 1a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z"
      />
    </svg>
  );
}
