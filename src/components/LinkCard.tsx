import { IconTypes } from "solid-icons";
import { twMerge } from "tailwind-merge";

export default function LinkCard({
  href,
  title,
  user,
  icon,
  className,
}: {
  href?: string;
  title: string;
  user: string;
  icon: IconTypes;
  className: string;
}) {
  return (
    <>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div
            class={twMerge(
              "flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300",
              className
            )}
          >
            {icon({ size: 24, color: "#FFF", class: "fill-white" })}
            <div>
              <h4 class="font-semibold text-lg">{title}</h4>
              <p>{user}</p>
            </div>
          </div>
        </a>
      ) : (
        <div
          class={twMerge(
            "flex flex-row items-center px-4 py-3 rounded-lg gap-4 drop-shadow-lg hover:drop-shadow duration-300",
            className
          )}
        >
          {icon({ size: 24, color: "#FFF", class: "fill-white" })}
          <div>
            <h4 class="font-semibold text-lg">{title}</h4>
            <p>{user}</p>
          </div>
        </div>
      )}
    </>
  );
}
