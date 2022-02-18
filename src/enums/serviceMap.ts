import services from './services'
import GcpProject from '../services/project'
import GcpBigQuery from '../services/bigQuery'
import GcpBigQueryConnection from '../services/bigQueryConnection'
import GcpBigQueryReservation from '../services/bigQueryReservation'
import GcpBigQueryReservationCapacityCommitment from '../services/bigQueryReservationCapacityCommitment'
import GcpBigQueryDataTransfer from '../services/bigQueryDataTransfer'
import GcpBigQueryDataTransferRun from '../services/bigQueryDataTransferRun'
import GcpKmsKeyRing from '../services/kms'
import GcpKmsCryptoKey from '../services/kmsCryptoKey'
import GcpCloudRouter from '../services/cloudRouter'
import GcpCdnBackendBucket from '../services/cdnBackendBucket'
import GcpCdnBackendService from '../services/cdnBackendService'
import GcpCdnUrlMap from '../services/cdnUrlMap'
import GcpDnsManagedZone from '../services/dnsManagedZone'
import GcpVpc from '../services/vpc'
import GcpIam from '../services/iam'
import GcpLogBucket from '../services/logBucket'
import GcpLogSink from '../services/logSink'
import GcpLogView from '../services/logView'
import GcpStorageBucket from '../services/storageBucket'
import GcpFirewall from '../services/firewall'
import GcpFolder from '../services/folder'
import GcpOrganization from '../services/organization'
import GcpSecretManager from '../services/secretManager'
import GcpNetwork from '../services/network'
import GcpSubnet from '../services/subnet'
import GcpVmInstance from '../services/vmInstance'
import GcpDnsPolicy from '../services/dnsPolicy'
import GcpLogMetric from '../services/logMetric'
import GcpAlertPolicy from '../services/alertPolicy'
import GcpCloudFunction from '../services/cloudFunction'
import GcpAssets from '../services/assetInventory'
import GcpTargetSslProxies from '../services/targetSslProxy'
import GcpTargetHttpsProxies from '../services/targetHttpsProxy'
import GcpSqlInstances from '../services/sqlInstance'
import GcpSslPolicies from '../services/sslPolicy'
import GcpServiceAccount from '../services/serviceAccount'
import GcpApiKey from '../services/apiKey'
import GcpComputeProject from '../services/computeProject'
import GcpDataprocCluster from '../services/dataprocCluster'
import GcpDataprocAutoscalingPolicy from '../services/dataprocAutoscalingPolicy'
import GcpDataprocJob from '../services/dataprocJob'
import GcpDataprocWorkflowTemplate from '../services/dataprocWorkflowTemplate'
import GcpFirestoreDatabase from '../services/firestore'
import GcpLabel from '../services/label'
import GcpTag from '../services/tag'

/**
 * serviceMap is an object that contains all currently supported services
 * serviceMap is used by the serviceFactory to produce instances of service classes
 */
export default {
  [services.firewall]: GcpFirewall,
  [services.project]: GcpProject,
  [services.bigQueryDataset]: GcpBigQuery,
  [services.bigQueryConnection]: GcpBigQueryConnection,
  [services.bigQueryReservation]: GcpBigQueryReservation,
  [services.bigQueryReservationCapacityCommitment]: GcpBigQueryReservationCapacityCommitment,
  [services.bigQueryDataTransfer]: GcpBigQueryDataTransfer,
  [services.bigQueryDataTransferRun]: GcpBigQueryDataTransferRun,
  [services.kmsKeyRing]: GcpKmsKeyRing,
  [services.kmsCryptoKeys]: GcpKmsCryptoKey,
  [services.cloudRouter]: GcpCloudRouter,
  [services.cdnBackendBucket]: GcpCdnBackendBucket,
  [services.cdnBackendService]: GcpCdnBackendService,
  [services.cdnUrlMap]: GcpCdnUrlMap,
  [services.dnsManagedZone]: GcpDnsManagedZone,
  [services.dnsPolicy]: GcpDnsPolicy,
  [services.vpcConnector]: GcpVpc,
  [services.iamPolicy]: GcpIam,
  [services.logBucket]: GcpLogBucket,
  [services.logSink]: GcpLogSink,
  [services.logView]: GcpLogView,
  [services.storageBucket]: GcpStorageBucket,
  [services.folder]: GcpFolder,
  [services.organization]: GcpOrganization,
  [services.secretManager]: GcpSecretManager,
  [services.network]: GcpNetwork,
  [services.subnet]: GcpSubnet,
  [services.vmInstance]: GcpVmInstance,
  [services.logMetric]: GcpLogMetric,
  [services.alertPolicy]: GcpAlertPolicy,
  [services.cloudFunction]: GcpCloudFunction,
  [services.assets]: GcpAssets,
  [services.targetSslProxies]: GcpTargetSslProxies,
  [services.targetHttpsProxies]: GcpTargetHttpsProxies,
  [services.sqlInstances]: GcpSqlInstances,
  [services.sslPolicies]: GcpSslPolicies,
  [services.serviceAccount]: GcpServiceAccount,
  [services.apiKey]: GcpApiKey,
  [services.computeProject]: GcpComputeProject,
  [services.dataprocCluster]: GcpDataprocCluster,
  [services.dataprocAutoscalingPolicy]: GcpDataprocAutoscalingPolicy,
  [services.dataprocJob]: GcpDataprocJob,
  [services.dataprocWorkflowTemplate]: GcpDataprocWorkflowTemplate,
  [services.firestoreDatabase]: GcpFirestoreDatabase,
  label: GcpLabel,
  tag: GcpTag,
}
