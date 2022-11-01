import mixpanel, { Dict } from 'mixpanel-browser'

const useTrackingService = () => {
  const track = (eventName: string, dataObject?: Dict) => {
    if (process.env.REACT_APP_MIXPANEL_TOKEN) {
      mixpanel.track(eventName, dataObject)
    }
  }

  return { track }
}

export default useTrackingService
