import type { SVGProps } from "react";
export default function WeatherSnowFill({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M9.75 18.151a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-6.75-1a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M12 4.001c3.169 0 4.966 2.097 5.227 4.63h.08A3.687 3.687 0 0 1 21 12.313a3.687 3.687 0 0 1-3.693 3.683H6.693A3.687 3.687 0 0 1 3 12.313a3.687 3.687 0 0 1 3.692-3.682h.08C7.036 6.08 8.832 4 12 4Z"
      />
    </svg>
  );
}
