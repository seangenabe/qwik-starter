import { Slot, component$ } from "@builder.io/qwik";
import Content from "~/components/content";

export default component$(() => {
  return (
    <div>
      <Content>
        <Slot />
      </Content>
    </div>
  );
});
