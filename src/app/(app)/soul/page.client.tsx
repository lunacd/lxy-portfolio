"use client";

import Button from "@/components/Button";
import LargeGallery from "@/components/LargeGallery";
import Paragraph from "@/components/Paragraph";
import ProjectNavigation from "@/components/ProjectNavigation";
import Scroller from "@/components/Scroller";
import Spacing from "@/components/Spacing";
import { createPlainContent } from "@/components/TextSection";
import DisplayImage from "@/sections/DisplayImage";
import HorizontalGallery from "@/sections/HorizontalGallery";
import ImageText from "@/sections/ImageText";
import TextImage from "@/sections/TextImage";
import Title, { Subtitle } from "@/sections/Title";
import TopDisplay from "@/sections/TopDisplay";
import { projectsData } from "@/utils/projectData";
import useFrameIndex from "@/utils/useFrameIndex";
import useScroll from "@/utils/useScroll";

import BrandResearch from "@/images/soul/brand-research-full.webp";
import BrandValue from "@/images/soul/brand-value-half.webp";
import ChargerTech from "@/images/soul/charger-tech-full.webp";
import CMF from "@/images/soul/cmf-full.webp";
import ColorWay1 from "@/images/soul/colorway-01-half.webp";
import ColorWay2 from "@/images/soul/colorway-02-half.webp";
import ColorWay3 from "@/images/soul/colorway-03-half.webp";
import Control from "@/images/soul/control-half.webp";
import Direction1 from "@/images/soul/direction-01-full.webp";
import Direction2 from "@/images/soul/direction-02-full.webp";
import Direction3 from "@/images/soul/direction-03-full.webp";
import Gallery1 from "@/images/soul/gallery-01-full.webp";
import Gallery2 from "@/images/soul/gallery-02-full.webp";
import Gallery3 from "@/images/soul/gallery-03-full.webp";
import Gallery4 from "@/images/soul/gallery-04-full.webp";
import Ideation from "@/images/soul/ideation-full.webp";
import Instrument1 from "@/images/soul/instrument-01-half.webp";
import Instrument2 from "@/images/soul/instrument-02-half.webp";
import Instrument3 from "@/images/soul/instrument-03-big.webp";
import Instrument4 from "@/images/soul/instrument-04-big.webp";
import Instrument5 from "@/images/soul/instrument-05-big.webp";
import Instrument6 from "@/images/soul/instrument-06-big.webp";
import Instrument7 from "@/images/soul/instrument-07-big.webp";
import Instrument8 from "@/images/soul/instrument-08-big.webp";
import InstrumentTech from "@/images/soul/instrument-tech-full.webp";
import Light1 from "@/images/soul/light-01-half.webp";
import Light2 from "@/images/soul/light-02-half.webp";
import Light31 from "@/images/soul/light-03-1-big.webp";
import Light32 from "@/images/soul/light-03-2-big.webp";
import Light41 from "@/images/soul/light-04-1-big.webp";
import Light42 from "@/images/soul/light-04-2-big.webp";
import Light43 from "@/images/soul/light-04-3-big.webp";
import Light44 from "@/images/soul/light-04-4-big.webp";
import LightTech from "@/images/soul/light-tech-full.webp";
import ManifestoImage from "@/images/soul/manifesto-half.webp";
import Materials from "@/images/soul/materials-full.webp";
import Meditator from "@/images/soul/meditator-half.webp";
import Target1 from "@/images/soul/target-01-small.webp";
import Target2 from "@/images/soul/target-02-small.webp";
import Target3 from "@/images/soul/target-03-small.webp";
import UserNeed from "@/images/soul/user-half.webp";

