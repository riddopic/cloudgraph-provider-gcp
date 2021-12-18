export default {
  platform: 'Platform: GCP',
  fetchingResourceData: (resource: string): string => `Fetching ${resource} data...`,
  doneFetchingResourceData: (resource: string, num: number): string =>
    `✅ Done fetching ${resource} data in ${num}s ✅`,
  foundResources: (resource: string, num: number): string => `Found ${num} ${resource}`,
  lookingForResourcesAddToRegion: (region: string, resource: string): string =>
    `Looking for ${resource} to add to Region ${region}...`,
  addingServiceToRegion: (region: string, resource: string, num: number): string =>
    `Adding ${num} ${resource} to Region ${region}`,
  lookingForResourcesAddToProject: (resource: string): string =>
    `Looking for ${resource} to add to the Project...`,
  addingServiceToProject: (resource: string, num: number): string =>
    `Adding ${num} ${resource} to the Project`,
  /**
  * VPC
  */
  foundVpcs: (num: number): string => `Found ${num} VPCs`,
  /**
  * Projects
  */
  foundProjects: (num: number): string => `Found ${num} Projects`,
}
