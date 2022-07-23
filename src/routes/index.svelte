<script lang="ts">
  import PageRoot from '../components/page-root.svelte';
  import Sidebar from '../components/sidebar.svelte';
  import Scroller from '../components/scroller.svelte';
  import TopDisplay from '../components/top-display.svelte';
  import ProjectDescription from '../utils/project-description';
  import TextImage from '../components/text-image.svelte';
  import ImageText from '../components/image-text.svelte';
  import GalleryItem from '../utils/gallery-item';
  import HorizontalGallery from '../components/horizontal-gallery.svelte';
  import OverlayImage from '../components/overlay-image.svelte';
  import Title from '../components/title.svelte';
  import SmallGallery from '../components/small-gallery.svelte';
  import LargeGallery from '../components/large-gallery.svelte';
  import { Image } from '../utils/image';
  import Carousel from '../components/carousel.svelte';
  import Subtitle from '../components/subtitle.svelte';
  import FullImage from '../components/full-image.svelte';
  import CenterImage from '../components/center-image.svelte';
  import ProjectNavigation from '../components/project-navigation.svelte';
  import { GalleryRow } from '../utils/gallery-row';
  import Spacing from '../components/spacing.svelte';

  import TopImage from '../images/overlap/top.jpg?webp&w=1920';
  import ManifestoImage from '../images/overlap/manifesto.jpg?webp&w=960';
  import Set1 from '../images/overlap/set-1.png?webp&w=640';
  import Set2 from '../images/overlap/set-2.png?webp&w=640';
  import Set3 from '../images/overlap/set-3.png?webp&w=640';
  import Overlay1 from '../images/overlap/overlay-1.png?webp&w=1920';
  import Overlay2 from '../images/overlap/overlay-2.png?webp&w=1920';
  import Overlay3 from '../images/overlap/overlay-3.png?webp&w=1920';
  import TimerImage from '../images/overlap/timer.png?webp&w=960';
  import TimerUseImage from '../images/overlap/timer-use.png?webp&w=1280';
  import FileSorterImage from '../images/overlap/file-sorter.png?webp&w=960';
  import FileSorterUseImage1 from '../images/overlap/file-sorter-use-1.png?webp&w=1280';
  import FileSorterUseImage2 from '../images/overlap/file-sorter-use-2.png?webp&w=1280';
  import TrayImage from '../images/overlap/tray.png?webp&w=960';
  import TrayUseImage1 from '../images/overlap/tray-use-1.png?webp&w=1280';
  import TrayUseImage2 from '../images/overlap/tray-use-2.png?webp&w=1280';
  import WoodCut from '../images/overlap/wood-cut.png?webp&w=640';
  import WoodFlatten from '../images/overlap/wood-flatten.png?webp&w=640';
  import CNC from '../images/overlap/cnc.png?webp&w=640';
  import LaserCut from '../images/overlap/laser-cut.png?webp&w=640';
  import BandSawCut from '../images/overlap/band-saw-cut.png?webp&w=640';
  import MachineSanding from '../images/overlap/machine-sanding.png?webp&w=640';
  import HandSanding from '../images/overlap/hand-sanding.png?webp&w=640';
  import RouterChamfer from '../images/overlap/router-chamfer.png?webp&w=640';
  import WoodStain from '../images/overlap/wood-stain.png?webp&w=640';
  import AcrylicGluing from '../images/overlap/acrylic-gluing.png?webp&w=640';
  import ClearMatteFinishSpray from '../images/overlap/clear-matte-finish-spray.png?webp&w=640';
  import Assembly from '../images/overlap/assembly.png?webp&w=640';
  import Gallery1 from '../images/overlap/gallery/gallery-1.png?webp&w=1920';
  import Gallery2 from '../images/overlap/gallery/gallery-2.png?webp&w=640';
  import Gallery3 from '../images/overlap/gallery/gallery-3.png?webp&w=640';
  import Gallery4 from '../images/overlap/gallery/gallery-4.png?webp&w=640';
  import Gallery5 from '../images/overlap/gallery/gallery-5.png?webp&w=1920';
  import Gallery6 from '../images/overlap/gallery/gallery-6.png?webp&w=1920';
  import TechDrawing1 from '../images/overlap/tech-drawing/tech-drawing-01.png?webp&w=1920';
  import TechDrawing2 from '../images/overlap/tech-drawing/tech-drawing-02.png?webp&w=1920';
  import TechDrawing3 from '../images/overlap/tech-drawing/tech-drawing-03.png?webp&w=1920';
  import TechDrawing4 from '../images/overlap/tech-drawing/tech-drawing-04.png?webp&w=1920';
  import TechDrawing5 from '../images/overlap/tech-drawing/tech-drawing-05.png?webp&w=1920';
  import TechDrawing6 from '../images/overlap/tech-drawing/tech-drawing-06.png?webp&w=1920';
  import TechDrawing7 from '../images/overlap/tech-drawing/tech-drawing-07.png?webp&w=1920';
  import TechDrawing8 from '../images/overlap/tech-drawing/tech-drawing-08.png?webp&w=1920';
  import TechDrawing9 from '../images/overlap/tech-drawing/tech-drawing-09.png?webp&w=1920';
  import TechDrawing10 from '../images/overlap/tech-drawing/tech-drawing-10.png?webp&w=1920';
  import TechDrawing11 from '../images/overlap/tech-drawing/tech-drawing-11.png?webp&w=1920';
  import CMF1 from '../images/overlap/CMF/CMF-01.png?webp&w=1920';
  import CMF2 from '../images/overlap/CMF/CMF-02.png?webp&w=1920';
  import CMF3 from '../images/overlap/CMF/CMF-03.png?webp&w=1920';
  import CMF4 from '../images/overlap/CMF/CMF-04.png?webp&w=1920';
  import CMF5 from '../images/overlap/CMF/CMF-05.png?webp&w=1920';
  import CMF6 from '../images/overlap/CMF/CMF-06.png?webp&w=1920';
  import CMF7 from '../images/overlap/CMF/CMF-07.png?webp&w=1920';
  import CMF8 from '../images/overlap/CMF/CMF-08.png?webp&w=1920';
  import Playful from '../images/overlap/brand-dna/playful.png?webp&w=640';
  import Accessible from '../images/overlap/brand-dna/accessible.png?webp&w=640';
  import Adaptive from '../images/overlap/brand-dna/adaptive.png?webp&w=640';
  import Contemporary from '../images/overlap/brand-dna/comtemporary.png?webp&w=640';
  import Vibrant from '../images/overlap/brand-dna/vibrant.png?webp&w=640';
  import Benchmark from '../images/overlap/benchmark.png?webp&w=1920';
  import Ideation from '../images/overlap/ideation.png?webp&w=1920';
  import Prototype from '../images/overlap/prototype.png?webp&w=1920';