export default function SoulClient() {
  const scrollDiv = useScroll();
  const frame = useFrameIndex(2000);

  return (
    <Scroller bgColor="bg-[#EEEAE2]" divRef={scrollDiv}>
      <TopDisplay
        project={projectsData["soul"]}
        displayDescriptionOnMobile={true}
      />

      {/* Manifesto */}
      <TextImage
        title="A lifestyle of self-perfection"
        content={[
          "Regularly meditating with Rolls-Royce Meditation sets you up forever to better yourself every day. Accompanying the Rolls-Royce meditation set, you could easily fall into peace and clarity through your senses: sight, smell, and sound.",
        ]}
        image={ManifestoImage}
        width={2560}
        height={1599}
      />

      {/* Brand Research */}
      <Title title="Rolls-Royce Brand Research" />
      <Subtitle title="Brand Research Book" />
      <DisplayImage
        source={{ frames: [{ src: BrandResearch }], width: 1920, height: 1080 }}
        alt="Brand research"
        botSpacing={false}
      />
      <Button
        text="Full Book"
        href="https://drive.google.com/file/d/170AtY9rEoj9Msp1hRsGn0R4lRbDeCad0/view"
      />
      <div className="pt-spacing-3lg" />

      <TextImage
        title="Rolls-Royce Brand Value: Inspiring Greatness"
        content={[
          "“Our strive for perfection guides us. Rolls-Royce is an everlasting expression of the exceptional, where everything we do reflects our persistence and commitment towards the remarkable.”",
        ]}
        image={BrandValue}
        titleClass="subtitle"
        width={960}
        height={602}
      />

      {/* User Research */}
      <Title title="User Research" />

      <TextImage
        title="Regular Meditators"
        content={[
          "- Meditate regularly",
          "- Have a specific meditation room or place at home",
          "- Accustomed to use light, sound, and smell to help them get into a meditative state of mind quickly and stay focused.",
        ]}
        titleClass="subtitle"
        image={Meditator}
        width={960}
        height={1029}
      />
      <TextImage
        title="User Need: Simple, Personal, Soothing"
        image={UserNeed}
        content={[
          "Problems they have now:",
          "- Need to set up all the products every time",
          "- Can only enjoy one meditation instrument per time, or will be disrupted by switching instruments.",
          "- Meditation halls usually have a instructor to guide you into the state, which is unnecessary for a regular meditator.",
        ]}
        titleClass="subtitle"
        width={960}
        height={878}
      />

      <Title title="What does Rolls-Royce Meditation provide?" />
      <HorizontalGallery
        items={[
          {
            image: Target1,
            title: "Seamless Interaction",
            content: createPlainContent([
              "- High quality light, scent, and sound",
              "- Comfortable interaction",
            ]),
          },
          {
            image: Target2,
            title: "Customizable",
            content: createPlainContent([
              "- Different soothing sounds options",
              "- Customizable light, fragrance, and mist density",
            ]),
          },
          {
            image: Target3,
            title: "Simplicity",
            content: createPlainContent([
              "- Automatic startup",
              "- No disruption",
            ]),
          },
        ]}
        width={640}
        height={431}
      />

      {/* Design Direction */}
      <Title title="Design Direction" />
      <DisplayImage
        source={{ frames: [{ src: Direction1 }], width: 1920, height: 961 }}
        alt="Soothing Curves"
        xSpacing={false}
        botSpacing={false}
        overlayTitle="Soothing Curves"
        overlayText="Contour line | decoration line"
      />
      <DisplayImage
        source={{ frames: [{ src: Direction2 }], width: 1920, height: 961 }}
        alt="Soothing Curves"
        xSpacing={false}
        botSpacing={false}
        overlayTitle="Subtle Repeated Surfacing"
        overlayText="Array | Concave &amp; Extrude"
      />
      <DisplayImage
        source={{ frames: [{ src: Direction3 }], width: 1920, height: 961 }}
        alt="Soothing Curves"
        xSpacing={false}
        overlayTitle="Calm"
        overlayText="Stretch Out Balance"
      />

      {/* CMF Board */}
      <Title title="CMF Moodboard" />
      <DisplayImage
        source={{ frames: [{ src: CMF }], width: 1920, height: 961 }}
        alt="CMF Color"
        xSpacing={false}
        botSpacing={false}
        overlayTitle="Color"
        overlayText="Low saturation brown and green different shades of Grey"
      />
      <DisplayImage
        source={{ frames: [{ src: Materials }], width: 1920, height: 961 }}
        alt="CMF Materials"
        xSpacing={false}
        botSpacing={false}
        overlayTitle="Materials and Finish"
        overlayText="Wood, metal, glass, and ceramic"
        textColor="text-white"
      />

      {/* Proposal */}
      <Title title="Rolls-Royce Meditation Proposal" />
      <HorizontalGallery
        items={[
          {
            image: Instrument1,
            title: "Soul Instrument",
            content: createPlainContent([
              "Self-perfection through sound and touch",
            ]),
          },
          {
            image: Light1,
            title: "Ambient Lighting Lamp",
            content: createPlainContent(["Self-perfection through sight"]),
          },
        ]}
        width={960}
        height={645}
      />

      {/* Form Ideation */}
      <Title title="Form Ideation" />
      <Subtitle title="2D Sketch, Shaping Foam, 3D Modeling" />
      <DisplayImage
        source={{ frames: [{ src: Ideation }], width: 1920, height: 711 }}
        alt="Ideation"
      />

      {/* Instrument */}
      <TextImage
        title="Soul Instrument"
        content={[
          "Plays healing and soothing sounds by using repeated action to help users fall into peace and clarity.",
        ]}
        image={Instrument2}
        width={960}
        height={845}
      />

      {/* Tech Drawing */}
      <Subtitle title="Tech Drawing" />
      <Paragraph paragraph="Soul Instrument Body" />
      <DisplayImage
        source={{ frames: [{ src: InstrumentTech }], width: 1920, height: 990 }}
        alt="Soul Instrument Tech Drawing"
        botSpacing={false}
      />
      <Paragraph paragraph="Wireless Charger" />
      <DisplayImage
        source={{ frames: [{ src: ChargerTech }], width: 1920, height: 990 }}
        alt="Wireless Charger Tech Drawing"
      />

      <ImageText
        title="Uncompromising Elegance"
        alt="Uncompromising Elegance"
        content={["Elegant texture with special touching experience."]}
        source={{ frames: [{ src: Instrument3 }], width: 1280, height: 892 }}
        titleClass="subtitle"
      />
      <ImageText
        title="Automatic Startup"
        alt="Automatic Startup"
        content={[
          "Starts up automatically when lifted up from the wireless charger.",
        ]}
        source={{ frames: [{ src: Instrument4 }], width: 1280, height: 892 }}
        titleClass="subtitle"
      />
      <ImageText
        title="Versatile Controls"
        alt="Versatile Controls"
        content={[
          "Simple finger actions - e.g. swipe, tap, touch and hold, rotate - to generate different healing rhythms.",
          "A pressure touch-pad senses finger actions.",
        ]}
        source={{ frames: [{ src: Instrument5 }], width: 1280, height: 892 }}
        titleClass="subtitle"
      />
      <ImageText
        title="Wireless Charging"
        alt="Wireless Charging"
        content={["Place onto the base to recharge."]}
        source={{ frames: [{ src: Instrument6 }], width: 1280, height: 892 }}
        titleClass="subtitle"
      />
      <ImageText
        title="Indicator Light"
        alt="Indicator Light"
        content={[
          "Color change to represent product condition.",
          "Green: finish charging the product",
          "Yellow: In the progress of charging",
          "Red: need to charge",
        ]}
        source={{ frames: [{ src: Instrument7 }], width: 1280, height: 892 }}
        titleClass="subtitle"
      />
      <ImageText
        title="Flexible Nesting"
        alt="Flexible Nesting"
        content={["Nesting from different angle."]}
        source={{ frames: [{ src: Instrument8 }], width: 1280, height: 892 }}
        titleClass="subtitle"
      />

      {/* Light */}
      <TextImage
        title="Ambient Lighting Lamp"
        content={[
          "Gracefully changing lights create a good vibe for customers to feel tranquil and peaceful.",
        ]}
        image={Light2}
        width={960}
        height={845}
      />

      <Subtitle title="Tech Drawing" />
      <Paragraph paragraph="Lamp" />
      <DisplayImage
        source={{ frames: [{ src: LightTech }], width: 1920, height: 990 }}
        alt="Light Tech Drawing"
      />
      <ImageText
        title="Peaceful Breathing Atmosphere"
        alt="Peaceful Breathing Atmosphere"
        content={[
          "Gracefully changing light go through dichroic glass to create slow-paced visual environment which mimic the diversity of light in nature.",
        ]}
        source={{
          frames: [{ src: Light31 }, { src: Light32 }],
          width: 1280,
          height: 892,
        }}
        frame={frame}
        titleClass="subtitle"
      />
      <ImageText
        title="Rotatable"
        alt="Rotatable"
        content={[
          "The inside rotatable structure allows users to adjust the projected light.",
        ]}
        source={{
          frames: [
            { src: Light41 },
            { src: Light42 },
            { src: Light43 },
            { src: Light44 },
          ],
          width: 1280,
          height: 892,
        }}
        frame={frame}
        titleClass="subtitle"
      />

      {/* Controlling System */}
      <TextImage
        title="Controlling System"
        content={[
          "Customizable",
          "Sound: define different finger actions with different spiritual sound instruments such as water drop, singing bowl, and wave drum.",
        ]}
        image={Control}
        width={960}
        height={832}
      />

      {/* Color Ways */}
      <Title title="Different Color Ways" />
      <HorizontalGallery
        items={[
          { image: ColorWay1, title: "Nature Explorer" },
          { image: ColorWay2, title: "Pure Spirit" },
          { image: ColorWay3, title: "Wise Contemplative" },
        ]}
        width={960}
        height={832}
      />

      <Title title="Project Gallery" />
      <LargeGallery
        rows={[
          {
            images: [{ frames: [{ src: Gallery1 }], width: 1920, height: 961 }],
          },
          {
            images: [{ frames: [{ src: Gallery2 }], width: 1920, height: 961 }],
          },
          {
            images: [{ frames: [{ src: Gallery3 }], width: 1920, height: 961 }],
          },
          {
            images: [{ frames: [{ src: Gallery4 }], width: 1920, height: 961 }],
          },
        ]}
        description="Soul Project Gallery"
        botSpacing={false}
      />
      <div className="single text-center text-xs">
        This is not a product of Rolls Royce. Branding and logo marks are used
        for demonstration purposes only.
      </div>
      <Spacing size="medium" />

      <ProjectNavigation prev="/lamboozled" next="/overlap" />
    </Scroller>
  );
}
