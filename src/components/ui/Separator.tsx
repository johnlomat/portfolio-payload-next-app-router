import Image from 'next/image'

const Separator = () => {
  return (
    <div className="-mt-[0.8125rem] flex w-full translate-y-2 justify-center bg-transparent">
      <Image src="/images/separatorBlack 1.png" alt="Separator" width={170} height={12} />
    </div>
  )
}

export default Separator
