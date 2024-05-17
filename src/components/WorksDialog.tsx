import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
  DialogOverlay,
} from "terracotta";
import { nl2br } from "../utils/nl2br";
import { open, setOpen } from "../signals";
import { FiGithub, FiGlobe } from "solid-icons/fi";

export default function WorksDialog({
  id,
  data,
}: {
  id: string;
  data: WorksInfo;
}) {
  function closeModal() {
    setOpen("");
  }

  return (
    <>
      <Transition appear show={id === open()}>
        <Dialog
          isOpen
          class="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div class="min-h-screen px-4 flex items-center justify-center">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DialogOverlay class="fixed inset-0 bg-gray-900 bg-opacity-50" />
            </TransitionChild>

            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel class="inline-block w-full max-w-sm md:max-w-lg overflow-hidden text-left align-middle transition-all transform bg-gray-50 shadow-xl rounded-2xl">
                <picture>
                  <source
                    srcset={data.img.replace("jpg", "webp")}
                    type="image/webp"
                  />
                  <img src={data.img} />
                </picture>
                <div class="px-6 my-4">
                  <DialogTitle as="h3" class="text-2xl font-bold text-gray-900">
                    {data.title}
                  </DialogTitle>
                  <ul class="my-2 list-none flex flex-row flex-wrap items-center gap-2">
                    {data.tech?.map((t) => (
                      <li class="bg-gray-900 text-white px-3 py-1 rounded-full">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div class="my-2 flex flex-row gap-3">
                    {data.url ? (
                      <a
                        class="p-2 bg-gray-900 rounded-full duration-200 hover:opacity-80"
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGlobe size={25} color="#fff" class="stroke-white" />
                      </a>
                    ) : (
                      ""
                    )}
                    {data.repo ? (
                      <a
                        class="flex items-center justify-center p-2 pr-2.5 bg-gray-900 rounded-full duration-200 hover:opacity-80"
                        href={data.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub size={23} color="#fff" class="stroke-white" />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                  <div class="mt-2">
                    <p
                      class="text-gray-900"
                      innerHTML={nl2br(data.description)}
                    ></p>
                  </div>

                  <div class="mt-4">
                    <button
                      type="button"
                      class="rounded bg-gray-900 text-white px-4 py-1 block ml-auto"
                      onClick={closeModal}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
