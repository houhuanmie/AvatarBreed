import Hero from "../components/Hero"
import Slider from "../components/Slider";
import Card from "../components/Card"
export default function Home() {
    const images = [
        "/parent1.jpeg",
        "/parent1.jpeg",
        "/parent1.jpeg",
        "/parent1.jpeg"
     ];
  return (
    <div>
        <main>
            <Hero/>
            <div>
                <Slider slides={images} size="large" slideInterval={6} />
            </div>
            <Card/>
        </main>
    </div>
  )
}
