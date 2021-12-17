import cuid from 'cuid'
import { ProjectsClient } from '@google-cloud/resource-manager'
import { google } from '@google-cloud/resource-manager/build/protos/protos'
import CloudGraph from '@cloudgraph/sdk'
import groupBy from 'lodash/groupBy'
import gcpLoggerText from '../../properties/logger'
import { GcpServiceInput } from '../../types'
import { initTestEndpoint, generateGcpErrorLog } from '../../utils'
import { GLOBAL_REGION } from '../../config/constants'

const lt = { ...gcpLoggerText }
const { logger } = CloudGraph
const serviceName = 'IAM'
const apiEndpoint = initTestEndpoint(serviceName)

export interface RawGcpIamPolicy extends google.iam.v1.IPolicy { 
  id: string
  resource: string
  region: string
}

export default async ({
  config,
  rawData,
}: GcpServiceInput): Promise<{
  [region: string]: RawGcpIamPolicy[]
}> =>
  new Promise(async resolve => {
    const policyList: RawGcpIamPolicy[] = []
    const resources: any = rawData
      .flatMap(({ data }) => data)
      .filter(resource => Object.keys(resource).length)
      .flatMap(resource => Object.entries(resource)[0][1])

    /**
     * Get all the IAM policies
     */
    try {
      const projectsClient = new ProjectsClient({ ...config, apiEndpoint });
      for (const { name } of resources) {
        const response = await projectsClient.getIamPolicy({ resource: name })
        if (response && response[0]) {
          policyList.push({
            id: cuid(),
            ...response[0],
            resource: name,
            region: GLOBAL_REGION,
          })
        }
      }
    } catch (error) {
      generateGcpErrorLog(serviceName, 'resourceManager:getIamPolicy', error)
    }

    logger.debug(lt.foundPolicies(policyList.length))
    resolve(groupBy(policyList, 'region'))
  })
