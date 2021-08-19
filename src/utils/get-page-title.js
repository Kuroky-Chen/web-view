import defaultSettings from '@/settings'

const title = defaultSettings.title || 'build_materials_web_view'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
