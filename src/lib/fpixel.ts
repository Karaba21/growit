export const FB_PIXEL_ID = "1979478512677107";

export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

export interface PixelEventParams {
  content_ids?: string[];
  content_name?: string;
  content_type?: string; 
  value?: number;
  currency?: string;
  num_items?: number;
  contents?: Array<{ id: string; quantity: number }>;
}

export const logEvent = (name: string, params?: PixelEventParams) => {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("track", name, params);
    } else {
      window.fbq("track", name);
    }
  }
};
