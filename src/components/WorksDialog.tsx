import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { nl2br } from "../utils/nl2br.ts";
import { isOpen } from "../utils/atoms.ts";
import { useStore } from "@nanostores/react";
import { FiGlobe, FiGithub } from "react-icons/fi";

export function WorksDialog({ data }: { data: WorksInfo }) {
  const $isOpen = useStore(isOpen);
  function closeModal() {
    isOpen.set("");
  }

  return (
    <Dialog
      className="fixed inset-0 z-10 overflow-y-auto transition duration-300 ease-in-out data-[closed]:opacity-0 bg-gray-900/50"
      transition
      open={$isOpen === data.id}
      onClose={closeModal}
    >
      <div className="min-h-screen px-4 flex items-center justify-center">
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <DialogPanel
          transition
          className="inline-block w-full max-w-sm md:max-w-lg overflow-hidden text-left align-middle transition transform bg-gray-50 dark:bg-zinc-900 shadow-xl rounded-2xl duration-300 ease-in-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
        >
          <picture>
            <source
              srcSet={data.img.replace("jpg", "webp").replace("png", "webp")}
              type="image/webp"
            />
            <img src={data.img} />
          </picture>
          <div className="px-6 my-4">
            <DialogTitle
              as="h3"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              {data.title}
            </DialogTitle>
            <ul className="my-2 list-none flex flex-row flex-wrap items-center gap-2">
              {data.tech?.map((t) => (
                <li
                  className="bg-gray-900 text-white dark:bg-zinc-800 px-3 py-1 rounded-full"
                  key={t}
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="my-2 flex flex-row gap-3">
              {data.url ? (
                <a
                  className="p-2 bg-gray-900 dark:bg-zinc-800 rounded-full duration-200 hover:opacity-80"
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGlobe size={23} color="#fff" className="stroke-white" />
                </a>
              ) : (
                ""
              )}
              {data.repo ? (
                <a
                  className="flex items-center justify-center p-2 pr-2.5 bg-gray-900 dark:bg-zinc-800 rounded-full duration-200 hover:opacity-80"
                  href={data.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={23} color="#fff" className="stroke-white" />
                </a>
              ) : (
                ""
              )}
            </div>
            <div className="mt-2">
              <p
                className="text-gray-800 dark:text-white"
                dangerouslySetInnerHTML={{ __html: nl2br(data.description) }}
              ></p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="rounded bg-gray-900 dark:bg-zinc-800 text-white px-4 py-1 block ml-auto"
                onClick={closeModal}
              >
                OK
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
