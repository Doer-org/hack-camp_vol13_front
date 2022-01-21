import Image from "next/image"
import { FC } from "react"

interface IProps {
  className?: string
}

export const Avatar: FC<IProps> = ({className}) => {
  return (
    <div className={className}>
      <Image className="rounded-full" width={60} height={60} src="https://placehold.jp/100x100.png" alt="icon"/>
    </div>
  )
}