import { Slot, component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const documentHead = useDocumentHead();
  const { title } = documentHead;

  return (
    <main>
      <h1>{title}</h1>
      <pre>{JSON.stringify(documentHead, null, 2)}</pre>
      <Slot />
    </main>
  );
});
