import { Signal, Slot, component$ } from '@builder.io/qwik';
interface Props {
  as: 'span';
  ref?: Signal<HTMLSpanElement | undefined>;
  class?: string;
}

export const Text = component$(
  ({ as = 'span', ref, class: className, ...props }: Props) => {
    const Tag = as;
    return (
      <Tag ref={ref} class={className} {...props}>
        <Slot />
      </Tag>
    );
  }
);
