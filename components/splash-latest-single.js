import Link from "next/link";

function SplashLatestSingle() {
  return (
    <section className="bg-white text-gray-900 text-center">
      <Link href="/singles">
        <a>
          <img src="/images/banner-social-distance-single.jpg" />
        </a>
      </Link>
    </section>
  );
}

export default SplashLatestSingle;
