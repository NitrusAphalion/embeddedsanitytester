// structure.js
import {
    singletonDocumentListItem,
    singletonDocumentListItems,
    filteredDocumentListItems
} from "sanity-plugin-singleton-tools";
import { ApiIcon } from "@sanity/icons";
import { ConfigContext } from "sanity";
import { StructureBuilder } from "sanity/structure";

export const structure = (S: StructureBuilder, context: ConfigContext) =>
    S.list()
        .title("Types")
        .items([
            ...filteredDocumentListItems({ S, context }).filter((item: any) =>
                ["desktopSdkDoc", "webSdkDoc", "widgetSdkDoc"].includes(
                    item.spec.id
                )
            ),
            S.divider(),
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
            ...filteredDocumentListItems({ S, context }).filter(
                (item: any) =>
                    !["desktopSdkDoc", "webSdkDoc", "widgetSdkDoc"].includes(
                        item.spec.id
                    )
            )
        ]);
