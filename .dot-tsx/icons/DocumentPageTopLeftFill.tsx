import type { SVGProps } from "react";
export default function DocumentPageTopLeftFill({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="m9.256 9 .238-1.5h1.481L10.738 9z" />
      <path
        fill="currentColor"
        d="M17.75 2.001a2.25 2.25 0 0 1 2.245 2.096L20 4.25v15.498a2.25 2.25 0 0 1-2.096 2.245l-.154.005H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75V4.251a2.25 2.25 0 0 1 2.096-2.245l.154-.005zm-7.355 9.16a.75.75 0 1 0 1.482.234l.142-.895h.731a.75.75 0 0 0 0-1.5h-.494l.238-1.5h.756a.75.75 0 0 0 0-1.5h-.519l.162-1.025a.75.75 0 1 0-1.481-.234L11.212 6h-1.48l.161-1.025a.75.75 0 0 0-1.481-.234L8.212 6H7.25a.75.75 0 1 0 0 1.5h.725L7.738 9H6.75a.75.75 0 1 0 0 1.5h.75l-.105.66a.75.75 0 0 0 1.482.235l.142-.895H10.5z"
      />
    </svg>
  );
}
