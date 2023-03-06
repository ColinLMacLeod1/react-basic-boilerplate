function PageTitle({ text="", style ={} }) {
  return (
    <div className="text-white text-center text-7xl border-solid border-white border-2 px-10 py-4 font-serif font-thin w-min whitespace-nowrap" style={{...style}}>
        {text}
    </div>
  );
}

export default PageTitle;
