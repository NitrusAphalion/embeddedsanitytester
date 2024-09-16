// structure.js
import {
    singletonDocumentListItem,
    singletonDocumentListItems,
    filteredDocumentListItems
} from "sanity-plugin-singleton-tools";
import { BlockElementIcon, ApiIcon } from "@sanity/icons";
import { ConfigContext } from "sanity";
import { StructureBuilder } from "sanity/structure";

export const structureTool = (S: StructureBuilder, context: ConfigContext) =>
    S.list()
        .title("Site Defaults")
        .items([...singletonDocumentListItems({ S, context })]);
