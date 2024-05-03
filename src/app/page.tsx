// Home Page
import { Metadata } from "next"
import Image from "next/image"
import { Button } from "../components/button/Button"
import hands from "../../public/img/main/hands_holding_heart.png"
import UserNavBar from "components/navbar/UserNavBar"
import Footer from "components/footer/FooterAuthDefault"

export const metadata: Metadata = {
  title: "Charity Link Up",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
<UserNavBar />
      <main className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center pt-10">
            <section className="grid grid-cols-2 gap-4">
              <div className="w-70 flex justify-center items-center">
                <div className="text-center">
                  <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                    Find Charities Easily and Donate with a Few Clicks
                  </h1>
                  <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                    CharityLink provides a centralized platform, offering a comprehensive list of charities to donate to!
                  </p>
                  <Button href="/causes" className="mr-3 h-14">
                    Browse Causes
                  </Button>
                </div>
              </div>
              <div className="w-30 flex justify-center items-center">
                <Image src={hands} alt="Hands holding heart" width={600} height={600}/>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
