import About from "@/pages/about/About";
import AcessProjetct from "@/pages/Acess/AcessProjetct";
import CallToAction from "@/pages/callToAction/CallToAction";
import ContactPage from "@/pages/ContactPage/ContactPage";
import Initial from "@/pages/initial/initial";
import Methodology from "@/pages/methodology/Methodology";
import Services from "@/pages/services/Services";
import { Analytics } from "@vercel/analytics/next";
export default function Home() {
  return (
    <>
      <Initial />
      <About />
      <CallToAction />
      <Methodology />
      <Services />
      <AcessProjetct />
      <ContactPage />
      <Analytics/>
    </>
  );
}
