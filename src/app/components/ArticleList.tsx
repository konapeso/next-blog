import React from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000*500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By konamiota, Published on 2024/01/25</p>
          <Link href="#">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
