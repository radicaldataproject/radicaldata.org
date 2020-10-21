// ------------- General Components--------------- //
import React from 'react'
import InnerLink from './InnerLink'
import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import ReadNext from './ReadNext'
import Code from './Code'
import Tooltip from './Tooltip'
import TipLink from './TipLink'
import NoteSidebar from './NoteSidebar'
import SimpleCard from '../SimpleCard'
import LinkCard from './LinkCard'
import { Spacer } from './Spacer'
import { ComingSoon } from './ComingSoon'
import { Draft } from './Draft'
import {
  Divider,
  H3,
  H4,
  H5,
  H6,
  Blockquote,
  Center,
  SmallCenter,
  OrderedList,
  UnorderedList,
  TwoParagraph,
  Subtext,
} from './TextStyles'
import {
  Image,
  ThreeImageGrid,
  TwoCol,
  ImageGrid,
  ImageFrame,
  FullWidth2Col,
  FullWidthImage,
  FullWidth,
} from './ImageStyles'
import Book from '../Book'
import OrganisationBook from './OrganisationBook'
import Footnote from './Footnote'
import {
  ResearchItem,
  ResearchBlock,
} from './ResearchBlock'
// import { ReplyOnTwitter } from './ReplyOnTwitter'
import { Arrow } from './Arrow'
import { ScrollController, ScrollStep } from './Scrollama'
// ------------- Single Use Components--------------- //
import { Tools, Hardware } from './SingleUse/Tools'
import { MaterialMediumMeat } from './SingleUse/MaterialMediumMeat'
import { MMMSection } from './SingleUse/MMMSection'



// ------------- Exports--------------- //
export default {
  // ------------- General Components--------------- //

  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  h5: props => <H5 {...props} />,
  h6: props => <H6 {...props} />,
  p: props => <Paragraph {...props} />,
  img: props => <Image {...props} />,
  code: Code,
  ol: props => <OrderedList {...props} />,
  ul: props => <UnorderedList {...props} />,
  blockquote: props => <Blockquote {...props} />,
  hr: props => <Divider {...props} />,
  Tooltip: props => <Tooltip {...props} />,
  pre: preProps => <pre {...preProps} />,
  a: props => <TipLink {...props} />,
  Link: props => <InnerLink {...props} />,
  NoteSidebar: props => <NoteSidebar {...props} />,
  SmallCenter: props => <SmallCenter {...props} />,
  Subtext: props => <Subtext {...props} />,
  Center: props => <Center {...props} />,
  ImageGrid: props => <ImageGrid {...props} />,
  Spacer: props => <Spacer {...props} />,
  TwoCol: props => <TwoCol {...props} />,
  ThreeImageGrid: props => <ThreeImageGrid {...props} />,
  ReadNext: props => <ReadNext {...props} />,
  SimpleCard: props => <SimpleCard {...props} />,
  Book: props => <Book {...props} />,
  OrganisationBook: props => <OrganisationBook {...props} />,
  ImageFrame: props => <ImageFrame {...props} />,
  FullWidth: props => <FullWidth {...props} />,
  FullWidth2Col: props => <FullWidth2Col {...props} />,
  FullWidthImage: props => <FullWidthImage {...props} />,
  TwoParagraph: props => <TwoParagraph {...props} />,
  ResearchItem: props => <ResearchItem {...props} />,
  ResearchBlock: props => <ResearchBlock {...props} />,
  Footnote: props => <Footnote {...props} />,
  ComingSoon: props => <ComingSoon {...props} />,
  Draft: props => <Draft {...props} />,
  LinkCard: props => <LinkCard {...props} />,
  ScrollController: props => <ScrollController {...props} />,
  ScrollStep: props => <ScrollStep {...props} />,
  MMMSection: props => <MMMSection {...props} />,
  Arrow: Arrow,
  // ------------- Single Use Components--------------- //
  Tools: Tools,
  Hardware: Hardware,
  MaterialMediumMeat: MaterialMediumMeat,
}
