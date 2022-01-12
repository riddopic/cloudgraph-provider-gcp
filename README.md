CloudGraph GCP Provider
=======================

Use the CloudGraph GCP Provider to scan and normalize cloud infrastructure using the [GCP Client Libraries](https://github.com/googleapis/google-cloud-node)

<!-- toc -->
- [CloudGraph GCP Provider](#cloudgraph-gcp-provider)
- [Install](#install)
- [Authentication](#authentication)
- [Multi Account](#multi-account)
- [Configuration](#configuration)
- [Supported Services](#supported-services)
<!-- tocstop -->

# Install

Install the GCP provider in CloudGraph

```
cg init gcp
```

# Authentication

Authenticate the CloudGraph GCP Provider using service account keys:

- [Create service account key(s)](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#iam-service-account-keys-create-gcloud)

# Multi Account

CloudGraph is able to scan multiple GCP [service accounts](https://cloud.google.com/iam/docs/service-accounts) at once. This is done by entering a project ID and the [service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating) file location for each service account when running `cg init`. All resources will be tagged with a `projectId` so you can query resources specific to a project or query resources **across** accounts!

# Configuration

CloudGraph creates a configuration file at:

- UNIX: `~/.config/cloudgraph/.cloud-graphrc.json`
- Windows: `%LOCALAPPDATA%\cloudgraph/.cloud-graphrc.json`

NOTE: CloudGraph will output where it stores the configuration file and provider data as part of the `cg init` command

CloudGraph will generate this configuration file when you run `cg init gcp`. You may update it manually or by running `cg init gcp` again.

```
"gcp": {
  "accounts": [
    {
      "projectId": "autocloud-sandbox",
      "keyFilename": "/Users/me/autocloud-sandbox.json"
    },
    {
      "projectId": "cloudgraph-sample",
      "keyFilename": "/Users/me/cloudgraph-sample.json"
    }
  ],
  "regions": "us-central1,us-east1",
  "resources": "vpc,project"
}
```

CloudGraph GCP Provider will ask you what regions you would like to crawl and will by default crawl for **all** supported resources in **selected** regions in the **default** account. You can update the `regions` or `resources` fields in the `cloud-graphrc.json` file to change this behavior. You can also select which `resources` to crawl in the `cg init gcp` command by passing the the `-r` flag: `cg init gcp -r`

# Supported Services

| Service | Relations |
| ------------------------ | ------------------------ |
| dnsManagedZone           | project                  |
| dnsPolicy                | project, network         |
| firewall                 | network, project         |
| folder                   | organization, project    |                        
| kms                      | project                  |
| iamPolicy                | project                  |
| logBucket                | logView, project         |    
| logSink                  | project                  |
| logView                  | logBucket, project       |
| network                  | dnsPolicy, firewall, project, subnet, vmInstance, vpc     |
| organization             | folder, project          |
| project                  | ALL SERVICES             |
| secretManager            | project                  |
| storageBucket            | project                  |
| subnet                   | project, network, vmInstance, vpc    |
| vmInstance               | project, network, subnet |             
| vpc                      | project, network, subnet |

