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
        <div class="bg-primary text-base-100 flex flex-col gap-4 w-full h-full">
            <div class="flex flex-col gap-4 w-full h-full max-w-[1320px] px-4">
                <span class="relative line uppercase font-bold">{title}</span>
                <form class="bg-secondary rounded-xl py-5 px-3 flex flex-col gap-3">
                    <h4 class="text-primary-content font-bold text-xl uppercase">{titleForm}</h4>
                    <p class="text-primary-content text-lg mb-3">{subTitleForm}</p>
                    <input placeholder={formPlaceholder.name} />
                    <input placeholder={formPlaceholder.whatsapp} />
                    <input placeholder={formPlaceholder.position} />
                    <input placeholder={formPlaceholder.wage} />
                    <input placeholder={formPlaceholder.email} />
                    <button type="submit">
                        {CTA}
                    </button>
                </form>
            </div>
        </div>
    )
}