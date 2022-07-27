<script lang="ts">
  import PageRoot from '../components/page-root.svelte';
  import Title from '../components/title.svelte';
  import Scroller from '../components/scroller.svelte';
  import Sidebar from '../components/sidebar.svelte';
  import TextImage from '../components/text-image.svelte';
  import HorizontalGallery from '../components/horizontal-gallery.svelte';
  import GalleryItem from '../utils/gallery-item';
  import Subtitle from '../components/subtitle.svelte';
  import FullImage from '../components/full-image.svelte';
  import ProjectNavigation from '../components/project-navigation.svelte';
  import SmallGallery from '../components/small-gallery.svelte';
  import Carousel from '../components/carousel.svelte';
  import LargeGallery from '../components/large-gallery.svelte';
  import { GalleryRow, GalleryRowConfig } from '../utils/gallery-row';
  import { Animation } from '../utils/animation';
  import TopDisplay from '../components/top-display.svelte';
  import ProjectDescription from '../utils/project-description';

  import DisplayImage from '../images/lyu/display.png?webp&w=1920';
  import ManifestoImage from '../images/lyu/manifesto.png?webp&w=960';
  import Stylish1 from '../images/lyu/stylish-1.png?webp&w=640';
  import Stylish2 from '../images/lyu/stylish-2.png?webp&w=640';
  import Stylish3 from '../images/lyu/stylish-3.png?webp&w=640';
  import Ease1 from '../images/lyu/ease-1.png?webp&w=640';
  import Ease2 from '../images/lyu/ease-2.png?webp&w=640';
  import Ease3 from '../images/lyu/ease-3.png?webp&w=640';
  import IdeationTote from '../images/lyu/ideation-tote.png?webp&w=1920';
  import IdeationSlipper from '../images/lyu/ideation-slipper.png?webp&w=1920';
  import BagMaking1 from '../images/lyu/bag-making-1.png?webp&w=640';
  import BagMaking2 from '../images/lyu/bag-making-2.png?webp&w=640';
  import BagMaking3 from '../images/lyu/bag-making-3.png?webp&w=640';
  import BagMaking4 from '../images/lyu/bag-making-4.png?webp&w=640';
  import BagMaking5 from '../images/lyu/bag-making-5.png?webp&w=640';
  import BagMaking6 from '../images/lyu/bag-making-6.png?webp&w=640';
  import BagMaking7 from '../images/lyu/bag-making-7.png?webp&w=640';
  import BagMaking8 from '../images/lyu/bag-making-8.png?webp&w=640';
  import BagMaking9 from '../images/lyu/bag-making-9.png?webp&w=640';
  import SlipperMaking1 from '../images/lyu/slipper-making-1.png?webp&w=640';
  import SlipperMaking2 from '../images/lyu/slipper-making-2.png?webp&w=640';
  import SlipperMaking3 from '../images/lyu/slipper-making-3.png?webp&w=640';
  import SlipperMaking4 from '../images/lyu/slipper-making-4.png?webp&w=640';
  import SlipperMaking5 from '../images/lyu/slipper-making-5.png?webp&w=640';
  import SlipperMaking6 from '../images/lyu/slipper-making-6.png?webp&w=640';
  import SlipperMaking7 from '../images/lyu/slipper-making-7.png?webp&w=640';
  import SlipperMaking8 from '../images/lyu/slipper-making-8.png?webp&w=640';
  import SlipperMaking9 from '../images/lyu/slipper-making-9.png?webp&w=640';
  import SlipperMaking10 from '../images/lyu/slipper-making-10.png?webp&w=640';
  import SlipperMaking11 from '../images/lyu/slipper-making-11.png?webp&w=640';
  import SlipperMaking12 from '../images/lyu/slipper-making-12.png?webp&w=640';
  import SlipperMaking13 from '../images/lyu/slipper-making-13.png?webp&w=640';
  import SlipperMaking14 from '../images/lyu/slipper-making-14.png?webp&w=640';
  import SlipperMaking15 from '../images/lyu/slipper-making-15.png?webp&w=640';
  import TechPack1 from '../images/lyu/tech-pack-1.png?webp&w=1920';
  import TechPack2 from '../images/lyu/tech-pack-2.png?webp&w=1920';
  import TechPack3 from '../images/lyu/tech-pack-3.png?webp&w=1920';
  import TechPack4 from '../images/lyu/tech-pack-4.png?webp&w=1920';
  import TechPack5 from '../images/lyu/tech-pack-5.png?webp&w=1920';
  import TechPack6 from '../images/lyu/tech-pack-6.png?webp&w=1920';
  import TechPack7 from '../images/lyu/tech-pack-7.png?webp&w=1920';
  import Gallery11 from '../images/lyu/gallery/gallery-1-1.png?webp&w=960';
  import Gallery12 from '../images/lyu/gallery/gallery-1-2.png?webp&w=960';
  import Gallery13 from '../images/lyu/gallery/gallery-1-3.png?webp&w=960';
  import Gallery21 from '../images/lyu/gallery/gallery-2-1.png?webp&w=960';
  import Gallery22 from '../images/lyu/gallery/gallery-2-2.png?webp&w=960';
  import Gallery23 from '../images/lyu/gallery/gallery-2-3.png?webp&w=960';
  import Gallery31 from '../images/lyu/gallery/gallery-3-1.png?webp&w=1280';
  import Gallery32 from '../images/lyu/gallery/gallery-3-2.png?webp&w=1280';
  import Gallery41 from '../images/lyu/gallery/gallery-4-1.png?webp&w=640';
  import Gallery42 from '../images/lyu/gallery/gallery-4-2.png?webp&w=640';
  import Gallery43 from '../images/lyu/gallery/gallery-4-3.png?webp&w=640';
  import Gallery51 from '../images/lyu/gallery/gallery-5-1.png?webp&w=640';
  import Gallery52 from '../images/lyu/gallery/gallery-5-2.png?webp&w=640';
  import Gallery53 from '../images/lyu/gallery/gallery-5-3.png?webp&w=640';
  import Gallery61 from '../images/lyu/gallery/gallery-6-1.png?webp&w=1280';
  import Gallery62 from '../images/lyu/gallery/gallery-6-2.png?webp&w=1280';
  import Gallery63 from '../images/lyu/gallery/gallery-6-3.png?webp&w=1280';
  import Gallery71 from '../images/lyu/gallery/gallery-7-1.png?webp&w=960';
  import Gallery72 from '../images/lyu/gallery/gallery-7-2.png?webp&w=960';
  import Gallery73 from '../images/lyu/gallery/gallery-7-3.png?webp&w=960';
  import Gallery81 from '../images/lyu/gallery/gallery-8-1.png?webp&w=960';
  import Gallery82 from '../images/lyu/gallery/gallery-8-2.png?webp&w=960';
  import Gallery83 from '../images/lyu/gallery/gallery-8-3.png?webp&w=960';
