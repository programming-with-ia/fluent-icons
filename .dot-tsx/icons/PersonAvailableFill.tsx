import type { SVGProps } from "react";
export default function PersonAvailableFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-5.478 2A6.47 6.47 0 0 0 11 17.5c0 1.63.6 3.12 1.592 4.261q-1.194.24-2.592.24c-3.42 0-5.944-1.072-7.486-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.25 2.25 0 0 1 2.249-2.25h7.77Zm2.832 3.146a.5.5 0 0 0-.707.707l2 2a.5.5 0 0 0 .707 0l4-4a.5.5 0 0 0-.707-.707L16.5 18.793zM10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10"
      />
    </svg>
  );
}
