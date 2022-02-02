export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GcpAcceleratorConfig = {
  acceleratorCount?: Maybe<Scalars['Int']>;
  acceleratorType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GcpAdvancedMachineFeatures = {
  enableNestedVirtualization?: Maybe<Scalars['Boolean']>;
  threadsPerCore?: Maybe<Scalars['Int']>;
};

export type GcpAlertPolicy = GcpBaseResource & {
  combiner?: Maybe<Scalars['String']>;
  conditions?: Maybe<Array<Maybe<GcpAlertPolicyCondition>>>;
  creationRecord?: Maybe<GcpAlertPolicyMutationRecord>;
  displayName?: Maybe<Scalars['String']>;
  documentation?: Maybe<GcpAlertPolicyDocumentation>;
  enabled?: Maybe<GcpBoolValue>;
  mutationRecord?: Maybe<GcpAlertPolicyMutationRecord>;
  notificationChannels?: Maybe<Array<Maybe<Scalars['String']>>>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  userLabels?: Maybe<Array<Maybe<GcpRawLabel>>>;
  validity?: Maybe<GcpRpcStatus>;
};

export type GcpAlertPolicyAggregation = {
  alignmentPeriod?: Maybe<GcpDuration>;
  crossSeriesReducer?: Maybe<Scalars['String']>;
  groupByFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  perSeriesAligner?: Maybe<Scalars['String']>;
};

export type GcpAlertPolicyCondition = {
  conditionAbsent?: Maybe<GcpAlertPolicyMetricAbsence>;
  conditionMonitoringQueryLanguage?: Maybe<GcpAlertPolicyMonitoringQueryLanguageCondition>;
  conditionThreshold?: Maybe<GcpAlertPolicyMetricThreshold>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type GcpAlertPolicyDocumentation = {
  content?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type GcpAlertPolicyMetricAbsence = {
  aggregations?: Maybe<Array<Maybe<GcpAlertPolicyAggregation>>>;
  duration?: Maybe<GcpDuration>;
  filter?: Maybe<Scalars['String']>;
  trigger?: Maybe<GcpAlertPolicyTrigger>;
};

export type GcpAlertPolicyMetricThreshold = {
  aggregations?: Maybe<Array<Maybe<GcpAlertPolicyAggregation>>>;
  comparison?: Maybe<Scalars['String']>;
  denominatorAggregations?: Maybe<Array<Maybe<GcpAlertPolicyAggregation>>>;
  denominatorFilter?: Maybe<Scalars['String']>;
  duration?: Maybe<GcpDuration>;
  filter?: Maybe<Scalars['String']>;
  thresholdValue?: Maybe<Scalars['Float']>;
  trigger?: Maybe<GcpAlertPolicyTrigger>;
};

export type GcpAlertPolicyMonitoringQueryLanguageCondition = {
  duration?: Maybe<GcpDuration>;
  query?: Maybe<Scalars['String']>;
  trigger?: Maybe<GcpAlertPolicyTrigger>;
};

export type GcpAlertPolicyMutationRecord = {
  mutateTime?: Maybe<Scalars['String']>;
  mutatedBy?: Maybe<Scalars['String']>;
};

export type GcpAlertPolicyTrigger = {
  count?: Maybe<Scalars['Float']>;
  percent?: Maybe<Scalars['Float']>;
};

export type GcpAny = {
  id: Scalars['String'];
  type_url?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GcpApiKey = GcpBaseResource & {
  createTime?: Maybe<Scalars['String']>;
  deleteTime?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  keyString?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  restrictions?: Maybe<GcpApiKeyRestrictions>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpApiKeyAndroidApplication = {
  id: Scalars['String'];
  packageName?: Maybe<Scalars['String']>;
  sha1Fingerprint?: Maybe<Scalars['String']>;
};

export type GcpApiKeyAndroidKeyRestrictions = {
  allowedApplications?: Maybe<Array<Maybe<GcpApiKeyAndroidApplication>>>;
};

export type GcpApiKeyApiTarget = {
  id: Scalars['String'];
  methods?: Maybe<Array<Maybe<Scalars['String']>>>;
  service?: Maybe<Scalars['String']>;
};

export type GcpApiKeyBrowserKeyRestrictions = {
  allowedReferrers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpApiKeyIosKeyRestrictions = {
  allowedBundleIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpApiKeyRestrictions = {
  androidKeyRestrictions?: Maybe<GcpApiKeyAndroidKeyRestrictions>;
  apiTargets?: Maybe<Array<Maybe<GcpApiKeyApiTarget>>>;
  browserKeyRestrictions?: Maybe<GcpApiKeyBrowserKeyRestrictions>;
  iosKeyRestrictions?: Maybe<GcpApiKeyIosKeyRestrictions>;
  serverKeyRestrictions?: Maybe<GcpApiKeyServerKeyRestrictions>;
};

export type GcpApiKeyServerKeyRestrictions = {
  allowedIps?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpAsset = GcpBaseResource & {
  accessLevel?: Maybe<GcpAssetAccessLevel>;
  accessPolicy?: Maybe<GcpAssetAccessPolicy>;
  ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  assetType?: Maybe<Scalars['String']>;
  orgPolicy?: Maybe<Array<Maybe<GcpAssetOrgPolicy>>>;
  osInventory?: Maybe<GcpAssetInventory>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  relatedAssets?: Maybe<GcpAssetRelatedAssets>;
  resource?: Maybe<GcpAssetResource>;
  servicePerimeter?: Maybe<GcpAssetServicePerimeter>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpAssetAccessLevel = {
  basic?: Maybe<GcpAssetBasicLevel>;
  createTime?: Maybe<Scalars['String']>;
  custom?: Maybe<GcpAssetCustomLevel>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpAssetAccessPolicy = {
  createTime?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpAssetBasicLevel = {
  combiningFunction?: Maybe<Scalars['String']>;
  conditions?: Maybe<Array<Maybe<GcpAssetCondition>>>;
};

export type GcpAssetBooleanPolicy = {
  enforced?: Maybe<Scalars['Boolean']>;
};

export type GcpAssetCondition = {
  devicePolicy?: Maybe<GcpAssetDevicePolicy>;
  id: Scalars['String'];
  ipSubnetworks?: Maybe<Array<Maybe<Scalars['String']>>>;
  members?: Maybe<Array<Maybe<Scalars['String']>>>;
  negate?: Maybe<Scalars['Boolean']>;
  regions?: Maybe<Array<Maybe<Scalars['String']>>>;
  requiredAccessLevels?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpAssetCustomLevel = {
  expr?: Maybe<GcpExpr>;
};

export type GcpAssetDevicePolicy = {
  allowedDeviceManagementLevels?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedEncryptionStatuses?: Maybe<Array<Maybe<Scalars['String']>>>;
  osConstraints?: Maybe<Array<Maybe<GcpAssetOsConstraint>>>;
  requireAdminApproval?: Maybe<Scalars['Boolean']>;
  requireCorpOwned?: Maybe<Scalars['Boolean']>;
  requireScreenlock?: Maybe<Scalars['Boolean']>;
};

export type GcpAssetInventory = {
  items?: Maybe<Array<Maybe<GcpAssetItem>>>;
  name?: Maybe<Scalars['String']>;
  osInfo?: Maybe<GcpAssetOsInfo>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpAssetItem = {
  availablePackage?: Maybe<GcpAssetSoftwarePackage>;
  createTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  installedPackage?: Maybe<GcpAssetSoftwarePackage>;
  key: Scalars['String'];
  originType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpAssetListPolicy = {
  allValues?: Maybe<Scalars['String']>;
  allowedValues?: Maybe<Array<Maybe<Scalars['String']>>>;
  deniedValues?: Maybe<Array<Maybe<Scalars['String']>>>;
  inheritFromParent?: Maybe<Scalars['Boolean']>;
  suggestedValue?: Maybe<Scalars['String']>;
};

export type GcpAssetOrgPolicy = {
  booleanPolicy?: Maybe<GcpAssetBooleanPolicy>;
  constraint?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  listPolicy?: Maybe<GcpAssetListPolicy>;
  updateTime?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type GcpAssetOsConstraint = {
  id: Scalars['String'];
  minimumVersion?: Maybe<Scalars['String']>;
  osType?: Maybe<Scalars['String']>;
  requireVerifiedChromeOs?: Maybe<Scalars['Boolean']>;
};

export type GcpAssetOsInfo = {
  architecture?: Maybe<Scalars['String']>;
  hostname?: Maybe<Scalars['String']>;
  kernelRelease?: Maybe<Scalars['String']>;
  kernelVersion?: Maybe<Scalars['String']>;
  longName?: Maybe<Scalars['String']>;
  osconfigAgentVersion?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type GcpAssetRelatedAsset = {
  ancestors?: Maybe<Array<Maybe<Scalars['String']>>>;
  asset?: Maybe<Scalars['String']>;
  assetType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GcpAssetRelatedAssets = {
  assets?: Maybe<Array<Maybe<GcpAssetRelatedAsset>>>;
  relationshipAttributes?: Maybe<GcpAssetRelationshipAttributes>;
};

export type GcpAssetRelationshipAttributes = {
  action?: Maybe<Scalars['String']>;
  sourceResourceType?: Maybe<Scalars['String']>;
  targetResourceType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GcpAssetResource = {
  data?: Maybe<GcpStruct>;
  discoveryDocumentUri?: Maybe<Scalars['String']>;
  discoveryName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  resourceUrl?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type GcpAssetServicePerimeter = {
  createTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  perimeterType?: Maybe<Scalars['String']>;
  spec?: Maybe<GcpAssetServicePerimeterConfig>;
  status?: Maybe<GcpAssetServicePerimeterConfig>;
  title?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
  useExplicitDryRunSpec?: Maybe<Scalars['Boolean']>;
};

export type GcpAssetServicePerimeterConfig = {
  accessLevels?: Maybe<Array<Maybe<Scalars['String']>>>;
  resources?: Maybe<Array<Maybe<Scalars['String']>>>;
  restrictedServices?: Maybe<Array<Maybe<Scalars['String']>>>;
  vpcAccessibleServices?: Maybe<GcpAssetVpcAccessibleServices>;
};

export type GcpAssetSoftwarePackage = {
  aptPackage?: Maybe<GcpAssetVersionedPackage>;
  cosPackage?: Maybe<GcpAssetVersionedPackage>;
  googetPackage?: Maybe<GcpAssetVersionedPackage>;
  qfePackage?: Maybe<GcpAssetWindowsQuickFixEngineeringPackage>;
  windowsApplication?: Maybe<GcpAssetWindowsApplication>;
  wuaPackage?: Maybe<GcpAssetWindowsUpdatePackage>;
  yumPackage?: Maybe<GcpAssetVersionedPackage>;
  zypperPackage?: Maybe<GcpAssetVersionedPackage>;
  zypperPatch?: Maybe<GcpAssetZypperPatch>;
};

export type GcpAssetVersionedPackage = {
  architecture?: Maybe<Scalars['String']>;
  packageName?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type GcpAssetVpcAccessibleServices = {
  allowedServices?: Maybe<Array<Maybe<Scalars['String']>>>;
  enableRestriction?: Maybe<Scalars['Boolean']>;
};

export type GcpAssetWindowsApplication = {
  displayName?: Maybe<Scalars['String']>;
  displayVersion?: Maybe<Scalars['String']>;
  helpLink?: Maybe<Scalars['String']>;
  installDate?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
};

export type GcpAssetWindowsQuickFixEngineeringPackage = {
  caption?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hotFixId?: Maybe<Scalars['String']>;
  installTime?: Maybe<Scalars['String']>;
};

export type GcpAssetWindowsUpdateCategory = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type GcpAssetWindowsUpdatePackage = {
  categories?: Maybe<Array<Maybe<GcpAssetWindowsUpdateCategory>>>;
  description?: Maybe<Scalars['String']>;
  kbArticleIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastDeploymentChangeTime?: Maybe<Scalars['String']>;
  moreInfoUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  revisionNumber?: Maybe<Scalars['Int']>;
  supportUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updateId?: Maybe<Scalars['String']>;
};

export type GcpAssetZypperPatch = {
  category?: Maybe<Scalars['String']>;
  patchName?: Maybe<Scalars['String']>;
  severity?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type GcpAttachedDisk = {
  autoDelete?: Maybe<Scalars['Boolean']>;
  boot?: Maybe<Scalars['Boolean']>;
  deviceName?: Maybe<Scalars['String']>;
  diskEncryptionKey?: Maybe<GcpCustomerEncryptionKey>;
  diskSizeGb?: Maybe<Scalars['String']>;
  guestOsFeatures?: Maybe<Array<Maybe<GcpGuestOsFeature>>>;
  id: Scalars['String'];
  index?: Maybe<Scalars['Int']>;
  initializeParams?: Maybe<GcpAttachedDiskInitializeParams>;
  interface?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  licenses?: Maybe<Array<Maybe<Scalars['String']>>>;
  mode?: Maybe<Scalars['String']>;
  shieldedInstanceInitialState?: Maybe<GcpInitialStateConfig>;
  source?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GcpAttachedDiskInitializeParams = {
  description?: Maybe<Scalars['String']>;
  diskName?: Maybe<Scalars['String']>;
  diskSizeGb?: Maybe<Scalars['String']>;
  diskType?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Maybe<GcpRawLabel>>>;
  onUpdateAction?: Maybe<Scalars['String']>;
  provisionedIops?: Maybe<Scalars['String']>;
  resourcePolicies?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceImage?: Maybe<Scalars['String']>;
  sourceImageEncryptionKey?: Maybe<GcpCustomerEncryptionKey>;
  sourceSnapshot?: Maybe<Scalars['String']>;
  sourceSnapshotEncryptionKey?: Maybe<GcpCustomerEncryptionKey>;
};

export type GcpBaseResource = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  region?: Maybe<Scalars['String']>;
};

export type GcpBigQueryOptions = {
  usePartitionedTables?: Maybe<Scalars['Boolean']>;
  usesTimestampColumnPartitioning?: Maybe<Scalars['Boolean']>;
};

export type GcpBoolValue = {
  value?: Maybe<Scalars['Boolean']>;
};

export type GcpCloudFunction = GcpBaseResource & {
  availableMemoryMb?: Maybe<Scalars['Float']>;
  buildId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entryPoint?: Maybe<Scalars['String']>;
  environmentVariables?: Maybe<Array<Maybe<GcpItems>>>;
  eventTrigger?: Maybe<GcpCloudFunctionEventTrigger>;
  httpsTrigger?: Maybe<GcpCloudFunctionHttpsTrigger>;
  ingressSettings?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Maybe<GcpRawLabel>>>;
  maxInstances?: Maybe<Scalars['Float']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  runtime?: Maybe<Scalars['String']>;
  serviceAccountEmail?: Maybe<Scalars['String']>;
  sourceArchiveUrl?: Maybe<Scalars['String']>;
  sourceRepository?: Maybe<GcpCloudFunctionSourceRepository>;
  sourceUploadUrl?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  timeout?: Maybe<GcpDuration>;
  updateTime?: Maybe<Scalars['String']>;
  versionId?: Maybe<Scalars['String']>;
  vpcConnectorEgressSettings?: Maybe<Scalars['String']>;
  vpcConnectors?: Maybe<Array<Maybe<GcpVpcConnector>>>;
};

export type GcpCloudFunctionEventTrigger = {
  eventType?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
};

export type GcpCloudFunctionHttpsTrigger = {
  securityLevel?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GcpCloudFunctionSourceRepository = {
  deployedUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GcpComputeAccessConfig = {
  id: Scalars['String'];
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  natIP?: Maybe<Scalars['String']>;
  networkTier?: Maybe<Scalars['String']>;
  publicPtrDomainName?: Maybe<Scalars['String']>;
  setPublicPtr?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

export type GcpComputeAliasIpRange = {
  id: Scalars['String'];
  ipCidrRange?: Maybe<Scalars['String']>;
  subnetworkRangeName?: Maybe<Scalars['String']>;
};

export type GcpComputeData = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GcpComputeItem = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GcpComputeMetadata = {
  fingerprint?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<GcpComputeItem>>>;
  kind?: Maybe<Scalars['String']>;
};

export type GcpComputeNetworkInterface = {
  accessConfigs?: Maybe<Array<Maybe<GcpComputeAccessConfig>>>;
  aliasIpRanges?: Maybe<Array<Maybe<GcpComputeAliasIpRange>>>;
  fingerprint?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ipv6Address?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  networkIP?: Maybe<Scalars['String']>;
  nicType?: Maybe<Scalars['String']>;
  subnetwork?: Maybe<Scalars['String']>;
};

export type GcpComputeProject = GcpBaseResource & {
  commonInstanceMetadata?: Maybe<GcpComputeMetadata>;
  creationTimestamp?: Maybe<Scalars['String']>;
  defaultNetworkTier?: Maybe<Scalars['String']>;
  defaultServiceAccount?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enabledFeatures?: Maybe<Array<Maybe<Scalars['String']>>>;
  kind?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  quotas?: Maybe<Array<Maybe<GcpComputeQuota>>>;
  selfLink?: Maybe<Scalars['String']>;
  usageExportLocation?: Maybe<GcpComputeUsageExportLocation>;
  xpnProjectStatus?: Maybe<Scalars['String']>;
};

export type GcpComputeQuota = {
  id: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
  metric?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  usage?: Maybe<Scalars['Float']>;
};

export type GcpComputeTags = {
  fingerprint?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpComputeUsageExportLocation = {
  bucketName?: Maybe<Scalars['String']>;
  reportNamePrefix?: Maybe<Scalars['String']>;
};

export type GcpComputeWarnings = {
  code?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<GcpComputeData>>>;
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type GcpConfidentialInstanceConfig = {
  enableConfidentialCompute?: Maybe<Scalars['Boolean']>;
};

export type GcpCustomerEncryptionKey = {
  kmsKeyName?: Maybe<Scalars['String']>;
  kmsKeyServiceAccount?: Maybe<Scalars['String']>;
  rawKey?: Maybe<Scalars['String']>;
  sha256?: Maybe<Scalars['String']>;
};

export type GcpDisplayDevice = {
  enableDisplay?: Maybe<Scalars['Boolean']>;
};

export type GcpDnsManagedZone = GcpBaseResource & {
  cloudLoggingConfigEnableLogging?: Maybe<Scalars['Boolean']>;
  cloudLoggingConfigKind?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dnsName?: Maybe<Scalars['String']>;
  dnssecConfigDefaultKeySpecs?: Maybe<Array<Maybe<GcpDnsZoneDnssecConfigDefaultKeySpec>>>;
  dnssecConfigKind?: Maybe<Scalars['String']>;
  dnssecConfigNonExistence?: Maybe<Scalars['String']>;
  dnssecConfigState?: Maybe<Scalars['String']>;
  forwardingConfigKind?: Maybe<Scalars['String']>;
  forwardingConfigTargetNameServers?: Maybe<Array<Maybe<GcpDnsZoneForwardingConfigTargetNameServer>>>;
  kind?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Maybe<GcpRawLabel>>>;
  nameServerSet?: Maybe<Scalars['String']>;
  nameServers?: Maybe<Array<Maybe<Scalars['String']>>>;
  peeringConfigKind?: Maybe<Scalars['String']>;
  peeringConfigTargetNetworkDeactivateTime?: Maybe<Scalars['String']>;
  peeringConfigTargetNetworkKind?: Maybe<Scalars['String']>;
  peeringConfigTargetNetworkUrl?: Maybe<Scalars['String']>;
  privateVisibilityConfigKind?: Maybe<Scalars['String']>;
  privateVisibilityConfigNetworks?: Maybe<Array<Maybe<GcpDnsZonePrivateVisibilityConfigNetwork>>>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  reverseLookupConfigKind?: Maybe<Scalars['String']>;
  serviceDirectoryConfigKind?: Maybe<Scalars['String']>;
  serviceDirectoryConfigNamespaceDeactivateTime?: Maybe<Scalars['String']>;
  serviceDirectoryConfigNamespaceKind?: Maybe<Scalars['String']>;
  serviceDirectoryConfigNamespaceUrl?: Maybe<Scalars['String']>;
  visibility?: Maybe<Scalars['String']>;
};

export type GcpDnsPolicy = GcpBaseResource & {
  alternativeNameServerConfigKind?: Maybe<Scalars['String']>;
  alternativeNameServerConfigTargetNameServers?: Maybe<Array<Maybe<GcpDnsPolicyAlternativeNameServerConfigTargetNameServer>>>;
  description?: Maybe<Scalars['String']>;
  enableInboundForwarding?: Maybe<Scalars['Boolean']>;
  enableLogging?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  network?: Maybe<Array<Maybe<GcpNetwork>>>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
};

export type GcpDnsPolicyAlternativeNameServerConfigTargetNameServer = {
  forwardingPath?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  ipv4Address?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

export type GcpDnsZoneDnssecConfigDefaultKeySpec = {
  algorithm?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  keyLength?: Maybe<Scalars['Int']>;
  keyType?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

export type GcpDnsZoneForwardingConfigTargetNameServer = {
  forwardingPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  ipv4Address?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

export type GcpDnsZonePrivateVisibilityConfigNetwork = {
  id: Scalars['String'];
  kind?: Maybe<Scalars['String']>;
  networkUrl?: Maybe<Scalars['String']>;
};

export type GcpDuration = {
  nanos?: Maybe<Scalars['Int']>;
  seconds?: Maybe<Scalars['String']>;
};

export type GcpExpr = {
  description?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type GcpFileContentBuffer = {
  content?: Maybe<Scalars['String']>;
  fileType?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type GcpFirewall = {
  allowed?: Maybe<Array<Maybe<GcpFirewallAccess>>>;
  creationTimestamp?: Maybe<Scalars['String']>;
  denied?: Maybe<Array<Maybe<GcpFirewallAccess>>>;
  description?: Maybe<Scalars['String']>;
  destinationRanges?: Maybe<Array<Maybe<Scalars['String']>>>;
  direction?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  kind?: Maybe<Scalars['String']>;
  logConfig?: Maybe<GcpFirewallLogConfig>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Array<Maybe<GcpNetwork>>>;
  priority?: Maybe<Scalars['Int']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  projectId?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  selfLink?: Maybe<Scalars['String']>;
  sourceRanges?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceServiceAccounts?: Maybe<Array<Maybe<Scalars['String']>>>;
  sourceTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  targetServiceAccounts?: Maybe<Array<Maybe<Scalars['String']>>>;
  targetTags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpFirewallAccess = {
  id: Scalars['String'];
  ipProtocol?: Maybe<Scalars['String']>;
  ports?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpFirewallLogConfig = {
  enable?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Scalars['String']>;
};

export type GcpFolder = GcpBaseResource & {
  createTime?: Maybe<Scalars['String']>;
  deleteTime?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  iamPolicy?: Maybe<Array<Maybe<GcpIamPolicy>>>;
  organization?: Maybe<Array<Maybe<GcpOrganization>>>;
  parent?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  state?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpGuestOsFeature = {
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type GcpIamBinding = {
  condition?: Maybe<GcpIamBindingExpr>;
  id: Scalars['String'];
  members?: Maybe<Array<Maybe<Scalars['String']>>>;
  role?: Maybe<Scalars['String']>;
};

export type GcpIamBindingExpr = {
  description?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type GcpIamPolicy = {
  id: Scalars['String'];
  projectId?: Maybe<Scalars['String']>;
  folderId?: Maybe<Scalars['String']>;
  storageBucketId?: Maybe<Scalars['String']>;
  cryptoKeyId?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  bindings?: Maybe<Array<Maybe<GcpIamBinding>>>;
  auditConfigs?: Maybe<Array<Maybe<GcpIamPolicyAuditConfig>>>;
  etag?: Maybe<Scalars['String']>;
  folder?: Maybe<Array<Maybe<GcpFolder>>>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  storageBucket?: Maybe<Array<Maybe<GcpStorageBucket>>>;
  kmsCryptoKeys?: Maybe<Array<Maybe<GcpKmsCryptoKey>>>;
};

export type GcpIamPolicyAuditConfig = {
  id: Scalars['String'];
  service?: Maybe<Scalars['String']>;
  exemptedMembers?: Maybe<Array<Maybe<Scalars['String']>>>;
  auditLogConfigs?: Maybe<Array<Maybe<GcpIamPolicyAuditLogConfig>>>;
};

export type GcpIamPolicyAuditLogConfig = {
  id: Scalars['String'];
  logType?: Maybe<Scalars['String']>;
  exemptedMembers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpInitialStateConfig = {
  dbs?: Maybe<Array<Maybe<GcpFileContentBuffer>>>;
  dbxs?: Maybe<Array<Maybe<GcpFileContentBuffer>>>;
  keks?: Maybe<Array<Maybe<GcpFileContentBuffer>>>;
  pk?: Maybe<GcpFileContentBuffer>;
};

export type GcpItems = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GcpKmsCryptoKey = GcpBaseResource & {
  primaryName?: Maybe<Scalars['String']>;
  primaryState?: Maybe<Scalars['String']>;
  primaryProtectionLevel?: Maybe<Scalars['String']>;
  primaryAlgorithm?: Maybe<Scalars['String']>;
  primaryAttestationFormat?: Maybe<Scalars['String']>;
  primaryAttestationContent?: Maybe<Scalars['String']>;
  primaryCreateTime?: Maybe<Scalars['String']>;
  primaryGenerateTime?: Maybe<Scalars['String']>;
  primaryDestroyTime?: Maybe<Scalars['String']>;
  primaryDestroyEventTime?: Maybe<Scalars['String']>;
  primaryImportJob?: Maybe<Scalars['String']>;
  primaryImportTime?: Maybe<Scalars['String']>;
  primaryImportFailureReason?: Maybe<Scalars['String']>;
  primaryExternalProtectionLevelOptionsExternalKeyUri?: Maybe<Scalars['String']>;
  primaryReimportEligible?: Maybe<Scalars['Boolean']>;
  purpose?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['String']>;
  nextRotationTime?: Maybe<Scalars['String']>;
  rotationPeriod?: Maybe<Scalars['String']>;
  versionTemplateAlgorithm?: Maybe<Scalars['String']>;
  versionTemplateProtectionLevel?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Maybe<GcpRawLabel>>>;
  importOnly?: Maybe<Scalars['Boolean']>;
  destroyScheduledDuration?: Maybe<Scalars['String']>;
  kmsKeyRingId?: Maybe<Scalars['String']>;
  iamPolicy?: Maybe<Array<Maybe<GcpIamPolicy>>>;
  kmsKeyRing?: Maybe<Array<Maybe<GcpKmsKeyRing>>>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
};

export type GcpKmsImportJob = {
  attestationContent?: Maybe<Scalars['String']>;
  attestationFormat?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['String']>;
  expireEventTime?: Maybe<Scalars['String']>;
  expireTime?: Maybe<Scalars['String']>;
  generateTime?: Maybe<Scalars['String']>;
  importMethod?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  protectionLevel?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type GcpKmsKeyRing = GcpBaseResource & {
  createTime?: Maybe<Scalars['String']>;
  importJobs?: Maybe<Array<Maybe<GcpKmsImportJob>>>;
  kmsCryptoKeys?: Maybe<Array<Maybe<GcpKmsCryptoKey>>>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
};

export type GcpLabelDescriptor = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  valueType?: Maybe<Scalars['String']>;
};

export type GcpListValue = {
  values?: Maybe<Array<Maybe<GcpValue>>>;
};

export type GcpLogBucket = {
  createTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lifecycleState?: Maybe<Scalars['String']>;
  locked?: Maybe<Scalars['Boolean']>;
  logView?: Maybe<Array<Maybe<GcpLogView>>>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  projectId?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  retentionDays?: Maybe<Scalars['Int']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpLogExclusion = {
  createTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpLogMetric = GcpBaseResource & {
  bucketOptions?: Maybe<GcpLogMetricBucketOptions>;
  createTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  labelExtractors?: Maybe<Array<Maybe<GcpRawLabel>>>;
  metricDescriptor?: Maybe<GcpLogMetricDescriptor>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  updateTime?: Maybe<Scalars['String']>;
  valueExtractor?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type GcpLogMetricBucketOptions = {
  explicitBuckets?: Maybe<GcpLogMetricBucketOptionsExplicit>;
  exponentialBuckets?: Maybe<GcpLogMetricBucketOptionsExponential>;
  linearBuckets?: Maybe<GcpLogMetricBucketOptionsLinear>;
};

export type GcpLogMetricBucketOptionsExplicit = {
  bounds?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GcpLogMetricBucketOptionsExponential = {
  growthFactor?: Maybe<Scalars['Float']>;
  numFiniteBuckets?: Maybe<Scalars['Float']>;
  scale?: Maybe<Scalars['Float']>;
};

export type GcpLogMetricBucketOptionsLinear = {
  numFiniteBuckets?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type GcpLogMetricDescriptor = {
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Maybe<GcpLabelDescriptor>>>;
  launchStage?: Maybe<Scalars['String']>;
  metadata?: Maybe<GcpLogMetricDescriptorMetadata>;
  metricKind?: Maybe<Scalars['String']>;
  monitoredResourceTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  valueType?: Maybe<Scalars['String']>;
};

export type GcpLogMetricDescriptorMetadata = {
  ingestDelay?: Maybe<GcpDuration>;
  launchStage?: Maybe<Scalars['String']>;
  samplePeriod?: Maybe<GcpDuration>;
};

export type GcpLogSink = {
  bigqueryOptions?: Maybe<GcpBigQueryOptions>;
  createTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  exclusions?: Maybe<Array<Maybe<GcpLogExclusion>>>;
  filter?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  includeChildren?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  outputVersionFormat?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  projectId?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
  writerIdentity?: Maybe<Scalars['String']>;
};

export type GcpLogView = {
  createTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  logBucket?: Maybe<Array<Maybe<GcpLogBucket>>>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  projectId?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpMetadata = {
  fingerprint?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<GcpItems>>>;
  kind?: Maybe<Scalars['String']>;
};

export type GcpNetwork = GcpBaseResource & {
  autoCreateSubnetworks?: Maybe<Scalars['Boolean']>;
  creationTimestamp?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dnsPolicy?: Maybe<Array<Maybe<GcpDnsPolicy>>>;
  firewall?: Maybe<Array<Maybe<GcpFirewall>>>;
  gatewayIPv4?: Maybe<Scalars['String']>;
  ipV4Range?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  mtu?: Maybe<Scalars['Int']>;
  peerings?: Maybe<Array<Maybe<GcpNetworkPeering>>>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  routingConfig?: Maybe<GcpNetworkRoutingConfig>;
  selfLink?: Maybe<Scalars['String']>;
  sqlInstances?: Maybe<Array<Maybe<GcpSqlInstance>>>;
  subnet?: Maybe<Array<Maybe<GcpSubnet>>>;
  vmInstance?: Maybe<Array<Maybe<GcpVmInstance>>>;
  vpcConnectors?: Maybe<Array<Maybe<GcpVpcConnector>>>;
};

export type GcpNetworkPeering = {
  autoCreateRoutes?: Maybe<Scalars['Boolean']>;
  exchangeSubnetRoutes?: Maybe<Scalars['Boolean']>;
  exportCustomRoutes?: Maybe<Scalars['Boolean']>;
  exportSubnetRoutesWithPublicIp?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  importCustomRoutes?: Maybe<Scalars['Boolean']>;
  importSubnetRoutesWithPublicIp?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  peerMtu?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  stateDetails?: Maybe<Scalars['String']>;
};

export type GcpNetworkRoutingConfig = {
  routingMode?: Maybe<Scalars['String']>;
};

export type GcpOrganization = GcpBaseResource & {
  createTime?: Maybe<Scalars['String']>;
  deleteTime?: Maybe<Scalars['String']>;
  directoryCustomerId?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  folder?: Maybe<Array<Maybe<GcpFolder>>>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  state?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['String']>;
};

export type GcpProject = {
  alertPolicy?: Maybe<Array<Maybe<GcpAlertPolicy>>>;
  apiKeys?: Maybe<Array<Maybe<GcpApiKey>>>;
  assets?: Maybe<Array<Maybe<GcpAsset>>>;
  cloudFunction?: Maybe<Array<Maybe<GcpCloudFunction>>>;
  computeProject?: Maybe<Array<Maybe<GcpComputeProject>>>;
  createTime?: Maybe<Scalars['String']>;
  deleteTime?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  dnsManagedZone?: Maybe<Array<Maybe<GcpDnsManagedZone>>>;
  dnsPolicy?: Maybe<Array<Maybe<GcpDnsPolicy>>>;
  etag?: Maybe<Scalars['String']>;
  firewall?: Maybe<Array<Maybe<GcpFirewall>>>;
  folder?: Maybe<Array<Maybe<GcpFolder>>>;
  kmsKeyRing?: Maybe<Array<Maybe<GcpKmsKeyRing>>>;
  iamPolicy?: Maybe<Array<Maybe<GcpIamPolicy>>>;
  id: Scalars['String'];
  kms?: Maybe<Array<Maybe<GcpKmsKeyRing>>>;
  labels?: Maybe<Array<Maybe<GcpRawLabel>>>;
  logBucket?: Maybe<Array<Maybe<GcpLogBucket>>>;
  logMetric?: Maybe<Array<Maybe<GcpLogMetric>>>;
  logSink?: Maybe<Array<Maybe<GcpLogSink>>>;
  logView?: Maybe<Array<Maybe<GcpLogView>>>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Array<Maybe<GcpNetwork>>>;
  organization?: Maybe<Array<Maybe<GcpOrganization>>>;
  parent?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  secretManager?: Maybe<Array<Maybe<GcpSecret>>>;
  serviceAccounts?: Maybe<Array<Maybe<GcpServiceAccount>>>;
  sqlInstances?: Maybe<Array<Maybe<GcpSqlInstance>>>;
  sslPolicies?: Maybe<Array<Maybe<GcpSslPolicy>>>;
  state?: Maybe<Scalars['String']>;
  storageBucket?: Maybe<Array<Maybe<GcpStorageBucket>>>;
  subnet?: Maybe<Array<Maybe<GcpSubnet>>>;
  targetHttpsProxies?: Maybe<Array<Maybe<GcpTargetHttpsProxy>>>;
  targetSslProxies?: Maybe<Array<Maybe<GcpTargetSslProxy>>>;
  updateTime?: Maybe<Scalars['String']>;
  vmInstance?: Maybe<Array<Maybe<GcpVmInstance>>>;
  vpcConnectors?: Maybe<Array<Maybe<GcpVpcConnector>>>;
  kmsCryptoKeys?: Maybe<Array<Maybe<GcpKmsCryptoKey>>>;
};

export type GcpRawLabel = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GcpRawTag = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GcpReservationAffinity = {
  consumeReservationType?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpRpcStatus = {
  code?: Maybe<Scalars['Float']>;
  details?: Maybe<Array<Maybe<GcpAny>>>;
  message?: Maybe<Scalars['String']>;
};

export type GcpScheduling = {
  automaticRestart?: Maybe<Scalars['Boolean']>;
  locationHint?: Maybe<Scalars['String']>;
  minNodeCpus?: Maybe<Scalars['Int']>;
  nodeAffinities?: Maybe<Array<Maybe<GcpSchedulingNodeAffinity>>>;
  onHostMaintenance?: Maybe<Scalars['String']>;
  preemptible?: Maybe<Scalars['Boolean']>;
};

export type GcpSchedulingNodeAffinity = {
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpSecret = GcpBaseResource & {
  createTime?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  expireTime?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Maybe<GcpRawLabel>>>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  replication?: Maybe<GcpSecretReplication>;
  rotation?: Maybe<GcpSecretReplicationStatusRotation>;
  topics?: Maybe<Array<Maybe<GcpSecretReplicationStatusTopic>>>;
  ttl?: Maybe<GcpDuration>;
};

export type GcpSecretReplication = {
  automatic?: Maybe<GcpSecretReplicationAutomatic>;
  userManaged?: Maybe<GcpSecretReplicationUserManagedStatus>;
};

export type GcpSecretReplicationAutomatic = {
  customerManagedEncryption?: Maybe<GcpSecretReplicationCustomerManagedEncryption>;
};

export type GcpSecretReplicationCustomerManagedEncryption = {
  kmsKeyName?: Maybe<Scalars['String']>;
};

export type GcpSecretReplicationStatusRotation = {
  nextRotationTime?: Maybe<Scalars['String']>;
  rotationPeriod?: Maybe<GcpDuration>;
};

export type GcpSecretReplicationStatusTopic = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type GcpSecretReplicationUserManagedStatus = {
  replicas?: Maybe<Array<Maybe<GcpSecretReplicationUserManagedStatusReplicaStatus>>>;
};

export type GcpSecretReplicationUserManagedStatusCustomerManagedEncryptionStatus = {
  kmsKeyVersionName?: Maybe<Scalars['String']>;
};

export type GcpSecretReplicationUserManagedStatusReplicaStatus = {
  customerManagedEncryption?: Maybe<GcpSecretReplicationUserManagedStatusCustomerManagedEncryptionStatus>;
  id: Scalars['String'];
  location?: Maybe<Scalars['String']>;
};

export type GcpServiceAccount = GcpBaseResource & {
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  keys?: Maybe<Array<Maybe<GcpServiceAccountKey>>>;
  oauth2ClientId?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
};

export type GcpServiceAccountKey = {
  id: Scalars['String'];
  keyAlgorithm?: Maybe<Scalars['String']>;
  keyOrigin?: Maybe<Scalars['String']>;
  keyType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  validAfterTime?: Maybe<Scalars['String']>;
  validBeforeTime?: Maybe<Scalars['String']>;
};

export type GcpShieldedInstanceConfig = {
  enableIntegrityMonitoring?: Maybe<Scalars['Boolean']>;
  enableSecureBoot?: Maybe<Scalars['Boolean']>;
  enableVtpm?: Maybe<Scalars['Boolean']>;
};

export type GcpShieldedInstanceIntegrityPolicy = {
  updateAutoLearnPolicy?: Maybe<Scalars['Boolean']>;
};

export type GcpSqlAclEntry = {
  expirationTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GcpSqlActiveDirectoryConfig = {
  domain?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
};

export type GcpSqlBackupConfiguration = {
  backupRetentionSettings?: Maybe<GcpSqlBackupRetentionSettings>;
  binaryLogEnabled?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  pointInTimeRecoveryEnabled?: Maybe<Scalars['Boolean']>;
  replicationLogArchivingEnabled?: Maybe<Scalars['Boolean']>;
  startTime?: Maybe<Scalars['String']>;
  transactionLogRetentionDays?: Maybe<Scalars['String']>;
};

export type GcpSqlBackupRetentionSettings = {
  retainedBackups?: Maybe<Scalars['String']>;
  retentionUnit?: Maybe<Scalars['String']>;
};

export type GcpSqlDatabaseFlags = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type GcpSqlDenyMaintenancePeriod = {
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  startDate?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

export type GcpSqlDiskEncryptionConfiguration = {
  kind?: Maybe<Scalars['String']>;
  kmsKeyName?: Maybe<Scalars['String']>;
};

export type GcpSqlDiskEncryptionStatus = {
  kind?: Maybe<Scalars['String']>;
  kmsKeyVersionName?: Maybe<Scalars['String']>;
};

export type GcpSqlInsightsConfig = {
  queryInsightsEnabled?: Maybe<Scalars['Boolean']>;
  queryPlansPerMinute?: Maybe<Scalars['String']>;
  queryStringLength?: Maybe<Scalars['String']>;
  recordApplicationTags?: Maybe<Scalars['Boolean']>;
  recordClientAddress?: Maybe<Scalars['Boolean']>;
};

export type GcpSqlInstance = GcpBaseResource & {
  backendType?: Maybe<Scalars['String']>;
  connectionName?: Maybe<Scalars['String']>;
  currentDiskSize?: Maybe<Scalars['String']>;
  databaseVersion?: Maybe<Scalars['String']>;
  diskEncryptionConfiguration?: Maybe<GcpSqlDiskEncryptionConfiguration>;
  diskEncryptionStatus?: Maybe<GcpSqlDiskEncryptionStatus>;
  etag?: Maybe<Scalars['String']>;
  failoverReplica?: Maybe<GcpSqlInstanceSqlFailoverReplica>;
  gceZone?: Maybe<Scalars['String']>;
  instanceType?: Maybe<Scalars['String']>;
  ipAddresses?: Maybe<Array<Maybe<GcpSqlIpMapping>>>;
  ipv6Address?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  masterInstanceName?: Maybe<Scalars['String']>;
  maxDiskSize?: Maybe<Scalars['String']>;
  network?: Maybe<Array<Maybe<GcpNetwork>>>;
  onPremisesConfiguration?: Maybe<GcpSqlOnPremisesConfiguration>;
  outOfDiskReport?: Maybe<GcpSqlInstanceOutOfDiskReport>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  replicaConfiguration?: Maybe<GcpSqlReplicaConfiguration>;
  replicaNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  rootPassword?: Maybe<Scalars['String']>;
  satisfiesPzs?: Maybe<Scalars['Boolean']>;
  scheduledMaintenance?: Maybe<GcpSqlInstanceScheduledMaintenance>;
  secondaryGceZone?: Maybe<Scalars['String']>;
  selfLink?: Maybe<Scalars['String']>;
  serverCaCert?: Maybe<GcpSqlSslCert>;
  serviceAccountEmailAddress?: Maybe<Scalars['String']>;
  settings?: Maybe<GcpSqlSettings>;
  state?: Maybe<Scalars['String']>;
  suspensionReason?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpSqlInstanceOutOfDiskReport = {
  sqlMinRecommendedIncreaseSizeGb?: Maybe<Scalars['Float']>;
  sqlOutOfDiskState?: Maybe<Scalars['String']>;
};

export type GcpSqlInstanceScheduledMaintenance = {
  canDefer?: Maybe<Scalars['Boolean']>;
  canReschedule?: Maybe<Scalars['Boolean']>;
  startTime?: Maybe<Scalars['String']>;
};

export type GcpSqlInstanceSqlFailoverReplica = {
  available?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type GcpSqlIpConfiguration = {
  authorizedNetworks?: Maybe<Array<Maybe<GcpSqlAclEntry>>>;
  ipv4Enabled?: Maybe<Scalars['Boolean']>;
  privateNetwork?: Maybe<Scalars['String']>;
  requireSsl?: Maybe<Scalars['Boolean']>;
};

export type GcpSqlIpMapping = {
  id: Scalars['String'];
  ipAddress?: Maybe<Scalars['String']>;
  timeToRetire?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GcpSqlLocationPreference = {
  followGaeApplication?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  secondaryZone?: Maybe<Scalars['String']>;
  zone?: Maybe<Scalars['String']>;
};

export type GcpSqlMaintenanceWindow = {
  day?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  updateTrack?: Maybe<Scalars['String']>;
};

export type GcpSqlMySqlReplicaConfiguration = {
  caCertificate?: Maybe<Scalars['String']>;
  clientCertificate?: Maybe<Scalars['String']>;
  clientKey?: Maybe<Scalars['String']>;
  connectRetryInterval?: Maybe<Scalars['String']>;
  dumpFilePath?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  masterHeartbeatPeriod?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  sslCipher?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  verifyServerCertificate?: Maybe<Scalars['Boolean']>;
};

export type GcpSqlOnPremisesConfiguration = {
  caCertificate?: Maybe<Scalars['String']>;
  clientCertificate?: Maybe<Scalars['String']>;
  clientKey?: Maybe<Scalars['String']>;
  dumpFilePath?: Maybe<Scalars['String']>;
  hostPort?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type GcpSqlReplicaConfiguration = {
  failoverTarget?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  mysqlReplicaConfiguration?: Maybe<GcpSqlMySqlReplicaConfiguration>;
};

export type GcpSqlSettings = {
  activationPolicy?: Maybe<Scalars['String']>;
  activeDirectoryConfig?: Maybe<GcpSqlActiveDirectoryConfig>;
  authorizedGaeApplications?: Maybe<Array<Maybe<Scalars['String']>>>;
  availabilityType?: Maybe<Scalars['String']>;
  backupConfiguration?: Maybe<GcpSqlBackupConfiguration>;
  collation?: Maybe<Scalars['String']>;
  crashSafeReplicationEnabled?: Maybe<Scalars['Boolean']>;
  dataDiskSizeGb?: Maybe<Scalars['String']>;
  dataDiskType?: Maybe<Scalars['String']>;
  databaseFlags?: Maybe<Array<Maybe<GcpSqlDatabaseFlags>>>;
  databaseReplicationEnabled?: Maybe<Scalars['Boolean']>;
  denyMaintenancePeriods?: Maybe<Array<Maybe<GcpSqlDenyMaintenancePeriod>>>;
  insightsConfig?: Maybe<GcpSqlInsightsConfig>;
  ipConfiguration?: Maybe<GcpSqlIpConfiguration>;
  kind?: Maybe<Scalars['String']>;
  locationPreference?: Maybe<GcpSqlLocationPreference>;
  maintenanceWindow?: Maybe<GcpSqlMaintenanceWindow>;
  pricingPlan?: Maybe<Scalars['String']>;
  replicationType?: Maybe<Scalars['String']>;
  settingsVersion?: Maybe<Scalars['String']>;
  storageAutoResize?: Maybe<Scalars['Boolean']>;
  storageAutoResizeLimit?: Maybe<Scalars['String']>;
  tier?: Maybe<Scalars['String']>;
  userLabels?: Maybe<Array<Maybe<GcpRawLabel>>>;
};

export type GcpSqlSslCert = {
  cert?: Maybe<Scalars['String']>;
  certSerialNumber?: Maybe<Scalars['String']>;
  commonName?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['String']>;
  expirationTime?: Maybe<Scalars['String']>;
  instance?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  selfLink?: Maybe<Scalars['String']>;
  sha1Fingerprint?: Maybe<Scalars['String']>;
};

export type GcpSslPolicy = GcpBaseResource & {
  creationTimestamp?: Maybe<Scalars['String']>;
  customFeatures?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  enabledFeatures?: Maybe<Array<Maybe<Scalars['String']>>>;
  fingerprint?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  minTlsVersion?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  selfLink?: Maybe<Scalars['String']>;
  warnings?: Maybe<Array<Maybe<GcpComputeWarnings>>>;
};

export type GcpStorageBucket = {
  baseUrl?: Maybe<Scalars['String']>;
  defaultEventBasedHold?: Maybe<Scalars['Boolean']>;
  etag?: Maybe<Scalars['String']>;
  iamConfiguration?: Maybe<GcpStorageBucketIamConfiguration>;
  iamPolicy?: Maybe<Array<Maybe<GcpIamPolicy>>>;
  id: Scalars['String'];
  kind?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Maybe<GcpRawTag>>>;
  location?: Maybe<Scalars['String']>;
  locationType?: Maybe<Scalars['String']>;
  metageneration?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pollIntervalMs?: Maybe<Scalars['Int']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  projectId: Scalars['String'];
  projectNumber?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  rpo?: Maybe<Scalars['String']>;
  satisfiesPZS?: Maybe<Scalars['Boolean']>;
  selfLink?: Maybe<Scalars['String']>;
  storageClass?: Maybe<Scalars['String']>;
  timeCreated?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  userProject?: Maybe<Scalars['String']>;
};

export type GcpStorageBucketIamConfiguration = {
  bucketPolicyOnly?: Maybe<GcpStorageBucketIamConfigurationMetadata>;
  publicAccessPrevention?: Maybe<Scalars['String']>;
  uniformBucketLevelAccess?: Maybe<GcpStorageBucketIamConfigurationMetadata>;
};

export type GcpStorageBucketIamConfigurationMetadata = {
  enabled?: Maybe<Scalars['Boolean']>;
  lockedTime?: Maybe<Scalars['String']>;
};

export type GcpStruct = {
  fields?: Maybe<Array<Maybe<GcpValue>>>;
};

export type GcpSubnet = GcpBaseResource & {
  creationTimestamp?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enableFlowLogs?: Maybe<Scalars['Boolean']>;
  fingerprint?: Maybe<Scalars['String']>;
  gatewayAddress?: Maybe<Scalars['String']>;
  ipCidrRange?: Maybe<Scalars['String']>;
  ipv6CidrRange?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  logConfig?: Maybe<GcpSubnetLogConfig>;
  network?: Maybe<Array<Maybe<GcpNetwork>>>;
  privateIpGoogleAccess?: Maybe<Scalars['Boolean']>;
  privateIpv6GoogleAccess?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  purpose?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  secondaryIpRanges?: Maybe<Array<Maybe<GcpSubnetSecondaryRange>>>;
  selfLink?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  vmInstance?: Maybe<Array<Maybe<GcpVmInstance>>>;
  vpcConnectors?: Maybe<Array<Maybe<GcpVpcConnector>>>;
};

export type GcpSubnetLogConfig = {
  aggregationInterval?: Maybe<Scalars['String']>;
  enable?: Maybe<Scalars['Boolean']>;
  filterExpr?: Maybe<Scalars['String']>;
  flowSampling?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  metadataFields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpSubnetSecondaryRange = {
  id: Scalars['String'];
  ipCidrRange?: Maybe<Scalars['String']>;
  rangeName?: Maybe<Scalars['String']>;
};

export type GcpTag = {
  id: Scalars['String'];
  key: Scalars['String'];
  kms?: Maybe<Array<Maybe<GcpKmsKeyRing>>>;
  value: Scalars['String'];
};

export type GcpTargetHttpsProxy = GcpBaseResource & {
  authorizationPolicy?: Maybe<Scalars['String']>;
  creationTimestamp?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  proxyBind?: Maybe<Scalars['Boolean']>;
  quicOverride?: Maybe<Scalars['String']>;
  selfLink?: Maybe<Scalars['String']>;
  serverTlsPolicy?: Maybe<Scalars['String']>;
  sslCertificates?: Maybe<Array<Maybe<Scalars['String']>>>;
  sslPolicy?: Maybe<Scalars['String']>;
  urlMap?: Maybe<Scalars['String']>;
};

export type GcpTargetSslProxy = GcpBaseResource & {
  creationTimestamp?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  proxyHeader?: Maybe<Scalars['String']>;
  selfLink?: Maybe<Scalars['String']>;
  service?: Maybe<Scalars['String']>;
  sslCertificates?: Maybe<Array<Maybe<Scalars['String']>>>;
  sslPolicy?: Maybe<Scalars['String']>;
};

export type GcpValue = {
  boolValue?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  key: Scalars['String'];
  listValue?: Maybe<GcpListValue>;
  nullValue?: Maybe<Scalars['String']>;
  numberValue?: Maybe<Scalars['Float']>;
  stringValue?: Maybe<Scalars['String']>;
  structValue?: Maybe<GcpStruct>;
};

export type GcpVmInstance = GcpBaseResource & {
  advancedMachineFeatures?: Maybe<GcpAdvancedMachineFeatures>;
  canIpForward?: Maybe<Scalars['Boolean']>;
  confidentialInstanceConfig?: Maybe<GcpConfidentialInstanceConfig>;
  cpuPlatform?: Maybe<Scalars['String']>;
  creationTimestamp?: Maybe<Scalars['String']>;
  deletionProtection?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  disks?: Maybe<Array<Maybe<GcpAttachedDisk>>>;
  displayDevice?: Maybe<GcpDisplayDevice>;
  fingerprint?: Maybe<Scalars['String']>;
  guestAccelerators?: Maybe<Array<Maybe<GcpAcceleratorConfig>>>;
  hostname?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  labelFingerprint?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Maybe<GcpRawLabel>>>;
  lastStartTimestamp?: Maybe<Scalars['String']>;
  lastStopTimestamp?: Maybe<Scalars['String']>;
  lastSuspendedTimestamp?: Maybe<Scalars['String']>;
  machineType?: Maybe<Scalars['String']>;
  metadata?: Maybe<GcpMetadata>;
  minCpuPlatform?: Maybe<Scalars['String']>;
  network?: Maybe<Array<Maybe<GcpNetwork>>>;
  networkInterfaces?: Maybe<Array<Maybe<GcpComputeNetworkInterface>>>;
  privateIpv6GoogleAccess?: Maybe<Scalars['String']>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  reservationAffinity?: Maybe<GcpReservationAffinity>;
  resourcePolicies?: Maybe<Array<Maybe<Scalars['String']>>>;
  satisfiesPzs?: Maybe<Scalars['Boolean']>;
  scheduling?: Maybe<GcpScheduling>;
  selfLink?: Maybe<Scalars['String']>;
  serviceAccounts?: Maybe<Array<Maybe<GcpVmInstanceServiceAccount>>>;
  shieldedInstanceConfig?: Maybe<GcpShieldedInstanceConfig>;
  shieldedInstanceIntegrityPolicy?: Maybe<GcpShieldedInstanceIntegrityPolicy>;
  startRestricted?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  statusMessage?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<GcpSubnet>>>;
  tags?: Maybe<GcpComputeTags>;
  zone?: Maybe<Scalars['String']>;
};

export type GcpVmInstanceServiceAccount = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  scopes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GcpVpcConnector = {
  cloudFunction?: Maybe<Array<Maybe<GcpCloudFunction>>>;
  connectedProjects?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['String'];
  ipCidrRange?: Maybe<Scalars['String']>;
  maxThroughput?: Maybe<Scalars['Int']>;
  minThroughput?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Array<Maybe<GcpNetwork>>>;
  project?: Maybe<Array<Maybe<GcpProject>>>;
  projectId: Scalars['String'];
  region?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  subnet?: Maybe<Array<Maybe<GcpSubnet>>>;
};