</script>

<svelte:head>
  <title>Lyu | Shirley Lyu Portfolio</title>
</svelte:head>

<PageRoot>
  <Sidebar currentRoute="lyu" />
  <Scroller bgColor="bg-[#EFF2F3]">
    <TopDisplay
      image={DisplayImage}
      description={new ProjectDescription(
        'Lyu',
        '2 Weeks Daily',
        'Soft Goods',
        'Craft, Techdrawing, Manufacture',
        '2-week daily course provided practical knowledge of leather footwear and leather bag making in a factory setting.'
      )}
      titleColor="text-gray-100"
    />

    <!-- Manifesto -->
    <TextImage
      title="Project Manifesto"
      content={[
        'Design and handmade a leather tote bag and a pair of leather footwear that match my personal style.'
      ]}
      image={ManifestoImage}
    />

    <!-- Personal Style -->
    <Title title="What is My Personal Style?" />
    <Subtitle subtitle="Stylish" />
    <HorizontalGallery
      items={[new GalleryItem(Stylish1), new GalleryItem(Stylish2), new GalleryItem(Stylish3)]}
      sparse={false}
      botSpacing={false}
    />
    <Subtitle subtitle="Neutral and Ease" />
    <HorizontalGallery
      items={[new GalleryItem(Ease1), new GalleryItem(Ease2), new GalleryItem(Ease3)]}
    />

    <!-- Ideation -->
    <Title title="Ideation - Tote" />
    <FullImage src={IdeationTote} alt="Ideation for the tote" />
    <Title title="Ideation - Slippers" />
    <FullImage src={IdeationSlipper} alt="Ideation for the slippers" />

    <!-- Tote bag making process -->
    <Title title="Tote Bag Making Process" />
    <SmallGallery
      items={[
        new GalleryItem(BagMaking1, 'Cutting Template'),
        new GalleryItem(BagMaking2, 'Material Cutting'),
        new GalleryItem(BagMaking3, 'Buckle Selection'),
        new GalleryItem(BagMaking4, 'Thinning Leather'),
        new GalleryItem(BagMaking5, 'Glue Spray'),
        new GalleryItem(BagMaking6, 'Taping Pieces'),
        new GalleryItem(BagMaking7, 'Stitch Positioning'),
        new GalleryItem(BagMaking8, 'Flat Stitching'),
        new GalleryItem(BagMaking9, 'Cylinder Sewing')
      ]}
    />

    <!-- Slipper making process -->
    <Title title="Slippers Making Process" />
    <SmallGallery
      items={[
        new GalleryItem(SlipperMaking1, 'Taping Design'),
        new GalleryItem(SlipperMaking2, 'Cutting Material'),
        new GalleryItem(SlipperMaking3, 'Sticking Pieces Together'),
        new GalleryItem(SlipperMaking4, 'Heating up Lining'),
        new GalleryItem(SlipperMaking5, 'Stitching'),
        new GalleryItem(SlipperMaking6, 'Making Insole'),
        new GalleryItem(SlipperMaking7, 'Closing the Back'),
        new GalleryItem(SlipperMaking8, 'Gluing'),
        new GalleryItem(SlipperMaking9, 'Hammering and Nailing'),
        new GalleryItem(SlipperMaking10, 'Putting on Shoelaces'),
        new GalleryItem(SlipperMaking11, 'Sanding the Bottom'),
        new GalleryItem(SlipperMaking12, 'Applying Glue to Sole'),
        new GalleryItem(SlipperMaking13, 'Heating up the Glue'),
        new GalleryItem(SlipperMaking14, 'Pressing Sole'),
        new GalleryItem(SlipperMaking15, 'Removing Shoe Lasts')
      ]}
    />

    <!-- Tech Pack -->
    <Title title="Tech Pack" />
    <Carousel
      images={[TechPack1, TechPack2, TechPack3, TechPack4, TechPack5, TechPack6, TechPack7]}
      description="Tech Pack"
    />

    <!-- Gallery -->
    <Title title="Project Gallery" />
    <LargeGallery
      rows={[
        new GalleryRow(
          [
            new Animation([Gallery11, Gallery12, Gallery13], 4694, 7017),
            new Animation([Gallery21, Gallery22, Gallery23], 4684, 5625)
          ],
          GalleryRowConfig.EqualWidthEnd
        ),
        new GalleryRow([
          new Animation([Gallery31, Gallery32], 6467, 4159),
          new Animation([Gallery41, Gallery42, Gallery43], 2900, 4159)
        ]),
        new GalleryRow([
          new Animation([Gallery51, Gallery52, Gallery53], 2900, 4159),
          new Animation([Gallery61, Gallery62, Gallery63], 6467, 4159)
        ]),
        new GalleryRow(
          [
            new Animation([Gallery71, Gallery72, Gallery73], 4694, 7017),
            new Animation([Gallery81, Gallery82, Gallery83], 4684, 5625)
          ],
          GalleryRowConfig.EqualWidthStart
        )
      ]}
      description="Lyu"
    />

    <ProjectNavigation prev="/overlap" next="/soul" />
  </Scroller>
</PageRoot>
