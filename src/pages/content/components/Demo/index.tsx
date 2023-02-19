import refreshOnUpdate from "virtual:reload-on-update-in-view";
import Split from "split.js";

import { getBucket, Bucket } from "@extend-chrome/storage";

refreshOnUpdate("pages/content/components/Demo");

type CustomizationsStore = {
  leftSidebarSize: number;
};

const defaultLeftSidebarSize = 25;

class SplitObserver {
  customizationsBucket: Bucket<CustomizationsStore>;

  constructor(private leftSidebarSize: number = defaultLeftSidebarSize) {
    this.customizationsBucket = getBucket<CustomizationsStore>(
      "customizations-store"
    );
  }

  async onDragEnd(sizes: number[]) {
    try {
      const size = Math.trunc(sizes?.[0]);
      const customizationsBucket = getBucket<CustomizationsStore>(
        "customizations-store"
      );
      await customizationsBucket.set({ leftSidebarSize: size });
    } catch (error) {
      console.log("Error setting leftSidebarSize into chrome.storage", error);
    }
  }

  async init() {
    try {
      const { leftSidebarSize } = await this.customizationsBucket.get({
        leftSidebarSize: defaultLeftSidebarSize,
      });
      this.leftSidebarSize = leftSidebarSize;
    } catch (error) {
      console.log("Error getting leftSidebarSize from chrome.storage", error);
    }

    const observer = new MutationObserver((mutations_list) => {
      mutations_list.forEach((mutation) => {
        mutation.addedNodes.forEach((added_node) => {
          if (added_node.nodeType === Node.ELEMENT_NODE) {
            const leftSidebarElement = (
              added_node as Element
            ).getElementsByClassName("PageLayout__leftSidebar");
            if (leftSidebarElement.length !== 0) {
              Split([".PageLayout__leftSidebar", ".PageLayout__content"], {
                sizes: [this.leftSidebarSize, 100 - this.leftSidebarSize],
                onDragEnd: this.onDragEnd,
              });
            }
          }
        });
      });
    });

    observer.observe(document, { subtree: true, childList: true });
  }
}

const splitObserver = new SplitObserver();

splitObserver.init();
