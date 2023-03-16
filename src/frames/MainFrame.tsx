type Props = {
    children: undefined | string | JSX.Element | JSX.Element[],
    title: string,
    showHeader: boolean
}

function MainFrame({ children, title, showHeader = false }: Props) {
    return (
        <div>
            {showHeader && <div className="flex h-20 bg-black justify-center content-center">
                <div className="text-white text-center text-4xl px-10 pb-4 pt-5 font-serif font-thin w-min whitespace-nowrap align-middle leading-none">
                    {title}
                </div>
            </div>}
            {children}
        </div>
    );
}

export default MainFrame;
