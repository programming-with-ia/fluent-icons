import type { SVGProps } from "react";
export default function PictureInPictureOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M16 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      />
      <path
        fill="currentColor"
        d="M8 10.5A1.5 1.5 0 0 1 9.5 9h8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 8 15.5zm1.5 0v4.394l2.082-2.255a1.25 1.25 0 0 1 1.836 0l2.633 2.852-.01.009H17.5v-5zm3 3.356L10.982 15.5h3.036z"
      />
      <path
        fill="currentColor"
        d="M5.75 4A3.75 3.75 0 0 0 2 7.75v8.5A3.75 3.75 0 0 0 5.75 20h12.5A3.75 3.75 0 0 0 22 16.25v-8.5A3.75 3.75 0 0 0 18.25 4zM3.5 7.75A2.25 2.25 0 0 1 5.75 5.5h12.5a2.25 2.25 0 0 1 2.25 2.25v8.5a2.25 2.25 0 0 1-2.25 2.25H5.75a2.25 2.25 0 0 1-2.25-2.25z"
      />
    </svg>
  );
}
