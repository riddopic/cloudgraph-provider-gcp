import cuid from 'cuid'
import { google } from '@google-cloud/compute/build/protos/protos'
import { GcpVmInstance } from '../../types/generated'
import { RawGcpVmInstance } from './data'
import { enumKeyToString, formatLabelsFromMap } from '../../utils/format'

export default ({
  service,
  account,
  region,
}: {
  service: RawGcpVmInstance
  account: string
  region: string
}): GcpVmInstance => {
  const {
    id,
    name,
    projectId,
    advancedMachineFeatures,
    canIpForward,
    confidentialInstanceConfig,
    cpuPlatform,
    creationTimestamp,
    deletionProtection,
    description,
    disks,
    displayDevice,
    fingerprint,
    guestAccelerators,
    hostname,
    kind,
    labelFingerprint,
    labels,
    lastStartTimestamp,
    lastStopTimestamp,
    lastSuspendedTimestamp,
    machineType,
    metadata,
    minCpuPlatform,
    privateIpv6GoogleAccess,
    reservationAffinity,
    resourcePolicies,
    satisfiesPzs,
    scheduling,
    selfLink,
    serviceAccounts,
    shieldedInstanceConfig,
    shieldedInstanceIntegrityPolicy,
    startRestricted,
    status,
    statusMessage,
    tags,
    zone,
  } = service

  return {
    id,
    projectId,
    region,
    name,
    advancedMachineFeatures,
    canIpForward,
    confidentialInstanceConfig: {
      enableConfidentialCompute: confidentialInstanceConfig?.enableConfidentialCompute,
    },
    cpuPlatform,
    creationTimestamp,
    deletionProtection,
    description,
    disks: disks?.map(disk => ({
      id: cuid(),
      autoDelete: disk?.autoDelete,
      boot: disk?.boot,
      deviceName: disk?.deviceName,
      diskEncryptionKey: disk?.diskEncryptionKey,
      index: disk?.index,
      kind: disk?.kind,
      licenses: disk?.licenses,
      source: disk?.source,
      diskSizeGb: disk?.diskSizeGb?.toString(),
      guestOsFeatures: disk?.guestOsFeatures?.map(feat => ({
        id: cuid(),
        type: enumKeyToString(google.cloud.compute.v1.GuestOsFeature.Type, feat?.type),
      })),
      initializeParams: {
        description: disk?.initializeParams?.description,
        diskName: disk?.initializeParams?.diskName,
        diskType: disk?.initializeParams?.diskType,
        resourcePolicies: disk?.initializeParams?.resourcePolicies,
        sourceImage: disk?.initializeParams?.sourceImage,
        sourceImageEncryptionKey: disk?.initializeParams?.sourceImageEncryptionKey,
        sourceSnapshot: disk?.initializeParams?.sourceSnapshot,
        sourceSnapshotEncryptionKey: disk?.initializeParams?.sourceSnapshotEncryptionKey,
        diskSizeGb: disk?.initializeParams?.diskSizeGb?.toString(),
        onUpdateAction: enumKeyToString(google.cloud.compute.v1.AttachedDiskInitializeParams.OnUpdateAction, disk?.initializeParams?.onUpdateAction),
        labels: formatLabelsFromMap(disk?.initializeParams?.labels),
        provisionedIops: disk?.initializeParams?.provisionedIops?.toString(),
      },
      interface: enumKeyToString(google.cloud.compute.v1.AttachedDisk.Interface, disk?.interface),
      mode: enumKeyToString(google.cloud.compute.v1.AttachedDisk.Mode, disk?.mode),
      shieldedInstanceInitialState: {
        dbs: disk?.shieldedInstanceInitialState?.dbs?.map(db => ({
          id: cuid(),
          content: db?.content,
          fileType: enumKeyToString(google.cloud.compute.v1.FileContentBuffer.FileType, db?.fileType),
        })),
        dbxs: disk?.shieldedInstanceInitialState?.dbxs?.map(dbx => ({
          id: cuid(),
          content: dbx?.content,
          fileType: enumKeyToString(google.cloud.compute.v1.FileContentBuffer.FileType, dbx?.fileType),
        })),
        keks: disk?.shieldedInstanceInitialState?.keks?.map(kek => ({
          id: cuid(),
          content: kek?.content,
          fileType: enumKeyToString(google.cloud.compute.v1.FileContentBuffer.FileType, kek?.fileType),
        })),
        pk: {
          id: cuid(),
          content: disk?.shieldedInstanceInitialState?.pk?.content,
          fileType: enumKeyToString(google.cloud.compute.v1.FileContentBuffer.FileType, disk?.shieldedInstanceInitialState?.pk?.fileType),
        },
      },
      type: enumKeyToString(google.cloud.compute.v1.AttachedDisk.Type, disk?.type),
    })),
    displayDevice: {
      enableDisplay: displayDevice?.enableDisplay,
    },
    fingerprint,
    guestAccelerators: guestAccelerators?.map(acc => ({
      id: cuid(),
      acceleratorCount: acc?.acceleratorCount,
      acceleratorType: acc?.acceleratorType,
    })),
    hostname,
    kind,
    labelFingerprint,
    labels: formatLabelsFromMap(labels),
    lastStartTimestamp,
    lastStopTimestamp,
    lastSuspendedTimestamp,
    machineType,
    metadata: {
      fingerprint: metadata?.fingerprint,
      kind: metadata?.kind,
      items: metadata?.items?.map(item => ({
        id: cuid(),
        key: item?.key,
        value: item?.value,
      }))
    },
    minCpuPlatform,
    privateIpv6GoogleAccess: enumKeyToString(google.cloud.compute.v1.Instance.PrivateIpv6GoogleAccess, privateIpv6GoogleAccess),
    reservationAffinity: {
      key: reservationAffinity?.key,
      values: reservationAffinity?.values,
      consumeReservationType: enumKeyToString(google.cloud.compute.v1.ReservationAffinity.ConsumeReservationType, reservationAffinity?.consumeReservationType),
    },
    resourcePolicies,
    satisfiesPzs,
    scheduling: {
      automaticRestart: scheduling?.automaticRestart,
      locationHint: scheduling?.locationHint,
      minNodeCpus: scheduling?.minNodeCpus,
      preemptible: scheduling?.preemptible,
      nodeAffinities: scheduling?.nodeAffinities?.map(na => ({
        id: cuid(),
        key: na?.key,
        values: na?.values,
        operator: enumKeyToString(google.cloud.compute.v1.SchedulingNodeAffinity.Operator, na?.operator),
      })),
      onHostMaintenance: enumKeyToString(google.cloud.compute.v1.Scheduling.OnHostMaintenance, scheduling?.onHostMaintenance),
    },
    selfLink,
    serviceAccounts: serviceAccounts?.map(sa => ({
      id: cuid(),
      email: sa?.email,
      scopes: sa?.scopes,
    })),
    shieldedInstanceConfig: {
      enableIntegrityMonitoring: shieldedInstanceConfig?.enableIntegrityMonitoring,
      enableSecureBoot: shieldedInstanceConfig?.enableSecureBoot,
      enableVtpm: shieldedInstanceConfig?.enableVtpm,
    },
    shieldedInstanceIntegrityPolicy: {
      updateAutoLearnPolicy: shieldedInstanceIntegrityPolicy?.updateAutoLearnPolicy,
    },
    startRestricted,
    status: enumKeyToString(google.cloud.compute.v1.Instance.Status, status),
    statusMessage,
    tags: {
      fingerprint: tags?.fingerprint,
      items: tags?.items,
    },
    zone,
  }
}
