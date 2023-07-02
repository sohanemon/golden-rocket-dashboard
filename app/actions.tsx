export default function Actions() {
  return (
    <section className='flex justify-end gap-6 pb-10 max-sm:text-xs whitespace-nowrap '>
      <button className='lg:py-3 py-2.5 font-semibold uppercase rounded-lg px-4 lg:px-9 gradient '>
        buy $rocket
      </button>
      <button className='p-0.5 font-semibold uppercase rounded-lg gradient'>
        <div className='lg:px-[35px] px-3 py-2.5 lg:py-[11px] rounded-lg bg-theme-black'>
          connect wallet
        </div>
      </button>
    </section>
  );
}
