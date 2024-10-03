// structure.js
import {
    singletonDocumentListItem,
    singletonDocumentListItems,
    filteredDocumentListItems
} from "sanity-plugin-singleton-tools";
import { ApiIcon } from "@sanity/icons";
import { ConfigContext } from "sanity";
import { StructureBuilder } from "sanity/structure";
import { createDeskHierarchy } from "@sanity/hierarchical-document-list";

export const structure = (S: StructureBuilder, context: ConfigContext) =>
    S.list()
        .title("Types")
        .items([
            createDeskHierarchy({
                S,
                context,
                title: "Desktop SDK Docs",
                documentId: "desktopSdkDocs",
                referenceTo: ["sdkDoc"],
                maxDepth: 5 // GROQ doesnt support recursion so keep this sync'd with the # of levels in the GROQ-query
            }),
            createDeskHierarchy({
                S,
                context,
                title: "Web SDK Docs",
                documentId: "webSdkDocs",
                referenceTo: ["sdkDoc"],
                maxDepth: 5
            }),
            createDeskHierarchy({
                S,
                context,
                title: "Widget SDK Docs",
                documentId: "widgetSdkDocs",
                referenceTo: ["sdkDoc"],
                maxDepth: 5
            }),
            singletonDocumentListItem({
                S,
                context,
                type: "openAPISpecificationDocs",
                title: "OpenAPI Spec",
                id: "openAPISpecificationDocs",
                icon: ApiIcon
            }),
            S.divider(),
            ...singletonDocumentListItems({ S, context }).filter(
                (item: any) => item.spec.id !== "openApiSpecificationDocs"
            ),
            S.divider(),
            ...filteredDocumentListItems({ S, context })
        ]);
