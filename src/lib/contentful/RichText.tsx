import {
  BLOCKS,
  Document as RichTextDocument,
} from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  RenderNode,
} from "@contentful/rich-text-react-renderer";

type RichTextProps = {
  document: RichTextDocument | null;
};

function RichText({ document }: RichTextProps) {
  if (!document) {
    return null;
  }
  const renderNode: RenderNode = {
    [BLOCKS.HEADING_1]: (_, children) => (
      <h1 className="text-2xl font-semibold">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="text-xl font-semibold">{children}</h2>
    ),
  };

  return <>{documentToReactComponents(document, { renderNode })}</>;
}

export default RichText;
