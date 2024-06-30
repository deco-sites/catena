import { useSignal, useSignalEffect } from "@preact/signals";
import { useRef } from "preact/compat";

export default function Porcentage({ number }: { number: number }) {
  const maxNumber = useSignal(0);
  const refPorcentage = useRef<HTMLElement>(null);

  useSignalEffect(() => {
    const refObserver = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          const time = setInterval(() => {
            if (maxNumber.value < number) {
              maxNumber.value = maxNumber.value + 1;
            } else {
              clearInterval(time);
            }
          }, 20);
          time;
        }
      });
    });
    if (refPorcentage.current) {
      refObserver.observe(refPorcentage.current);
    }
  });

  return (
    <span className="countdown font-bold" ref={refPorcentage}>
      <span style={{ "--value": maxNumber.value }}></span> %
    </span>
  );
}
