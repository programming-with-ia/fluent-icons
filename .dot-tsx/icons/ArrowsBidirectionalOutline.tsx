import type { SVGProps } from "react";
export default function ArrowsBidirectionalOutline({
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M15.001 8.999H9.004l.001-2.25a.75.75 0 0 0-1.268-.542l-5.503 5.25a.75.75 0 0 0 0 1.086l5.504 5.25.082.068a.75.75 0 0 0 1.185-.611V15H15v2.25a.75.75 0 0 0 1.269.542l5.497-5.25a.75.75 0 0 0 0-1.085l-5.497-5.25a.75.75 0 0 0-1.268.543zm-11.164 3 3.667-3.498.001 1.248c0 .415.336.75.75.75h7.497l.102-.007a.75.75 0 0 0 .648-.743V8.503L20.161 12l-3.66 3.496V14.25a.75.75 0 0 0-.75-.75H8.255l-.102.007a.75.75 0 0 0-.648.743v1.248L3.836 12Z"
      />
    </svg>
  );
}
