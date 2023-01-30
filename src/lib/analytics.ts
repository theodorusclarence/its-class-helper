const EventType = ['click'] as const;

type TrackEvent = (
  event_value: string,
  event_type: typeof EventType[number],
  url?: string | undefined,
  website_id?: string | undefined
) => void;

export const trackEvent: TrackEvent = (...args) => {
  if (window.umami && typeof window.umami.trackEvent === 'function') {
    window.umami.trackEvent(...args);
  }
};
