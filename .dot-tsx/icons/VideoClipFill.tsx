import type { SVGProps } from "react";
export default function VideoClipFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6.25 4h11.5a3.25 3.25 0 0 1 3.245 3.066L21 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L17.75 20H6.25a3.25 3.25 0 0 1-3.245-3.066L3 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245zh11.5zm3.803 5.585A.5.5 0 0 0 10 9.81v4.382a.5.5 0 0 0 .724.447l4.382-2.19a.5.5 0 0 0 0-.895l-4.382-2.191a.5.5 0 0 0-.671.223Z"
      />
    </svg>
  );
}
