import { sp } from "@pnp/sp/presets/all";

export interface ICarouselItem {
  imageUrl: string;
}

export class ImageService {
  public async fetchCarouselData(): Promise<ICarouselItem[]> {
    try {
      const response = await sp.web.lists.getByTitle("CarrouselData").items.select("url").get();
      console.log("Carousel data response:", response);

      if (response && response.length > 0) {
        // Extract image URLs from the response
        const carouselData = response.map(item => ({
          imageUrl: item.url, // Assuming FileRef contains the URL/path to the images
        }));
        console.log("Carousel data with image URLs:", carouselData);
        return carouselData;
      } else {
        console.error("Empty response received for carousel data.");
        return [];
      }
    } catch (error) {
      console.error("Error fetching carousel data:", error);
      return [];
    }
  }
}
