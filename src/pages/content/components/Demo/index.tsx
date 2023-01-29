import refreshOnUpdate from "virtual:reload-on-update-in-view";
import Split from 'split.js'

refreshOnUpdate("pages/content/components/Demo");

const leftSidebarSize = 25;

function onDragEnd(sizes: number[]) {
    console.log("Split sizes:", sizes);
}

const observer = new MutationObserver(function (mutations_list) {
    mutations_list.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (added_node) {
            if (added_node.nodeType === Node.ELEMENT_NODE) {
                const leftSidebarElement = (added_node as Element).getElementsByClassName("PageLayout__leftSidebar");
                if (leftSidebarElement.length !== 0) {
                    Split(['.PageLayout__leftSidebar', '.PageLayout__content'], {
                        sizes: [leftSidebarSize, 100 - leftSidebarSize],
                        onDragEnd
                    })
                    observer.disconnect();
                }
            }
        });
    });
});

observer.observe(document, {subtree: true, childList: true});
