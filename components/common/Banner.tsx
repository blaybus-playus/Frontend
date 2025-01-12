import { banner_01 } from "@/assets/images"
import Image from "next/image"

const Banner = () => {
  return (
    <div>
      <Image
        src={banner_01}
        alt="banner"
        width={343}
        height={120}
      />
    </div>
  )
}

export default Banner