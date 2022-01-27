/**
 * Set relations between services to data sharing
 * The key of the object represents the parent or base service,
 * it might contain a array of dependant or childs that must be executed after the parent
 */
export default {
  logBucket: ['logView'],
  organization: ['folder'],
  project: ['iamPolicy', 'dnsManagedZone', 'dnsPolicy', 'kms', 'vpc', 'logBucket', 'logSink'],
  storageBucket: ['iamPolicy'],
  folder: ['iamPolicy']
}
