export interface Props {
  label: string;
  href: string;
}

export default function ButtonArrowAnimation({ label, href }: Props) {
  const arrow = {
    "arrow": `
          @keyframes arrow  {
            0%, 20%, 50%, 80%, 100% {
            -ms-transform: translateX(0);
            transform: translateX(0);
            }
        40% {
            -ms-transform: translateX(-14px);
            transform: translateX(-14px);
            }
        60% {
            -ms-transform: translateX(-7px);
            transform: translateX(-7px);
            }   
        }
          .arrow{
            animation: arrow 2s ease-out;
            animation-iteration-count: infinite;
            float: left;
            margin-right: 0.3rem;
      
    }
          `,
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: arrow["arrow"],
        }}
      >
      </style>
      <a
        href={href}
        class=" rounded-lg uppercase bg-secondary font-thicccboi  text-primary px-6 py-3 font-bold cursor-pointer hidden lg:flex hover:-translate-y-2 duration-200"
      >
        <span class="arrow before:font-unicons before:content-['\e94c']">
        </span>
        {label || "Quero me cadastrar"}
      </a>
    </>
  );
}
