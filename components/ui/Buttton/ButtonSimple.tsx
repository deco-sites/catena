export interface Props {
  label: string;
  href: string;
  action?: () => void;
  class?: string;
}

export default function ButtonSimple(
  { label, href, action, class: __class }: Props,
) {
  return (
    <a
      data-fadeTop
      href={href}
      onClick={action}
      style={{ animationDelay: "2.5s" }}
      class={"rounded-lg uppercase px-6 py-3 font-bold cursor-pointer " +
        __class}
    >
      {label}
    </a>
  );
}
