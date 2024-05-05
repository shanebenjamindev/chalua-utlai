import Right from "@/components/icons/Right";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero md:my-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Chào mừng<br />
          quý khách<br />
          đến với&nbsp;
          <br />
          <span className="text-primary">
            Chả lụa Út Lài
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Chúng tôi tự hào giới thiệu đến bạn những sản phẩm chả lụa và pate tươi ngon, tỉ mỉ chế biến từ những nguyên liệu chất lượng nhất. Hãy cùng khám phá và đắm chìm trong hương vị truyền thống và độc đáo của chúng tôi, mang đến cho bạn trải nghiệm ẩm thực không thể quên
        </p>
        <div className="flex gap-4 text-sm">
          <div className="w-6/12">
            <Link href={"/menu"} className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
              Đặt hàng
              <Right />
            </Link>
          </div>
          <Link href={"#about"} className="w-6/12 flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Về chúng tôi
            <Right />
          </Link>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/img/chalua.jpg'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
}