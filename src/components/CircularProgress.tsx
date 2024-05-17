export function CircularProgress({
  percent,
  icon,
  color,
  title,
  width = "w-12",
}: {
  percent: number;
  icon: string;
  color: string;
  title: string;
  width?: string;
}) {
  return (
    <div class="flex flex-row items-center gap-4">
      <div class="relative m-1">
        <div
          class="percent w-24 h-24 rounded-full"
          style={`background-image: conic-gradient(${color} 0%, ${color} ${percent}%, rgb(217, 217, 217) ${percent}%, rgb(217, 217, 217) 100%);`}
        ></div>
        <div class="flex justify-center items-center absolute top-2 left-2 bg-white w-20 h-20 rounded-full">
          <img src={icon} class={width} />
        </div>
      </div>
      <h4 class="font-semibold text-lg">{title}</h4>
    </div>
  );
}
