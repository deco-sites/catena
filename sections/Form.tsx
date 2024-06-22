export interface Props {
    title: string;
    titleForm: string;
    subTitleForm: string;
    formPlaceholder: {
        name: string;
        whatsapp: string;
        position: string;
        wage: string;
        email: string;
    }
    CTA: string;
}

export default function Form(props: Props) {

    const { title, titleForm, formPlaceholder, subTitleForm, CTA } = props

    return (
        <div class="bg-primary text-base-100 flex flex-col gap-4 w-full h-full font-thicccboi">
            <div class="flex flex-col gap-4 w-full h-full max-w-[1320px] px-4 py-14 md:px-14 lg:px-4 mx-auto">
                <span class="relative line uppercase font-bold pl-8 max-w-[350px]">{title}</span>
                <div class="bg-secondary rounded-xl py-5 px-4 flex flex-col gap-3 lg:flex-row lg:px-9 lg:py-10">
                    <div class="flex flex-col gap-2 w-full lg:w-2/4 lg:pr-20">
                        <h4 class="text-primary-content font-bold text-3xl lg:text-4xl uppercase">{titleForm}</h4>
                        <p class="text-primary-content text-lg mb-3">{subTitleForm}</p>
                    </div>
                    <form class="flex flex-col gap-3 md:flex-row md:flex-wrap lg:w-2/4">
                        <input class="px-5 py-3 rounded-lg placeholder:text-primary-content md:w-[calc(50%-0.4rem)] text-base" placeholder={formPlaceholder.name} />
                        <input class="px-5 py-3 rounded-lg placeholder:text-primary-content md:w-[calc(50%-0.4rem)] text-base" placeholder={formPlaceholder.whatsapp} />
                        <input class="px-5 py-3 rounded-lg placeholder:text-primary-content w-full text-base" placeholder={formPlaceholder.position} />
                        <input class="px-5 py-3 rounded-lg placeholder:text-primary-content w-full text-base" placeholder={formPlaceholder.wage} />
                        <input class="px-5 py-3 rounded-lg placeholder:text-primary-content w-full text-base" placeholder={formPlaceholder.email} />
                        <button type="submit" class="mt-4 rounded-lg bg-primary text-base-100 hover:-translate-y-2 duration-300 ease-in w-max px-5 py-3 font-bold">
                            {CTA}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}