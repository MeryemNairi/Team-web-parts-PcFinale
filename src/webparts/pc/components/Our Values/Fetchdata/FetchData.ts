import { sp } from "@pnp/sp/presets/all";

// Define the interface for the data structure
export interface EventsItem {
  Title: string;
  content: string;
  icone: string;
}

export const fetchLatestNewsData = async (): Promise<EventsItem[]> => {
  try {
    const response = await sp.web.lists.getByTitle("Nosvaleurs").items.select("Title", "content", "icone").get();
    console.log("Latest News data response:", response);
    if (response && response.length > 0) {
      // Fetch image URLs and map the response to construct the correct image URL
      
      const events: EventsItem[] = response.map((item, index) => ({
        Title: item.Title,
        content: item.content,
        icone: item.icone  // Call a function to get the image URL
      }));
      return events;
    } else {
      console.error("Empty response received for Latest News data.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching Latest News data:", error);
    return [];
  }
};


