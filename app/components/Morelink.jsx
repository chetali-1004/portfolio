import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Morelink = ({href, icon}) => {
  return (
    <Link href={href} target="_blank"><Image src={`/./images/${icon}.png`}alt={'let\'s connect'} width={60} height={60} className="p-1 mx-3 mt-2 rounded-full hover:bg-black"></Image></Link>
  )
}
export default Morelink;