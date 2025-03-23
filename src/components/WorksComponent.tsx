import { WorksDialog } from "../components/WorksDialog";
import data from "../data/works.json";
import { isOpen } from "../utils/atoms";

const WorksComponent = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {data.map((work: WorksInfo) => {
          return (
            <button
              key={work.id}
              onClick={() => isOpen.set(work.id)}
              className="cursor-pointer duration-300 hover:drop-shadow drop-shadow-lg"
            >
              <picture>
                <source
                  srcSet={work.img
                    .replace("jpg", "webp")
                    .replace("png", "webp")}
                  type="image/webp"
                />
                <img src={work.img} className="rounded-md" />
              </picture>
            </button>
          );
        })}
      </div>
      {data.map((work: WorksInfo) => {
        return <WorksDialog data={work} key={work.id} />;
      })}
    </>
  );
};
export { WorksComponent };
