import { type SchemaTypeDefinition } from "sanity";
import { openApi } from "./schemaTypes/openApi";
import { sdkDoc } from "./schemaTypes/sdkDoc";
import { headerBlock } from "./schemaTypes/headerBlock";
import { menuItems } from "./schemaTypes/menuItems";
import { subMenuItems } from "./schemaTypes/subMenuItems";
import { footerBlock } from "./schemaTypes/footerBlock";
import { heroBlock } from "./schemaTypes/heroBlock";
import { blockCard } from "./schemaTypes/blockCard";
import { quoteBlock } from "./schemaTypes/quoteBlock";
import { desktopSdkDoc } from "./schemaTypes/desktopSdkDocs";
import { webSdkDoc } from "./schemaTypes/webSdkDocs";
import { widgetSdkDoc } from "./schemaTypes/widgetSdkDocs";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        openApi,
        sdkDoc,
        headerBlock,
        menuItems,
        subMenuItems,
        footerBlock,
        heroBlock,
        blockCard,
        quoteBlock,
        desktopSdkDoc,
        webSdkDoc,
        widgetSdkDoc
    ]
};
