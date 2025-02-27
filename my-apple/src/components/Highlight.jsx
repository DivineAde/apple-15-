import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"



const Highlight = () => {

  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
    })

    gsap.to('.link', {
      opacity: 1,
      duration: 1,
      y: 0,
      stagger: 0.25,
    })
  }, [])
  
  return (
    <section id="highlights" className="w-screen h-full bg-zinc overflow-hidden common-padding">
      <div className="screen-max-width">
        <div className="w-full mb-12 md:flex justify-between items-end">
          <h1 className="section-heading" id="title">Get the Highlights.</h1>

          <div className="flex flex-wrap gap-5 items-end">
            <p  className="link" >Watch the film  <img src={watchImg} alt="watch" className="ml-2" /></p>
            <p  className="link " >Watch the Events  <img src={rightImg} alt="right arrow" className="ml-2" /></p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlight