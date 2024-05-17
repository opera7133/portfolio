import { createSignal } from "solid-js";
import { Title } from "@solidjs/meta";

const NotFound = () => {
  const [count, setCount] = createSignal(404);
  return (
    <>
      <Title>404 | wamo</Title>
      <div class="flex flex-col justify-center h-screen">
        <div class="container mx-auto max-w-5xl z-20">
          <div class="mx-4 text-center">
            <h2
              class="text-6xl mb-4 font-semibold font-futura"
              onClick={() => setCount(count() + 1)}
            >
              {count()} Not Found
            </h2>
            <p class="text-2xl font-semibold">
              Your requested file does not exist.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
