import About from "@/components/about";
import Banner from "@/components/banner";
import BoxCompany from "@/components/boxCompany";
import ContactComponent from "@/components/contact";
import Location from "@/components/location";
import Services from "@/components/services";


export default function Home() {
  return (
    <>
      <Banner />
      <BoxCompany />
      <Location/>
      <Services/>
      <About/>
      <ContactComponent/>
    </>
  )
}