</script>

<svelte:head>
  <title>Overlap | Shirley Lyu Portfolio</title>
</svelte:head>

<PageRoot>
  <Sidebar />
  <Scroller bgColor="bg-[#FDF9F1]">
    <TopDisplay
      image={TopImage}
      description={new ProjectDescription(
        'Overlap',
        '14 Weeks',
        'Lifestyle Product Design',
        'Prototype, Techdrawing, Modelmaking, Manufacture',
        'Designing and making a line of accessories for Hay. The design will include a range of small and functional objects, which fits the brand identity and considers the company’s manufacturing techniques, as well their use of materials.'
      )}
      titleColor="text-gray-900"
    />
    <TextImage
      title="Project Manifesto"
      content={[
        'A collection of office accessories that can provide users with an intuitive concept of category. To help users better organize their time, space, and objects.'
      ]}
      image={ManifestoImage}
    />

    <Title title="Overlap Set" />
    <HorizontalGallery
      items={[
        new GalleryItem(Set1, 'Timer', 'Section Time'),
        new GalleryItem(Set2, 'File Sorter', 'Categorize files, books, etc.'),
        new GalleryItem(Set3, 'Tray', 'Store pens, pins, etc.')
      ]}
      sparse={true}
    />
    <Title title="Moodboard: Time, Space, Organizing" />
    <OverlayImage title="Overlapped" content="Time and space sometimes overlap." image={Overlay1} />
    <OverlayImage
      title="Changeable"
      content="Time changes are unnoticeable, so objects’ movements and Changes are used to define time pass and environment change."
      image={Overlay2}
    />
    <OverlayImage title="Joyful" content="Categorizing can be a joyful thing!" image={Overlay3} />

    <!-- Timer -->
    <TextImage
      title="Timer"
      content={['Overlapped part = Set up time', '1 Slice = 10 mins', 'Total: 1 hour']}
      image={TimerImage}
    />
    <ImageText
      title="Timer usage"
      content={['Set a Time', 'Set-time Passing']}
      image={TimerUseImage}
    />

    <!-- File Sorter -->
    <TextImage
      title="File Sorter"
      content={[
        '4 Different translucent colored blockers categorize files with height and colors.'
      ]}
      image={FileSorterImage}
    />
    <ImageText title="File sorter usage 1" content={['Put in file']} image={FileSorterUseImage1} />
    <ImageText
      title="File sorter usage 2"
      content={['Different Overlapping Order']}
      image={FileSorterUseImage2}
    />

    <!-- Tray -->
    <TextImage
      title="Tray"
      content={['4 Different color, size, and depth trays to categorize office accessories.']}
      image={TrayImage}
    />
    <ImageText title="Tray usage 1" content={['Different combinations']} image={TrayUseImage1} />
    <ImageText title="Tray usage 2" content={['Different usage']} image={TrayUseImage2} />

    <!-- Tech Drawing -->
    <Title title="Tech Drawing" />
    <Carousel
      images={[
        TechDrawing1,
        TechDrawing2,
        TechDrawing3,
        TechDrawing4,
        TechDrawing5,
        TechDrawing6,
        TechDrawing7,
        TechDrawing8,
        TechDrawing9,
        TechDrawing10,
        TechDrawing11
      ]}
      description="Tech Drawing"
    />

    <!-- Design Process -->
    <Title title="Design Process" />
    <Subtitle subtitle="HAY's Brand DNA Analysis" />
    <HorizontalGallery
      items={[
        new GalleryItem(Playful, undefined, 'Playful'),
        new GalleryItem(Accessible, undefined, 'Accessible'),
        new GalleryItem(Adaptive, undefined, 'Adaptive'),
        new GalleryItem(Contemporary, undefined, 'Contemporary'),
        new GalleryItem(Vibrant, undefined, 'Vibrant')
      ]}
      sparse={false}
    />

    <Subtitle subtitle="HAY's Brand Benchmarks" />
    <CenterImage src={Benchmark} alt="Brand benchmark" />

    <Subtitle subtitle="Overlap Ideation" />
    <FullImage src={Ideation} alt="Ideation for Overlap" />

    <Subtitle subtitle="Prototype & Form Perfection" />
    <FullImage src={Prototype} alt="Prototype for Overlap" />

    <!-- CMF & Manufacturing -->
    <Title title="CMF & Manufacturing" />
    <Carousel images={[CMF1, CMF2, CMF3, CMF4, CMF5, CMF6, CMF7, CMF8]} description="CMF" />

    <!-- Making process -->
    <Title title="Final Model Making Process" />
    <SmallGallery
      items={[
        new GalleryItem(WoodCut, 'Wood Cut'),
        new GalleryItem(WoodFlatten, 'Wood Flatten'),
        new GalleryItem(CNC, 'CNC'),
        new GalleryItem(LaserCut, 'Laser Cut'),
        new GalleryItem(BandSawCut, 'Band Saw Cut'),
        new GalleryItem(MachineSanding, 'Machine Sanding'),
        new GalleryItem(HandSanding, 'Hand Sanding'),
        new GalleryItem(RouterChamfer, 'Router Chamfer'),
        new GalleryItem(WoodStain, 'Wood Stain'),
        new GalleryItem(AcrylicGluing, 'Acrylic Gluing'),
        new GalleryItem(ClearMatteFinishSpray, 'Clear Matte Finish Spray'),
        new GalleryItem(Assembly, 'Assembly')
      ]}
    />

    <Title title="Product Gallery" />
    <LargeGallery
      rows={[
        new GalleryRow([new Image(Gallery1, 12767, 7167)]),
        new GalleryRow([
          new Image(Gallery2, 4684, 3750),
          new Image(Gallery3, 4684, 3750),
          new Image(Gallery4, 3067, 3750)
        ]),
        new GalleryRow([new Image(Gallery5, 12767, 7167)]),
        new GalleryRow([new Image(Gallery6, 12767, 7125)])
      ]}
      description="Overlap"
      botSpacing={false}
    />
    <div class="text-center text-xs">
      This is not a product of Hay. Branding and logo marks are used for demonstration purposes
      only.
    </div>
    <Spacing />

    <ProjectNavigation next="/lyu" />
  </Scroller>
</PageRoot>
