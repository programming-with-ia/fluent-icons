import type { SVGProps } from "react";
export default function PollFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.752 2a2.75 2.75 0 0 1 2.752 2.751V19.25a2.752 2.752 0 1 1-5.504 0V4.75A2.75 2.75 0 0 1 11.752 2m7 5a2.75 2.75 0 0 1 2.752 2.751v9.499a2.752 2.752 0 1 1-5.504 0v-9.5A2.75 2.75 0 0 1 18.752 7m-14 5a2.75 2.75 0 0 1 2.752 2.751v4.499a2.752 2.752 0 0 1-5.504 0v-4.5A2.75 2.75 0 0 1 4.752 12"
      />
    </svg>
  );
}
